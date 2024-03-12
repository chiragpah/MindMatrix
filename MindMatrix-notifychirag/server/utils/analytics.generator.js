// import { Document, Model } from "mongoose";

 async function generateLast12MonthsData(model) {
    const last12Months = [];
    const currentDate = new Date();
    currentDate.setDate(currentDate.getDate() + 1);
  
    for (let i = 11; i >= 0; i--) {
      const endDate = new Date(
        currentDate.getFullYear(),
        currentDate.getMonth(),
        currentDate.getDate() - i * 28
      );
      const startDate = new Date(
        endDate.getFullYear(),
        endDate.getMonth(),
        endDate.getDate() - 28
      );
  
      const monthYear = endDate.toLocaleString("default", {
      
        month: "short"
       
      });
  
      const count = await model.countDocuments({
        createdAt: {
          $gte: startDate,
          $lt: endDate,
        },
      });
  
      last12Months.push({ month: monthYear, count });
      console.log(last12Months,"hii");
    }
    return { last12Months };
  }
module.exports={generateLast12MonthsData}  