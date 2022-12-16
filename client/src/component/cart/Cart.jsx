import React from 'react'
import "./cart.css"
import { Divider } from '@mui/material';
import {useParams} from "react-router-dom"
import { useEffect } from 'react';
import { useState } from 'react';

const Cart = () => {
  
    const {id} = useParams()
    // console.log(id)
    const [gdata,setGData] = useState([])
    console.log(gdata)

    const getSpecData= async()=>{
     const res = await fetch(`http://localhost:8000/products/${id}`,{
        method:"GET",
        headers:{
            "Content-Type":"application/json"
        }
     })
     const data = await res.json();
      console.log(data)

     if(res.status!==201){
        console.log("No Data Found")
     }
     else{
        // console.log("data")
         setGData(data)
     }
    }

    useEffect(()=>{
        getSpecData()
    },[id])

  return (
    <div className='cart_section'>
        <div className="cart_container">
            <div className="left_cart">
                <img src={gdata.url} alt="item_image" />
                <div className="cart_btn">
                    <button className='cart_btn1'>Add To Cart</button>
                    <button className='cart_btn2'>Buy Now</button>
                </div>
            </div>
            <div className="right_cart">
            <h3>Fitness Gear</h3>
                        <h4>Kettly</h4>
                        <Divider />
                        <p className="mrp">{gdata.mrp}</p>
                        <p>Deal of the Day : <span style={{ color: "#B12704" }}>₹455.00</span></p>
                        <p>You save : <span style={{ color: "#B12704" }}> ₹567(45%) </span></p>

                        <div className="discount_box">
                            <h5 >Discount : <span style={{ color: "#111" }}>Extra 10% OFF</span> </h5>
                            <h4>FREE Delivery : <span style={{ color: "#111", fontWeight: "600" }}>Oct 8 - 21</span> Details</h4>
                            <p style={{ color: "#111" }}>Fastest delivery: <span style={{ color: "#111", fontWeight: "600" }}> Tomorrow 11AM</span></p>
                        </div>
                        <p className="description">About the Iteam : <span style={{ color: "#565959", fontSize: "14px", fontWeight: "500", letterSpacing: "0.4px" }}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Vero facere deleniti voluptas dolor eius nisi.</span></p>
                    </div>
            </div>
        </div>
  )
}

export default Cart

