import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation} from "swiper";

import './style/HomePage.css'

import summerHouse from './photo/summerhouse.jpeg';
import houseWithWall from './photo/housewithwall.jpeg';
import houseback from './photo/beahouse.jpeg';
import window from './photo/windowsecondfloor.jpeg';

const HomePageComponent: React.FC = () => {
    
    SwiperCore.use([Navigation]);
    
    return (
    <div className="HomeOutDivision">
        <Swiper className="Swiper">
            <SwiperSlide>
                <img alt={"img"} style={{width:"380px", height:"380px"}} src={summerHouse}/>
            </SwiperSlide>
            <SwiperSlide>
                <img alt={"img"} style={{width:"380px", height:"380px"}} src={houseWithWall}/>
            </SwiperSlide>
            <SwiperSlide>
                <img alt={"img"} style={{width:"380px", height:"380px"}} src={houseback}/>
            </SwiperSlide>
            <SwiperSlide>
                <img alt={"img"} style={{width:"380px", height:"380px"}} src={window}/>
            </SwiperSlide>
        </Swiper>
    </div>)
    ;

}

export default HomePageComponent;