import { React, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom"


const Adduser = () => {

  const navigate = useNavigate();
  const [firstname, setFirstName] = useState("");
  const [lastname, setLastName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState();


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


  const onsubmit = async (e) => {
    e.preventDefault();
    await axios.post("http://localhost:3000/users", {
      firstname,
      lastname,
      photo,
      mail,
      password

    })
    navigate('/');
  }

  const Back = () => {

    navigate("/");
  }

  return (    
    <>
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
              <div style={{ display: "flex", marginLeft: "480px" }}>
                  <h2 className="fw-bold mb-5">Sign Up</h2>
                  <button className="btn btn-secondary btn-block" onClick={Back} style={{ marginLeft: "380px", height: "40px" }}>Back</button>
                </div>
                <img style={{ width: "300px", maxHeight: "200px", marginBottom: "20px", }} src={photo}></img>
                <form onSubmit={(e)=>onsubmit(e)}>
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
                      onChange={e => setMail(e.target.value)}   
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
                    Sign up
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Section: Design Block */}
    </>

  );

}

export default Adduser;
