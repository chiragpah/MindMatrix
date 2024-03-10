const CourseModel=require("../models/course.model")

const createCourse=(async(data,res)=>{
const course=await CourseModel.create(data);
res.status(201).json({
    success:true,
    course
})
})



const getAllCoursesService = async (res) => {
    const courses = await CourseModel.find().sort({ createdAt: -1 });
  
    res.status(201).json({
      success: true,
      courses,
    });
  };
module.exports={createCourse,getAllCoursesService}