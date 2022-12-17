import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';

import { ToastContainer,toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Sign_in = () => {
    const [signindata, setSignInData] = useState({
        email: "",
        password: ""
    });

    // console.log(signindata);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setSignInData({...signindata,[name]:value});
        // console.log(name,value);
    };

    const handleSubmit=async(e)=>{
        e.preventDefault()
        const {email,password}= signindata
        const res = await fetch(`http://localhost:8000/login`, {
            method: "POST",
            headers: {
              "Content-Type": "application/json",
            },
            body: JSON.stringify({email, password}),
          })

          const data = await res.json();
          console.log(data);

          if (res.status === 400 || !data) {
            toast.warning("Something went wrong", {
              position: "top-center",
            });
          } else {
            toast.success("Login Successfully", {
              position: "top-center",
            });
            setSignInData({
              ...signindata,
              fname: "",
              email: "",
              mobile: "",
              password: "",
              cpassword: "",
            });
          }

    }

  

    return (
        <section>
            <div className="sign_container">
                <div className="sign_header">
                    <img src="./blacklogoamazon.png" alt="signupimg" />
                </div>
                <div className="sign_form">
                    <form method='POST'>
                        <h1>Sign-In</h1>

                        <div className="form_data">
                            <label htmlFor="email">Email</label>
                            <input type="email" name="email"
                                onChange={handleChange}
                                value={signindata.email}
                                id="email" />
                        </div>
                        <div className="form_data">
                            <label htmlFor="password">Password</label>
                            <input type="password" name="password"
                                onChange={handleChange}
                                value={signindata.password}
                                id="password" placeholder="At least 6 characters" />
                        </div>
                        <button type="submit" className="signin_btn" 
                        onClick={handleSubmit}
                        >Continue</button>
                    </form>
                    <ToastContainer />
                </div>
                <div className="create_accountinfo">
                    <p>New to Amazon?</p>
                    <button>  <NavLink to="/signup">Create your Amazon Account</NavLink></button>
                </div>
            </div>

        </section>
    )
}

export default Sign_in