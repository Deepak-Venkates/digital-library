import React, { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const CreatePassword = () => {

  const [firstname, setFirstName] = useState("");
  const [lastname, setlastName] = useState("");
  const [mail, setMail] = useState("");
  const [createPassword, setCreatePassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [password, setPassword] = useState("");
  const [photo, setPhoto] = useState("");
  const navigate = useNavigate();
  const Back = () => {
    navigate("/")
  }
  useEffect(() => {
    SavePassword();
  }, [password]);


  const SavePassword = async () => {

    const result = await axios.get("http://localhost:3000/users");
    console.log(mail);
    console.log(result['data']);
    const list = result['data'].find(o => o.mail == mail);
    console.log(list);
    console.log(list.id);
    console.log(list.mail);
    if (list !== undefined) {
      console.log(list);
      setFirstName(list.firstname);
      console.log(firstname);
      setlastName(list.lastname);
      console.log(lastname);
      setMail(list.mail);
      console.log(createPassword);
      setPassword(createPassword);
      console.log(password);
      setPhoto(list.photo);
      if ((createPassword != " " && confirmPassword != " ") && (createPassword == confirmPassword)) {
        await axios.put(`http://localhost:3000/users/${list.id}`, {
          firstname,
          lastname,
          photo,
          mail,
          password
        })
        navigate('/');
      }
      else {

        alert("Password Fields are Empty or not Equal");
      }
    }
    else {
      alert("Entered email is incorrect");
    }
  }

  return (

    <div>
      <section className="text-center">

        <div
          className="p-5 bg-image"
          style={{
            backgroundImage:
              'url("https://mdbootstrap.com/img/new/textures/full/171.jpg")',
            height: 300
          }}
        />

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
                <div style={{ display: "flex", marginLeft: "430px" }}>
                  <h2 className="fw-bold mb-5">Update Password</h2>
                  <button className="btn btn-secondary btn-block" onClick={Back} style={{ marginLeft: "360px", height: "40px" }}>Back</button>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="email"
                    id="form3Example3"
                    className="form-control"
                    onChange={e => setMail(e.target.value)}
                  />
                  <label className="form-label" htmlFor="form3Example3">
                    Email address
                  </label>
                </div>

                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control"
                    onChange={e => setCreatePassword(e.target.value)}
                  />
                  <label className="form-label" htmlFor="form3Example4">
                    Create Password
                  </label>
                </div>
                <div className="form-outline mb-4">
                  <input
                    type="password"
                    id="form3Example4"
                    className="form-control"
                    onChange={e => setConfirmPassword(e.target.value)}
                  />
                  <label className="form-label" htmlFor="form3Example4">
                    Confirm Password
                  </label>
                </div>

                <button onClick={SavePassword} className="btn btn-primary btn-block mb-4">
                  Save password
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

    </div>

  );
}


export default CreatePassword;