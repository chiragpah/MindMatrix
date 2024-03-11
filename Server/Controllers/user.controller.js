require("dotenv").config()
const userModel = require("../Models/user.model")
const ErrorHandler = require("../utils/ErrorHandler")
// const CatchAsyncError = require("../middleware/catchAsyncError")
const jwt = require("jsonwebtoken")
//const sendMail = require("../utils/sendMail")
//const ejs = require("ejs")
const path = require("path")
const {sendToken}=require("../utils/jwt")
const redis = require("../utils/redis")
const { error } = require("console")
const {getUserById,getAllUsersService,updateUserRoleService} = require("../services/user.service")
// const {getUserById} = require("../services/user.service")

//const cloudinary=require("cloudinary")
const registrationUser = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const isEmailExist = await userModel.findOne({ email });
        console.log("name is " + name);
        if (isEmailExist) {
            console.log("we have the email here already");
            return next(new ErrorHandler("Email already exists", 400));
        }

        // Create an instance of userModel
        const user = new userModel({
            name,
            email,
            password
        });

        const activationToken = createActivationToken(user);
        console.log(activationToken);
        const activationCode = activationToken.activationCode;
        
        const data = { user: { name: user.name }, activationCode };

        // const html = await ejs.renderFile(path.join(__dirname, "../mails/activation-mail.ejs"), data)

        try {
            console.log("we are inside try with data as " + data);
            // Uncomment the following lines to send the activation email
            // await sendMail({
            //     email: user.email,
            //     subject: "Activate your account",
            //     template: "activation-mail.",
            //     data,
            //     html
            // });

            // Save the user instance to the database
            await user.save();
            
            res.status(201).json({
                success: true,
                event:"user registred",
                message: `New User Registred`,
                activationToken: activationToken.token,
                data // send user data for check
            });
        } catch (error) {
            return next(new ErrorHandler(error.message, 400));
        }
    } catch (error) {
        return next(new ErrorHandler(error.message, 400));
    }
};

createActivationToken = (user) => {
    const activationCode = (Math.floor(Math.random() * 9000)+1000).toString()
    console.log(activationCode);
    const token = jwt.sign({
        user, activationCode
    },
        process.env.ACTIVATION_SECRET,
        {
            expiresIn: "10m"
        })
    return {
        token, activationCode
    }

}
const activateUser=(async(req,res,next)=>{
   try{
    console.log("in req");
    const {activation_token,activation_code}=req.body;
    console.log(activation_token,activation_code);
    const newUser=jwt.verify(activation_token,process.env.ACTIVATION_SECRET)
    
    console.log(newUser);
    if(activation_code!="1234"){
        return next(new ErrorHandler("Invalid Authentication Code",400))
    }
    const {name,email,password}=newUser.user;
    const existUser=await userModel.findOne({email});
    if(existUser){
        return next(new ErrorHandler("User already Exist",400))
    }

    const user=await userModel.create({
        name,email,password
    })
    res.status(201).json({
        success:true
    })
}
   catch(error){
    return next(new ErrorHandler(error.message,400))
   } 
})
const loginUser=(async(req,res,next)=>{
    try{
        console.log("hello");
        const {email,password}=req.body;
        if(!email||!password){
            return next(new ErrorHandler("Please Enter email and Password",400));
        }
        const user=await userModel.findOne({email}).select("+password");
        if(!user){
            return next(new ErrorHandler("Invalid email or password",400))
        }
        const isPasswordMatch=await user.comparePassword(password)
        if(!isPasswordMatch){
            return next(new ErrorHandler("Invalid email or password",400))
        }
        
        sendToken(user,200,res)

    }
    catch(error){
        return next(new ErrorHandler(error.message, 400)) 
    }
})
const logOutUser=(async(req,res,next)=>{
    try{
        res.cookie("access_token","",{maxAge:1});
        res.cookie("refresh_token","",{maxAge:1});
       const userID=req.user?._id||''
        redis.del(userID)
        res.status(200).json({
            success:true,
        message:"Logged out successfully"
        })
    }
    catch(error){
        return next(new ErrorHandler(error.message,400))
    }
})
// const updateAccessToken=(async(req,res,next)=>{
//     try{
//         const refresh_token=req.cookies.refresh_token
        
        
//         const decoded=jwt.verify(refresh_token,
//             process.env.REFRESH_TOKEN)
          
//         const message="Could not Refresh token"
//         if(!decoded){
//             return next(new ErrorHandler(message,400))
//         }
//         const session=await redis.get(decoded.id)
      
//         if(!session){
//             return next(new ErrorHandler(message,400))
//         }
//         const user=JSON.parse(session)
//         const accessToken=jwt.sign({id:user._id},process.env.ACCESS_TOKEN,{
//             expiresIn:"5m"
//         })
//         const refreshToken=jwt.sign({id:user._id},process.env.REFRESH_TOKEN,{
//             expiresIn:"3d"
//         })
//         req.user=user
//         res.cookie("access_token",accessToken,accessTokenOptions)
//         res.cookie("refresh_token",refreshToken,refreshTokenOptions)

//           res.status(200).json({
//             status:"success",
//             accessToken
//           })
//     }
//     catch{
//         return next(new ErrorHandler(error.message,400))
//     }
// })
const getUserInfo=(async(req,res,next)=>{
    try{
        const userId=req.user?._id;
        console.log("we got the user id as "+userId);
        getUserById(userId,res);
    }
    catch(error){
        return next(new ErrorHandler(error.message),400)
    }
})
// const socialAuth=(async(req,res,next)=>{
//     try{
//         const {email,name,avatar}=req.body
//         const user=await userModel.findOne({email})
//         if(!user){
//             const newUser=await userModel.create({email,name,avatar})
//             sendToken(newUser,200,res)
//         }
//         else{
//             sendToken(user,200,res)
//         }
//     }   
//     catch(error){
//         return next(new ErrorHandler(error.message,400))

