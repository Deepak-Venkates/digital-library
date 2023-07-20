import React from "react";
import img from "../assets/sdc.jpg";
import "../App.css";
import library from "../assets/library.jpg"

const About = () => {
    return (
       
        <div className="App" style={{ border: "2px dotted green", borderRadius: "10px", marginTop: "100px", width: "1350px", marginLeft: "250px", cursor: "none" }}>
            <br />
            <h1 style={{ color: "cadetblue", marginLeft: "50px" }}>ABOUT THE DIGITAL LIBRARY</h1><br />

            <div style={{ display: "inline-block", marginLeft: "50px", marginBottom: "20px" }}>
                <img src={library} width={'500px'} height={'250px'} style={{ borderRadius: "5px" }} />
                <div style={{ padding: "20px" }}>
                    <p style={{ marginLeft: "40px" }}> This Digital Library was made by <span style={{ fontWeight: "bold" }}>
                        Adeep,Jasim and Deepak</span>.It was made using <span style={{ color: "blue" }}>React Js </span><br />
                        a framework of javascript. We used this framework to built this digital library as our <br />
                        mini project. We have yo login to enter this website.If you don't have an account you can create an account by clicking sign up link in login page.
                        You have to give your first name,last name,email,password and have to upload a profile picture for your account.If you forget your password while
                        login, you can change your password by clicking forget password in login page. It will redirect you to a forget password page.
                        You have to give your email and update password.After you logged in, you chan see some basic details in home page. 
                        There is a navbar in the top in which you can route to other pages like About , Materials , your profile and logout.In Materials 
                        page you can see , delete and upload materials. In your profile page, you can view your profile.You can also edit you profile and delete your account there. 

                    </p>
                </div>
            </div>
            <p></p>
        </div>
    );
}

export default About;