const orderModel=require("../models/order.model")
// const next=require("express")

// create new order
const newOrder =(async(data,res) => {
    const order = await orderModel.create(data);
   
    res.status(201).json({
        succcess:true,
        order,
    })

});

// Get All Orders
const getAllOrdersService = async (res) => {
    const orders = await orderModel.find().sort({ createdAt: -1 });
  
    res.status(201).json({
      success: true,
      orders,
    });
  };
  module.exports={newOrder,getAllOrdersService}
  
