const express = require("express");
const mongoose = require('mongoose');

const MyError = require("./model/error");
const location_route =require("./routes/locations_route");
const user_route =require("./routes/users_route");
const app = express();

app.use(express.json());

app.use("/api/locations",location_route);
app.use("/api/users",user_route);

app.use("*",(req,res,next)=>{
    return next(new MyError("Cannot find path",404));
})

app.use((error,req,res,next)=>{
    if(res.headerSent){
        next(error)
    }
    res.json(error.code || 5000);
    res.json({result:"fail",message:error.message  || "something bad happened",
});

});

mongoose
.connect(
    "mongodb+srv://share-itsadmin:xii4IRaOAcYwxLsO@cluster0.nicalla.mongodb.net/share-its?retryWrites=true&w=majority"
    )
.then(()=>{
    
app.listen(5000,()=>{
    console.log("Server running @ 5000");
}); 

})
.catch((error)=>{
    console.log(error);

})

