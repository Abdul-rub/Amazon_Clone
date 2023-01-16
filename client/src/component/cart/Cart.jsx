import React from "react";
import "./cart.css";
import { Divider } from "@mui/material";
import { useNavigate, useParams } from "react-router-dom";
import { useEffect } from "react";
import { useState } from "react";
import {useDispatch} from "react-redux"

const Cart = () => {
  const dispatch = useDispatch()
  const navigate= useNavigate()
  const { id } = useParams();
  // console.log(id)
  const [gdata, setGData] = useState([]);
  console.log(gdata);

  const getSpecData = async () => {
    const res = await fetch(`http://localhost:8000/products/${id}`, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    const data = await res.json();
    console.log(data);

    if (res.status !== 201) {
      console.log("No Data Found");
    } else {
      // console.log("data")
      setGData(data);
    }
  };

  useEffect(() => {
    getSpecData();
  }, []);

   //Add t ocart function
  //  const handleAddtoCart =  async(id)=>{
  //   const checkRes = await fetch(`http://localhost:8000/addcart/${id}`,{
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json",
  //       "Content-Type": "application/json",
  //     },
  //     body:JSON.stringify({
  //       gdata}),
  //     credentials:"include"
  //   });
  //   const data1 = await checkRes.json()
  //   console.log(data1+ "frontend data");
  //   if(checkRes.status ==401 || data1){
  //     console.log("User Invalid")
  //     alert("User Invalid")
  //   }else{
  //     alert("data added in cart")
  //   }
  //  }

   const handleAddtoCart=()=>{
       navigate('/cart')
   }


  return (
    <div className="cart_section">
      {gdata && Object.keys(gdata).length && (
        <div className="cart_container">
          <div className="left_cart">
            <img src={gdata.url} alt="item_image" />
            <div className="cart_btn">
              <button className="cart_btn1" onClick={handleAddtoCart}>Add To Cart</button>
              <button className="cart_btn2">Buy Now</button>
            </div>
          </div>
          <div className="right_cart">
            <h3>{gdata.title.shortTitle}</h3>
            <h4>{gdata.title.longTitle}</h4>
            <Divider />
            <p className="mrp">${gdata.price.mrp}</p>
            <p>
              Deal of the Day :
              <span style={{ color: "#B12704" }}>{gdata.price.cost}.00</span>
            </p>
            <p>
              You save :
              <span style={{ color: "#B12704" }}>
              
                ₹{gdata.price.mrp - gdata.price.cost}({gdata.price.discount})
              </span>
            </p>

            <div className="discount_box">
              <h5>
                Discount :
                <span style={{ color: "#111" }}>{gdata.discount}</span>
              </h5>
              <h4>
                FREE Delivery :
                <span style={{ color: "#111", fontWeight: "600" }}>
                  Oct 8 - 21
                </span>
                Details
              </h4>
              <p style={{ color: "#111" }}>
                Fastest delivery:
                <span style={{ color: "#111", fontWeight: "600" }}>
           
                  Tomorrow 11AM
                </span>
              </p>
            </div>
            <p className="description">
              About the Iteam :
              <span
                style={{
                  color: "#565959",
                  fontSize: "14px",
                  fontWeight: "500",
                  letterSpacing: "0.4px",
                }}
              >
                {gdata.description}
              </span>
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Cart;
