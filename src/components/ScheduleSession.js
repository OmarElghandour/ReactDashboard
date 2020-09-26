import React, {useState} from "react";
import Axios from "axios";

const ScheduleSession = () => {
    const userId = JSON.parse(localStorage.getItem('loggedInUser')).userId;
    const [session , setSession] = useState({
       time : "",
       startAt : "",
       createdBy : userId
    });
    const handelFormSubmission = (event) => {
        event.preventDefault();
        console.log(JSON.stringify(session));
        Axios.post(`${process.env.REACT_APP_SERVER_API_CODE}token`, session)
            .then( response =>  console.log(response))
            .catch(error => console.log(error));
    };
    const handelFiledChange = (event) => {
        setSession({...session , [event.target.name] : event.target.value});
    };
    return (

        <div className={'container'}>
            <form onSubmit={handelFormSubmission}>
                <label htmlFor="sessionDate">Session Date:</label>
                <input onChange={handelFiledChange} type="date" id="sessionDate" name="startAt" />
                <label htmlFor="sessionTime">Session Time:</label>
                <input onChange={handelFiledChange} type="time" id="sessionTime" name="time" />
                <input type="submit" />
            </form>

        </div>
    )
};
export default ScheduleSession;