//     }
// })
const updateUserInfo = async (req, res, next) => {
    console.log("We are updating user");
    try {
        console.log("We are inside try");
        const { name,photo  } = req.body;
        const userId = req.user?._id;
        console.log("Request User ID:", req.user?._id);
        console.log("Request Body:", req.body);
        console.log("Request File:", req.file);
        // Add more properties as needed
        console.log("name  is "+name +"and photos is "+photo.type )
        if (!userId) {
            return next(new ErrorHandler("User ID not provided", 400));
        }

        const user = await userModel.findById(userId);

        if (!user) {
            return next(new ErrorHandler("User not found", 404));
        }

        // Update name if provided
        if (name) {
            user.name = name;
            console.log(user.name + " user name");
        }

        // Update profile photo if provided
        if (req.file) {
            // Assuming req.file contains the uploaded photo
            // Handle the photo upload logic here
            // For example, you can use cloudinary or any other image hosting service
            // Update user's photo details in the database
            console.log("we want to upload the photot ")
            user.profilePhoto = {
                filename: req.file.filename, // adjust this based on your file upload setup
                url: `path/to/uploads/${req.file.filename}`, // adjust this based on your file upload setup
            };
        }

        console.log("Trying to save");
        await user.save();

        // Assuming `redis.set` is a Promise-based function
        await redis.set(userId, JSON.stringify(user));

        console.log("User updated");
        res.status(201).json({
            success: true,
            user,
        });

    } catch (error) {
        console.error(error); // Log the error for debugging
        return next(new ErrorHandler(error.message, 500)); // Internal Server Error
    }
};


const updateUserPassword = (async (req, res, next) => {
    try {
        console.log("ere");
        const { currentPassword, newPassword } = req.body;
        console.log(currentPassword +" user old password and new is "+newPassword)
        if (!currentPassword || !newPassword) {
            return next(new ErrorHandler("Enter old and new password", 400))
        }
        const user = await userModel.findById(req.user?._id).select("+password")
        if (user === undefined) {
            return next(new ErrorHandler("Invalid user", 400))
        }
        const isPasswordMatch = await user?.comparePassword(currentPassword)
        if (!isPasswordMatch) {
            return next(new ErrorHandler("Invalid old Password", 400))
        }
        user.password = newPassword
        await user.save();
        await redis.set(req.user?._id, JSON.stringify(user))
        res.status(201).json({
            success: true,
            user
        })

    }
    catch (error) {
        return next(new ErrorHandler(error.message, 400))
    }
})



// const updateProfilePicture = (async (req, res, next) => {
//     try {
//         const {avatar} = req.body;
        
//         const userId = req.user?._id;
//         console.log(avatar,userId);
//         const user = await userModel.findById(userId)
//         if (avatar && user) {
//             if (user?.avatar?.public_id) {
//                 //first delete old image and upload image
//                 await cloudinary.v2.uploader.destroy(user?.avatar?.public_id)
//                 //npm i cloudinary
//                 const mycloud = await cloudinary.v2.uploader.upload(avatar, {
//                     folder: "avatars",
//                     width: 150
//                 })
//                 user.avatar = {
//                     public_id: mycloud.public_id,
//                     url: mycloud.secure_url
//                 }
//             }
//             else {
//                 const mycloud = await cloudinary.v2.uploader.upload(avatar, {
//                     folder: "avatars",
//                     width: 150
//                 })
//                 user.avatar = {
//                     public_id: mycloud.public_id,
//                     url: mycloud.secure_url
//                 }
             
//             }
//         }
//         await user?.save();
//         await redis.set(userId, JSON.stringify(user));
//         res.status(200).json({
//             success: true,
//             user
//         })
//     }

//     catch (error) {
//         return next(new ErrorHandler(error.message, 400))
//     }
// })


// //get all user for admin
const getAllUsers = (async (req, res, next) => {
      try {
        console.log("we are calling the get all users service")
        getAllUsersService(res);
      } catch (error) {
        return next(new ErrorHandler(error.message, 400));
      }
    } );


// const updateUserRole = (async (req, res, next) => {
//           try {
//             const { email, role } = req.body;
//             const isUserExist = await userModel.findOne({email });
//             if (isUserExist) {
//               const id = isUserExist._id;
//               updateUserRoleService(res,id, role);
//             } else {
//               res.status(400).json({
//                 success: false,
//                 message: "User not found",
//               });
//             }
//           } catch (error) {
//             return next(new ErrorHandler(error.message, 400));
//           }
//         }
//       );


//      const deleteUser =(async (req, res, next) => {
//           try {
//             const { id } = req.params;
      
//             const user = await userModel.findById(id);
      
//             if (!user) {
//               return next(new ErrorHandler("User not found", 404));
//             }
      
//             await user.deleteOne({ id });
      
//             await redis.del(id);
      
//             res.status(200).json({
//               success: true,
//               message: "User deleted successfully",
//             });
//           } catch (error) {
//             return next(new ErrorHandler(error.message, 400));
//           }
//         }
//       );
module.exports = {registrationUser,activateUser,loginUser,updateUserInfo,updateUserPassword,getAllUsers ,getUserById,getUserInfo,logOutUser}