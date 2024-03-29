import React from 'react'
import Banner from './Banner'
import "./home.css"
import Slide from './Slide'
import { getProducts } from '../../Redux/AppReducer/action'
 import {useDispatch, useSelector} from "react-redux"
import { useEffect } from 'react'

const MainComp = () => {
   const product = useSelector(state=>state.getProducts.products)
   console.log(product)

   const dispatch = useDispatch();

   useEffect(()=>{
     dispatch(getProducts())
   },[])


  return (
    <div className='home_section'>
        <div className="banner_part">
            <Banner/>
           
        </div>
        <div className="slide_part">
          <div className="left_slide">
          <Slide title= "Deal Of The Day" products={product}/>
          </div>
          <div className="right_slide">
            <h4>Festive Launches</h4>
            <img src="https://images-eu.ssl-images-amazon.com/images/G/31/img21/Wireless/Jupiter/Launches/T3/DesktopGateway_CategoryCard2x_758X608_T3._SY608_CB639883570_.jpg" alt="festival_image"  />
            <a href='#'>See More</a>
          </div>
        </div>
        <Slide title= "Today's Deal" products={product}/>
        <div className="center_img">
          <img src="https://m.media-amazon.com/images/G/31/AMS/IN/970X250-_desktop_banner.jpg" alt="" />
        </div>
        <Slide title= "Best Seller" products={product}/>
        <Slide title= "Upto 80% off" products={product}/>
    </div>
  )
}

export default MainComp