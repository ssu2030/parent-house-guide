import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation} from "swiper";

import './style/HomePage.css'



const HomePageComponent: React.FC = () => {
    
    SwiperCore.use([Navigation]);
    
    
    return (
    <div >
        <Swiper className="Swiper">
            <SwiperSlide>1</SwiperSlide>
            <SwiperSlide>2</SwiperSlide>
            <SwiperSlide>3</SwiperSlide>
        </Swiper>
    </div>)
    ;

}

export default HomePageComponent;