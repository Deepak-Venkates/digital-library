import React from "react";
import { useState, useEffect } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";

const Edituser = () => {

    const { id } = useParams();
    const navigate = useNavigate()
    const [firstname, setFirstName] = useState("");
    const [lastname, setLastName] = useState("");
    const [mail, setEmail] = useState("");
    const [photo, setPhoto] = useState("");
    const [password, setPassword] = useState("");


    useEffect(() => {
        loadUser();
    }, []);

    let user = localStorage.getItem('Id');

    const onImageChange = (event) => {
        console.log(event)
        if (event.target.files && event.target.files[0]) {
            let reader = new FileReader();
            reader.onload = (e) => {
                console.log(e)
                setPhoto(e.target.result);
            };
            reader.readAsDataURL(event.target.files[0]);

        }
    }
    const onedit = async (e) => {
        e.preventDefault();
        console.log(id);
        await axios.put(`http://localhost:3000/users/${user}`, {
            firstname,
            lastname,
            photo,
            mail,
            password
        })
        navigate(`/user/${user}`);
    }

    const loadUser = async () => {
        let result = await axios.get(`http://localhost:3000/users/${user}`);
        setFirstName(result.data.firstname);
        setLastName(result.data.lastname);
        setPhoto(result.data.photo);
        setEmail(result.data.mail);
        setPassword(result.data.password);
        console.log(photo);
    };

    const Back = () => {
        navigate(`/user/${user}`);
    }

    return (
        <div className="App"> 
          
          <br/>
      {/* Section: Design Block */}
      <section className="text-center">
        {/* Background image */}
        <div
          className="p-5 bg-image"
          style={{
            backgroundImage:
              'url("https://mdbootstrap.com/img/new/textures/full/171.jpg")',
            height: 300
          }}
        />
        {/* Background image */}
        <div
          className="card mx-4 mx-md-5 shadow-5-strong"
          style={{
            marginTop: "-100px",
            background: "hsla(0, 0%, 100%, 0.8)",
            backdropFilter: "blur(30px)",
          }}
        >
          <div className="card-body py-5 px-md-5">
            <div className="row d-flex justify-content-center">
              <div className="col-lg-8">
                <div style={{display:"flex",marginLeft:"430px"}}>
                <h2 className="fw-bold mb-5">Edit User</h2>
                <button className="btn btn-secondary btn-block" onClick={Back} style={{marginLeft:"280px",height:"40px"}}>Back</button>
                </div>
                <img style={{ width: "300px", maxHeight: "200px", marginBottom: "20px",borderRadius:"8px" }} src={photo}></img>
                <form onSubmit={(e)=>onedit(e)}>
                  {/* 2 column grid layout with text inputs for the first and last names */}
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example1"
                          className="form-control"
                          maxLength="18"
                          value={firstname}
                          onChange={e => setFirstName(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form3Example1">
                          First name
                        </label>
                      </div>
                    </div>
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          id="form3Example2"
                          className="form-control"
                          maxLength="18"
                          value={lastname}
                          onChange={e => setLastName(e.target.value)}
                        />
                        <label className="form-label" htmlFor="form3Example2">
                          Last name
                        </label>
                      </div>
                    </div>
                  </div>
                  {/* Email input */}
                  <div className="form-outline mb-4">
                    <input
                      type="email"
                      id="form3Example3"
                      className="form-control"
                      maxLength="23"
                      value={mail}
                      onChange={e => setEmail(e.target.value)}   
                    />
                    <label className="form-label" htmlFor="form3Example3">
                      Email address
                    </label>
                  </div>
                  {/* Password input */}
                  <div className="form-outline mb-4">
                    <input
                      type="password"
                      id="form3Example4"
                      className="form-control"
                      maxLength="18"
                      value={password}
                      onChange={e => setPassword(e.target.value)}
                    />
                    <label className="form-label" htmlFor="form3Example4">
                      Password
                    </label>
                  </div>
                  <div className="form-outline mb-4">
                    <input
                      type="file"
                      id="form3Example4"
                      className="form-control"
                      name="photo"
                      onChange={e => onImageChange(e)}
                    />
                    <label className="form-label" htmlFor="form3Example4">
                      Profile Picture
                    </label>
                  </div>
                  {/* Submit button */}
                  <button type="submit" className="btn btn-primary btn-block mb-4">
                    Update user
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section: Design Block */}
      </div>
     
    );
}

export default Edituser;