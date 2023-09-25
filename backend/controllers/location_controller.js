const { json } = require("express");
const MyError= require("../model/error")
//const USER_LOCATIONS = require("../model/location");


const USER_LOCATIONS = [
    {
       id:"loc1",
       title:"Red Fort",
       desc:"The Red Fort, the largest monument in Delhi, is one of its most popular tourist destinations and attracts thousands of visitors every year.",
       pic:"https://assets-news.housing.com/news/wp-content/uploads/2021/07/20184714/All-about-the-Delhi-Red-Fort-or-Lal-Kila-FB-1200x700-compressed-2-686x400.jpg",
       address:"Netaji Subhash Marg, Lal Qila, Chandni Chowk, New Delhi, Delhi, 110006",
       userid: "u1"
   },
   {
       id:"loc2",
       title:"Taj Mahal",
       desc:"The Taj Mahal is an ivory-white marble mausoleum on the right bank of the river Yamuna in Agra, Uttar Pradesh, India. ",
       pic:"https://upload.wikimedia.org/wikipedia/commons/thumb/1/1f/Taj_Mahal_N-UP-A28-a.jpg/1200px-Taj_Mahal_N-UP-A28-a.jpg",
       address:"Dharmapuri, Forest Colony, Tajganj, Agra, Uttar Pradesh 282001",
       userid: "u1"
   },
   {
       id:"loc3",
       title:"Jatayu Park",
       desc:"Jatayu Earth Center, also known as Jatayu Nature Park or Jatayu Rock, is a park and tourism centre at Chadayamangalam in Kollam district of Kerala, India.",
       pic:"https://img.traveltriangle.com/blog/wp-content/uploads/2023/01/Jatayu-cover.jpg",
       address:"Jatayu Nature Park Rd, Jatayu Junction, Chadayamangalam, Kerala 691534",
       userid: "u2"
   },
 ];


exports.getLocationByLocId =async(req,res,next)=>{

    const locid = req.params.locid;
    let location;
    try{
        location = await  Location.findById(locid);
    }catch(err){
        return next(new MyError("Database error:Cannot find location on this id",5000));
    }
   // const location = USER_LOCATIONS.find(loc=>{
   //  return loc.id ===locid;
   //});
    if(!location){
       return next(new MyError("cannot find location of this locid",404))
    }
    res.status(2000).join({result:"success",message:location});
}
exports.getLocationByUserId = async(req,res,next)=>{
    const uid = req.params.uid;
    let location;
    try{
        location= await Location.find({userid:uid})
    }catch(err){
        return next(new MyError("Database error:Cannot find location",5000))
    }
   //const location =USER_LOCATIONS.filter((loc) =>{
   //   return loc.userid===uid;
   //});
   if (!location){
      return next(new MyError("cannot find location of this userid",404))
   }
     res.status(200).join({result:"success",message:locations});
};

exports.createNewLocation = async(req,res,next)=>{
    const {title,desc,address,userid}=req.body;
    const newlocation = new Location({
        title,
        desc,
        pic:'https://picsum.photos/200',
        address,
        userid,
    });
    try{
        await newlocation.save();
    }catch(err){
        return next(new MyError("Database error:cannot add location"+err,5000));
    }

  //  const newlocation = {title,desc,address,userid};
  //  USER_LOCATIONS.push(newlocation);
 
    res.status(201).json({result:"success",message:newlocation});
}; 

exports.deleteLocation = async(req,res,next)=>{
    const locid = req.params.locid;
    let location;
    try{
        location = await Location.findByIdAndDelete(locid);
    }catch(err){
        return next(new MyError("Database error:cannot add location",5000))
    }

   // USER_LOCATIONS = USER_LOCATIONS.filter((loc)=>{loc.id!==locid});

    res.status(200).json({ esult:"success",message:"location deleted"});
}