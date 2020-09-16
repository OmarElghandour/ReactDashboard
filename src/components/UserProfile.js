import React, {useEffect, useRef, useState} from "react";
import axios from "axios";

const UserProfile = () => {
    const imageUpload = useRef();
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
            let  userData = result.data.userData.UserProfile;
            fillFormData(userData);
        };
        fetchData();
    },[]);
    const handleChange = event => {
        const value = event.target.value;
        setProfileForm({...profileForm, [event.target.name]: value});
    };
    const fillFormData = userData => {
        setProfileForm({
            ...profileForm,
            firstName : userData.firstName,
            lastName: userData.lastName,
            phoneNumber : userData.phoneNumber,
            user_img : userData.user_img,
            website : userData.website
        });
    };
    const onButtonClick = () => {
        imageUpload.current.click() ;
    };
    const onImageUpload = event => {
        const file = event.target.files[0];
        const reader = new FileReader();
        const url = reader.readAsDataURL(file);
        reader.onloadend = () => {
            setProfileForm({...profileForm , user_img : reader.result});
        };
    };
    const updateUserProfile = () => {

        axios.post(`${process.env.REACT_APP_SERVER_API_CODE}subscribers/userProfile/update/${userId}`, profileForm).then( response =>  console.log(response))
          .catch(error => console.log(error));
    };
    const submitForm = event => {
      event.preventDefault();
      updateUserProfile();
    };

  return(
    <div className={'userProfile'}>
       <h4 className={'title'}>User profile works</h4>
        <div className={'container'}>
        <form onSubmit={submitForm}>
            <div className={'row'}>

            <div className={'col-md-6'}>
                <img onClick={onButtonClick} width={'200px'} height={'200px'} src={profileForm.user_img}  alt={''}/>
                <input ref={imageUpload} name={'user_img'} type='file' id='single' onChange={onImageUpload} />
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

        <pre>
        <code>
          {profileForm && JSON.stringify(profileForm, null, 4)}
        </code>
      </pre>
    </div>

  );
};
export default UserProfile
