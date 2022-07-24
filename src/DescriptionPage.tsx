import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import "swiper/components/pagination/pagination.min.css";
import SwiperCore, { Navigation, Pagination} from "swiper";

import './style/DescriptionPage.css'

import BF1 from './photo/BeforeBuilted1.jpeg';
import BF2 from './photo/beforeBuilted2.jpeg';
import BF3 from './photo/beforeBuilted3.jpeg';
import BF4 from './photo/beforeBuilted4.jpeg';

import flower1 from './photo/flower.jpeg';
import flower2 from './photo/flowerwithbees.jpeg';
import sky1 from './photo/skyWithTrees.jpeg';
import sky2 from './photo/beasky.jpeg';

import farm1 from './photo/fogGrass.jpeg';
import farm2 from './photo/farming.jpeg';


import water1 from './photo/water.jpeg';
import water2 from './photo/water2.jpeg';



const DescriptionPageComponent: React.FC = () => {
    
    SwiperCore.use([Navigation]);
    
    return (
    <div className="DescriptionOutDivision">
        <Swiper className="Swiper" >
            <SwiperSlide>
                <img alt={"img"} style={{width:"380px", height:"380px"}} src={BF1}/>
            </SwiperSlide>
            <SwiperSlide>
                <img alt={"img"} style={{width:"380px", height:"380px"}} src={BF2}/>
            </SwiperSlide>
            <SwiperSlide>
                <img alt={"img"} style={{width:"380px", height:"380px"}} src={BF3}/>
            </SwiperSlide>
            <SwiperSlide>
                <img alt={"img"} style={{width:"380px", height:"380px"}} src={BF4}/>
            </SwiperSlide>
        </Swiper>
        <div className="StringDivision">
            maison de essense
        </div>
        <div className="StringDivision">
            부모님이 퇴직 후 안락한 노후 생활을 보내기 위해 지어진 집입니다.
            <br/>
            2020년 부터, 짓기 시작한 집은 약 1년에 걸쳐 완공되었습니다. 
            <br/>
            꽃을 좋아하는 어머니와, 주변의 자연을 좋아하는 아버지에게 어울리는 느낌으로 지은 집입니다.
            <br/>
        </div>
        <Swiper className="Swiper" >
            <SwiperSlide>
                <img alt={"img"} style={{width:"380px", height:"380px"}} src={flower1}/>
            </SwiperSlide>
            <SwiperSlide>
                <img alt={"img"} style={{width:"380px", height:"380px"}} src={flower2}/>
            </SwiperSlide>
            <SwiperSlide>
                <img alt={"img"} style={{width:"380px", height:"380px"}} src={sky1}/>
            </SwiperSlide>
            <SwiperSlide>
                <img alt={"img"} style={{width:"380px", height:"380px"}} src={sky2}/>
            </SwiperSlide>
        </Swiper>
        <div className="StringDivision">
            봄, 여름, 가을, 겨울 부모님께서 가꾼 꽃들을 계절별로 구경할 수 있습니다. 뿐만아니라 집 뒤편 하우스에선 부모님께서 좋아하는 과일들을 심어 가꾸고 계십니다.
            <br/>
            어머니께서 특히 좋아하시는 화단은 부모님께서 함께 관리하십니다. 뿐만아니라 집주변 작은 돌담들은 아버지와 어머니께서 직접 쌓으셨습니다.
        </div>
        <Swiper className="Swiper" >
            <SwiperSlide>
                <img alt={"img"} style={{width:"380px", height:"380px"}} src={farm1}/>
            </SwiperSlide>
            <SwiperSlide>
                <img alt={"img"} style={{width:"380px", height:"380px"}} src={farm2}/>
            </SwiperSlide>
        </Swiper>
        <div className="StringDivision">
            하우스의 여러 채소와 밭에 호박, 깨 등의 작물등을 키우며 관리하고 있습니다.
            <br/>
        </div>
        <Swiper className="Swiper" >
            <SwiperSlide>
                <img alt={"img"} style={{width:"380px", height:"380px"}} src={water1}/>
            </SwiperSlide>
            <SwiperSlide>
                <img alt={"img"} style={{width:"380px", height:"380px"}} src={water2}/>
            </SwiperSlide>
        </Swiper>
        <div className="StringDivision">
            집 앞으로 조금 내려가면 작은 계곡이 있습니다. 
            <br/>
            물놀이를 즐길 수 있고 낚시를 즐길 수 있습니다. 송사리등 민물고기등을 잡을 수 있습니다.
        </div>
    </div>)
    ;

}

export default DescriptionPageComponent;