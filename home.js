import React, { useState, useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import college from "../assets/college.jpg";
import "../App.css";
import wipro from '../assets/wipro.jpg';
import tcs from '../assets/tcs.jpg';
import sfl from '../assets/sfl.jpg';
import cub from '../assets/cub.jpg';
import zoho from '../assets/zoho.jpg';
import infosys from '../assets/info.jpg';
import bg from "../assets/homebg.jpg";

const Home = () => {

    const navigate = useNavigate();

    let user = localStorage.getItem('Id');
    console.log(user);


    return (
        <div className="App" style={{ marginTop: "40px" }}>

            
            <div className="image" style={{ margin: "0", marginTop: "40px", padding: "0" }}>
                
                <img src={college} style={{ margin: "0", padding: "0", width: "1250px",borderRadius:"10px",height:"500px" }} />

                <p style={{ margin: "30px 0" }}> Swami Dayananda Educational Trust (SDET), a public charitable trust is involved in providing quality
                    education to the economically backward sections of society surrounding Manjakkudi village in Tiruvarur
                    district, Tamil Nadu.
                    Manjakkudi is a small hamlet and is the heart of all of SDET’s activities in the region.
                    SDET oversees the day to day running of three educational institutions in Manjakkudi and
                    Sembangudi village.
                    This meets the educational requirements of 300 villages surrounding Manjakkudi on a daily basis.
                    Over the years, SDET has expanded its scope of activities to include traditional knowledge systems
                    (Vedapatashala and Vedanta retreats), animal welfare (Goshala), sustainable living initiatives
                    (organic farming), healthcare (Ayurveda Clinic and wellness centre) and other community
                    development initiatives.</p>
            </div>
            <center>
            <div style={{
                border: "0.5px solid black", width: "1050px",
                marginTop: "40px", marginBottom: "40px", borderRadius: "10px", boxShadow: "0 0 5px 2px red"
            }}>
                <br /><h2>TIED UP COMPANIES</h2>
                <table>
                    <tr>
                        <td>
                            <div className="card" style={{ margin: "20px", width: "300px", boxShadow: "0 0 2px 1px blue" }}>
                                <img className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">WIPRO</h5>
                                    <img src={wipro} style={{ marginTop: "10px", width: "150px", height: "100px" }} />
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="card" style={{ margin: "20px", width: "300px", boxShadow: "0 0 2px 1px blue" }}>
                                <img className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">SUNDARAM FINANCE</h5>
                                    <img src={sfl} style={{ marginTop: "10px", width: "150px", height: "100px" }} />
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="card" style={{ margin: "20px", width: "300px", boxShadow: "0 0 2px 1px blue" }}>
                                <img className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">TCS</h5>
                                    <img src={tcs} style={{ marginTop: "10px", width: "150px", height: "100px" }} />
                                </div>
                            </div>
                        </td>
                    </tr>
                    <tr>
                        <td>
                            <div className="card" style={{ margin: "20px", width: "300px", boxShadow: "0 0 2px 1px blue" }}>
                                <img className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">CUB</h5>
                                    <img src={cub} style={{ marginTop: "10px", width: "150px", height: "100px" }} />
                                </div>
                            </div>
                        </td>
                        <td>
                            <div className="card" style={{ margin: "20px", width: "300px", boxShadow: "0 0 2px 1px blue" }}>
                                <img className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">ZOHO</h5>
                                    <img src={zoho} style={{ marginTop: "10px", width: "150px", height: "100px" }} />
                                </div>
                            </div>
                        </td>       <td>
                            <div className="card" style={{ margin: "20px", width: "300px", boxShadow: "0 0 2px 1px blue" }}>
                                <img className="card-img-top" />
                                <div className="card-body">
                                    <h5 className="card-title">INFOSYS</h5>
                                    <img src={infosys} style={{ marginTop: "10px", width: "150px", height: "100px" }} />
                                </div>
                            </div>
                        </td>
                    </tr>
                </table>
            </div>
            </center>
            <div className="exp">
                <h2 style={{ marginTop: "0", padding: "10px 0", backgroundColor: "lightblue" }}>STUDENT EXPERIENCE ON DIGITAL LIBRARY</h2>
                <br />
                <br />
                <ul style={{ display: "flex", listStyleType: "none", padding: "0" }}>
                    <li style={{marginLeft:"100px", borderRight:" 0.5px solid darkgray",padding:"0"}}>
                        <h4>Surya P</h4><br />
                            Our staffs did a best coaching even in online <br />
                          classes through google meet.There is no such <br />
                          decrease in coaching level even in onlince classes.<br/>
                        <br />
                    </li>
                    <li style={{marginLeft:"120px", borderRight:" 0.5px solid darkgray"}}>
                        <h4>Bhuvaneshwaran G</h4><br/>
                        We gain our best knowledge in our oncampus<br/>
                        time.They built professional labs,library<br/>
                        and impressing infrastructure for our<br/>
                        best experience with campus.
                    </li>
                    <li style={{marginLeft:"120px"}}>
                        <h4>Jasim Arafath</h4><br/>
                        Its good to attend  bigger companies like wipro<br/>
                        SFL,TCS which are tied up with our college .<br/>
                        Our staffs train us very well to attend<br/>
                        all companies and we did our best in our coaching<br/>
                        and many of our students placed in a<br/>
                        reputed company for a reputed position.
                    </li>
                </ul>
            </div>
            <br/>
        </div>
    );
}
export default Home;

