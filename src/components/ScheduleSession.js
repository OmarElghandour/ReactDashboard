import React, {useState} from "react";

const ScheduleSession = () => {
    const [session , setSession] = useState({
       time : "",
       date : ""
    });
    const handelFormSubmission = (event) => {
        event.preventDefault();
        console.log(JSON.stringify(session));
    };
    const handelFiledChange = (event) => {
        setSession({...session , [event.target.name] : event.target.value});
    };
    return (

        <div className={'container'}>
            <form onSubmit={handelFormSubmission}>
                <label htmlFor="sessionDate">Session Date:</label>
                <input onChange={handelFiledChange} type="date" id="sessionDate" name="date" />
                <label htmlFor="sessionTime">Session Time:</label>
                <input onChange={handelFiledChange} type="time" id="sessionTime" name="time" />
                <input type="submit" />
            </form>

        </div>
    )
};
export default ScheduleSession;
