import React, {useEffect, useState} from "react";
import axios from "axios";

const UserProfile = () => {
    const [userProfile,setUserProfile] = React.useState({});
    const [profileForm, setProfileForm] = useState({
        firstName: "",
        lastName: "",
        phoneNumber : "",
        user_img :"",
        website : ""
    });

    const userId = JSON.parse(localStorage.getItem('loggedInUser')).userId;
    useEffect(  () => {
        const fetchData = async () => {
            const result = await axios(
                `${process.env.REACT_APP_SERVER_API_CODE}subscribers/userDetails/${userId}`,
            );

            setUserProfile(result.data);
        };
        fetchData();
    },[]);
    const handleChange = event => {
        const value = event.target.value;
        setProfileForm({...profileForm, [event.target.name]: value});
        console.log(profileForm);
    };

    return(

    <div className={'userProfile'}>
       <h4 className={'title'}>User profile works</h4>
        <div className={'container'}>
        <form>
            <div className={'row'}>

            <div className={'col-md-6'}>
                <img width={'200px'} height={'200px'} src={'https://scontent-hbe1-1.xx.fbcdn.net/v/t1.0-9/108371893_3118890418197448_6849241187604723800_n.jpg?_nc_cat=108&_nc_sid=09cbfe&_nc_ohc=2RtuthoeXUQAX_SyOps&_nc_ht=scontent-hbe1-1.xx&oh=4658e9d514365bb7d1123cc1ec25f41a&oe=5F63DB93'} />
            </div>

            <div className={'col-md-6'}>
            <div className="form-group">
                <label htmlFor="exampleInputEmail1">first Name</label>
                <input className={'form-control'}  type={'text'} value={profileForm.firstName} name={'firstName'} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Last Name</label>
                <input className={'form-control'} value={profileForm.lastName} type={'text'} name={'lastName'} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">Phone Number</label>
                <input className={'form-control'} value={profileForm.phoneNumber} type={'text'} name={'phoneNumber'} onChange={handleChange}/>
            </div>
            <div className="form-group">
                <label htmlFor="exampleInputPassword1">website</label>
                <input className={'form-control'} value={profileForm.website} type={'text'} name={'website'} onChange={handleChange}/>
            </div>
            <button type="submit" className="btn btn-primary">Submit</button>
            </div>
            </div>
        </form>


        </div>


    </div>

    );
};
export default UserProfile
