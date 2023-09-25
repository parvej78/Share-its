const express = require('express');
const locationController = require('../controllers/location_controller');
const location_route = express.Router();

const MyError =require("../model/error")

 const location_router=express.Router();  //Router buid-in-method are used in user location 
 
 location_router.get("/:locid",locationController.getLocationByLocId);

 location_router.get("/user/:uid",locationController.getLocationByUserId);

 location_router.post("/",locationController.createNewLocation);
 
 location_router.delete("/:locid",locationController.deleteLocation);


 module.exports = location_router;

