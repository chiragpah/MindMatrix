const redis=require("../utils/redis")
const userModel=require("../Models/user.model")

// get user by id
const getUserById = async (id, res) => {
  const userJson = await redis.get(id);

  if (userJson) {
    const user = JSON.parse(userJson);
    res.status(201).json({
      success: true,
      user,
    });
  }
};

// Get All users
const getAllUsersService = async (res) => {
  console.log("we got the users all ")
  const users = await userModel.find().sort({ createdAt: -1 });
  console.log("we got the users "+users)
  res.status(201).json({
    success: true,
    users,
  });
};

// update user role
const updateUserRoleService = async (res,id,role) => {
  const user = await userModel.findByIdAndUpdate(id, { role }, { new: true });

  res.status(201).json({
    success: true,
    user,
  });
}
module.exports={getAllUsersService,getUserById,updateUserRoleService}