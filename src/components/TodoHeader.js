import React ,{useState}from 'react'

export default function TodoHeader() {
    var day=["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]
    var month= ["January","February","March","April","May","June","July", "August","September","October","November","December"]
    var d= new Date();  
     var time=new Date().toLocaleTimeString();
    //function for get time day month 
    const [times,setTimes]=useState(time);
   
     const UpdateTime=()=>{
        time=new Date().toLocaleTimeString(); 
        setTimes(time)
     }
     setInterval(UpdateTime,1000);
     //end of function for get time date/day/month 
    return (
        <div className="todo-header">
           
            <p className="time">{times},{day[d.getDay()]}</p>
            <p className="month">{d.getUTCDate()}-{month[d.getMonth()]}-{d.getUTCFullYear()}</p>
        
        </div>
    )
}
