import React from "react";
import "./App.css";
import gallery from "./assets/gallery.jpg";
import { Link } from "react-router-dom";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";


const Login = () => {

    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [key, setKey] = useState("Hello");
    const navigate = useNavigate();


    const signup = async (e) => {
        e.preventDefault();
        const list = await axios.get("http://localhost:3000/users");
        console.log(list.data);
        let result = list.data.find(o => o.mail == email);
        console.log(result);
        if (result != undefined && result.password == password) {
            console.log(password);
            navigate(`/home`);
            localStorage.setItem('Id', result.id);
            setKey(result.id);
            console.log(key);
        }
        else {
            alert("Email or Password is Incorrect");
        }
    }


    return (
        <div className="loginpage">
            <>
                {/* Section: Design Block */}
                <section className="text-center text-lg-start" style={{ marginLeft: "200px" }} >
                    <style
                        dangerouslySetInnerHTML={{
                            __html:
                                "\n    .cascading-right {\n      margin-right: -50px;\n    }\n\n    @media (max-width: 991.98px) {\n      .cascading-right {\n        margin-right: 0;\n      }\n    }\n  "
                        }}
                    />
                    {/* Jumbotron */}
                    <div className="container py-4" >
                        <div className="row g-0 align-items-center" style={{ marginTop: "60px" }}>
                            <div className="col-lg-6 mb-5 mb-lg-0" style={{ width: "500px" }}>
                                <div
                                    className="card cascading-right"
                                    style={{
                                        background: "hsla(0, 0%, 100%, 0.55)",
                                        backdropFilter: "blur(30px)"
                                    }}
                                >
                                    <div className="card-body p-5 shadow-5 text-center" style={{ height: "750px", width: "500px" }}>
                                        <br />
                                        <br />
                                        <br />
                                        <h2 className="fw-bold mb-5" style={{ marginLeft: "40px" }}>Login</h2>
                                        <form style={{ marginLeft: "40px" }}>
                                            {/* Email input */}
                                            <div className="form-outline mb-4">
                                                <center>
                                                    <input
                                                        type="email"
                                                        id="form3Example3"
                                                        className="form-control"
                                                        style={{ width: "400px" }}
                                                        onChange={e => setEmail(e.target.value)}
                                                    />
                                                </center>
                                                <label className="form-label" htmlFor="form3Example3">
                                                    Email address
                                                </label>
                                            </div><br />
                                            {/* Password input */}
                                            <div className="form-outline mb-4">
                                                <center>
                                                    <input
                                                        type="password"
                                                        id="form3Example4"
                                                        className="form-control"
                                                        style={{ width: "400px" }}
                                                        onChange={e => setPassword(e.target.value)}
                                                    />
                                                </center>
                                                <label className="form-label" htmlFor="form3Example4">
                                                    Password
                                                </label>
                                            </div>

                                            <Link to="/forgetpassword">Forget password?</Link>
                                            <br /><br />


                                            {/* Submit button */}
                                            <button
                                                type="submit"
                                                className="btn btn-primary btn-block mb-4"
                                                onClick={(e) => signup(e)}
                                            >
                                                Login
                                            </button>
                                            <br />
                                            Don't have an account?<Link to="/adduser">Create account</Link>

                                        </form>
                                    </div>
                                </div>
                            </div>
                            <div className="col-lg-6 mb-5 mb-lg-0">
                                <img
                                    src={gallery}
                                    className="w-100 rounded-4 shadow-4"
                                    alt=""
                                    style={{ height: "800px", width: "500px" }}
                                />
                            </div>
                        </div>
                    </div>
                    {/* Jumbotron */}
                </section>
                {/* Section: Design Block */}
            </>

        </div>

    )
}

export default Login;