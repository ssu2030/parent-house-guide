import React from "react";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/swiper.min.css";
import "swiper/components/navigation/navigation.min.css";
import SwiperCore, { Navigation} from "swiper";

import './style/DescriptionPage.css'

import BF1 from './photo/BeforeBuilted1.jpeg';
import BF2 from './photo/BeforeBuilted2.jpeg';
import BF3 from './photo/BeforeBuilted3.jpeg';
import BF4 from './photo/BeforeBuilted4.jpeg';

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
    <div className="OutDivision">
        <div>
            짓는 과정
        </div>
        <Swiper className="Swiper">
            <SwiperSlide>
                <img alt={"img"} style={{width:"400px", height:"400px"}} src={BF1}/>
            </SwiperSlide>
            <SwiperSlide>
                <img alt={"img"} style={{width:"400px", height:"400px"}} src={BF2}/>
            </SwiperSlide>
            <SwiperSlide>
                <img alt={"img"} style={{width:"400px", height:"400px"}} src={BF3}/>
            </SwiperSlide>
            <SwiperSlide>
                <img alt={"img"} style={{width:"400px", height:"400px"}} src={BF4}/>
            </SwiperSlide>
        </Swiper>
        <div>
            이 집의 경우, 엄마 아빠의 노후를 위한 집입니다. 퇴직 후 안락한 농촌 life를 즐기기 위한 집이죠.
            <br></br>
            엄마 아빠의 피땀 눈물이 들어갔습니다. 
        </div>
        <Swiper className="Swiper">
            <SwiperSlide>
                <img alt={"img"} style={{width:"400px", height:"400px"}} src={flower1}/>
            </SwiperSlide>
            <SwiperSlide>
                <img alt={"img"} style={{width:"400px", height:"400px"}} src={flower2}/>
            </SwiperSlide>
            <SwiperSlide>
                <img alt={"img"} style={{width:"400px", height:"400px"}} src={sky1}/>
            </SwiperSlide>
            <SwiperSlide>
                <img alt={"img"} style={{width:"400px", height:"400px"}} src={sky2}/>
            </SwiperSlide>
        </Swiper>
        <div>
            봄, 여름, 가을, 겨울 엄마 아빠가 가꾼 꽃들을 계절별로 구경할 수 있습니다. 엄마 아빠는 화단을 항상 관리하기 때문에, 풀을 뽑기도하고 제초작업과 가끔 제초제를 주기도 합니다.
            <br></br>
            따라서, 화단을 망치게 되는 경우 그에 적합한 보상금을 내셔야 합니다.
        </div>
        <Swiper className="Swiper">
            <SwiperSlide>
                <img alt={"img"} style={{width:"400px", height:"400px"}} src={farm1}/>
            </SwiperSlide>
            <SwiperSlide>
                <img alt={"img"} style={{width:"400px", height:"400px"}} src={farm2}/>
            </SwiperSlide>
        </Swiper>
        <div>
            집 앞에 있는 깨 농사를 하는 곳입니다. 안개가 예쁘게 꼈고 현재 무럭무럭 잘 자라고 있는 것을 볼 수 있습니다.
            <br></br>
            따라서, 밭을 망치게 되는 경우 그에 적합한 보상금을 내셔야 합니다.
            <br></br>
            예쁜 논 풍경입니다. 우리 집 논은 아니지만 예뻐서 사진에 담았습니다.
        </div>
        <Swiper className="Swiper">
            <SwiperSlide>
                <img alt={"img"} style={{width:"400px", height:"400px"}} src={water1}/>
            </SwiperSlide>
            <SwiperSlide>
                <img alt={"img"} style={{width:"400px", height:"400px"}} src={water2}/>
            </SwiperSlide>
        </Swiper>
        <div>
            집 근처 작은 계곡이 있습니다. 물놀이를 즐길 수 있고 낚시를 즐길 수 있습니다. 송사리등 민물고기등을 잡을 수 있습니다.
            <br></br>
            계곡에서 놀고 난 후 발생한 쓰레기들은 모두 수거해 가셔야 합니다.
        </div>
    </div>)
    ;

}

export default DescriptionPageComponent;