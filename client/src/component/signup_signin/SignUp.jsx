import { Divider } from "@mui/material";
import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import "./signup.css";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Signup = () => {
  const [signupdata, setSignUpData] = useState({
    fname: "",
    email: "",
    mobile: "",
    password: "",
    cpassword: "",
  });

  // console.log(signupdata);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setSignUpData({ ...signupdata, [name]: value });
    // console.log(name, value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const { fname, email, mobile, password, cpassword } = signupdata;

    const res = await fetch(`http://localhost:8000/register`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        fname,
        email,
        mobile,
        password,
        cpassword,
      }),
    });
    const data = await res.json();
    console.log(data);

    if (res.status === 422 || !data) {
      toast.warning("Something went wrong", {
        position: "top-center",
      });
    } else {
      toast.success("Data Successfully added", {
        position: "top-center",
      });
      setSignUpData({
        ...signupdata,
        fname: "",
        email: "",
        mobile: "",
        password: "",
        cpassword: "",
      });
    }
  };

  return (
    <section>
      <div className="sign_container">
        <div className="sign_header">
          <img src="./blacklogoamazon.png" alt="signupimg" />
        </div>
        <div className="sign_form">
          <form method="POST">
            <h1>Create account</h1>
            <div className="form_data">
              <label htmlFor="name">Your name</label>
              <input
                type="text"
                name="fname"
                onChange={handleChange}
                value={signupdata.fname}
                id="name"
              />
            </div>
            <div className="form_data">
              <label htmlFor="email">email</label>
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={signupdata.email}
                id="email"
              />
            </div>
            <div className="form_data">
              <label htmlFor="mobile">Mobile number</label>
              <input
                type="number"
                name="mobile"
                onChange={handleChange}
                value={signupdata.mobile}
                id="mobile"
              />
            </div>
            <div className="form_data">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                onChange={handleChange}
                value={signupdata.password}
                id="password"
                placeholder="At least 6 characters"
              />
            </div>
            <div className="form_data">
              <label htmlFor="passwordg">Password again</label>
              <input
                type="password"
                name="cpassword"
                onChange={handleChange}
                value={signupdata.cpassword}
                id="passwordg"
              />
            </div>
            <button type="submit" className="signin_btn" onClick={handleSubmit}>
              Continue
            </button>

            <Divider />

            <div className="signin_info">
              <p>Already have an account?</p>
              <NavLink to="/login">Sign in</NavLink>
            </div>
          </form>
        </div>
        <ToastContainer />
      </div>
    </section>
  );
};

export default Signup;
