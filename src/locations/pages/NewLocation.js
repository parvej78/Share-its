import React, {useState} from "react";
import "./NewLocation.css";
const NewLocation =()=>{
    const [newlocation, setNewlocation]=useState({
        title:'',
        desc:'',
        address:'',
    });

    const submitHandler=(event)=>{
        event.preventDefault();
        console.log("new location page : ", newlocation);
    };
    const changeHandler=(event)=>{
        const inputname= event.target.name;
        const newValue=event.target.value;

        setNewlocation(previousValue =>{
        if(inputname==="newlocationtitle"){
            return {
                title: newValue,
                desc: previousValue.desc,
                address: previousValue.address
            }
        }
        else if (inputname==="newlocationdesc"){
            return {
                title:previousValue.title,
                desc: newValue,
                address:previousValue.address
            }
        }
        else if(inputname==="newlocationaddr"){
            return{
                title: previousValue.title,
                desc: previousValue.desc,
                address:newValue
            }
        }
        })
    };
    return ( 
        <form className="location-form" onSubmit={submitHandler}>
            <div className ="form-control">
                <label>
                    Title 
                    <input name ="newlocationtitle" type="text" required  onChange={changeHandler}/>
                </label>
            </div>
            <div className ="form-control">
                <label>
                    Description
                    <textarea name ="newlocationdesc" type="text" required onChange={changeHandler} />
                </label>
                </div>
                <div className ="form-control">
                <label>
                    Address
                    <input name ="newlocationaddr" type="text" required  onChange={changeHandler}/>
                </label>
            </div>
            <div className="formss-control">
                <button>Submit</button>
            </div>
            

        </form>
          
    )
};

export default NewLocation;