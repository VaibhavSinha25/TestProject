const Car = require('../model/carModel');

exports.getAllCars = async(req,res,next) =>{
    
    try{
        const cars = await Car.find();
        res.status(200).json({
            success:true,
            count: cars.length,
            data:cars
        })
    }catch(err){
        console.log(err);
    }
};

exports.createCar = async(req,res,next) =>{
    try{
        const cars  = await Car.create(req.body);
        res.status(201).json({
            success:true,
            data: cars
        })

    }catch(err){
        console.log(err);
    }
}