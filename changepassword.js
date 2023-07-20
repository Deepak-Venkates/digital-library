import React from "react";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";


const ChangePassword = () => {

    const [createPassword,setCreatePassword ] = useState("");
    const [password,setPassword] = useState("");
    const [mail,setMail] = useState("");
    const [firstname,setFirstName]= useState("");
    const [lastname,setLastName] = useState("");
    const [photo,setPhoto] = useState("");
    let id = localStorage.getItem("Id");

    
    useEffect(() => {
        loadUser();
    }, []);

    const loadUser = async () => {
        let result = await axios.get(`http://localhost:3000/users/${id}`);
        console.log(result.data.firstname);
        setFirstName(result.data.firstname);
        console.log(firstname);
        setLastName(result.data.lastname);
        setPhoto(result.data.photo);
        setMail(result.data.mail);
        setPassword(result.data.password);
        console.log(photo);
    };
    const UpdatePassword = async (e) => {
        if((createPassword&&password!="")&&(createPassword==password)){ 
            e.preventDefault();
            await axios.put(`http://localhost:3000/users/${id}`,{
            firstname,
            lastname,
            mail,
            password,
            photo
            })
        }
        else{
            alert("Passwords does not same or empty ");
        }

    }

    return (

        <div style={{marginTop:"50px"}}>
               <div className="form-group" style={{display:"flex",marginLeft:"320px"}}>
                      <label style={{fontSize:"25px",paddingTop:"10px"}}>Create Password</label>
                        <input type='text'
                            maxLength="23"
                            style={{width:"400px",marginLeft:"80px"}}
                            className="form-control form-control-lg"
                            placeholder="Max Limit 18 Characters"
                            name="createPassword"
                            onChange={e => setCreatePassword(e.target.value)}
                        />
                    </div>
                    <div className="form-group" style={{display:"flex",marginLeft:"320px",marginTop:"40px"}}>
                      <label style={{fontSize:"25px",paddingTop:"10px"}}> Confirm Password</label>
                        <input type='password'
                            style={{width:"400px",marginLeft:"65px"}}
                            className="form-control form-control-lg"
                            placeholder="Max Limit 18 Characters"
                            name="password"
                            onChange={e => setPassword(e.target.value)}
                            >
                        </input>
                    </div>
         <center><button className="btn btn-primary" style={{marginTop:"40px"}} onClick={UpdatePassword}>Update Password</button></center> 
        </div>
    )
}
export default ChangePassword;