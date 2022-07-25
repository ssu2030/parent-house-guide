import React from "react";

import './style/CautionPage.css'

import inside from './img/insideString.png';
import outside from './img/outsidestring.png';

const CautionPageComponent: React.FC = () => {
    
    return (
        <div className="CautionOutDivision">
            <div className="container">	
                <div className="bird-container bird-container--one">
                    <div className="bird bird--one"></div>
                </div>
                <div className="bird-container bird-container--two">
                    <div className="bird bird--two"></div>
                </div>
                <div className="bird-container bird-container--three">
                    <div className="bird bird--three"></div>
                </div>
                <div className="bird-container bird-container--four">
                    <div className="bird bird--four"></div>
                </div>
            </div>
                <div className="StringDivision">
                    부모님 집에 방문하시는 경우, 몇 가지 유의사항이 있습니다.<br/>
                </div>
                <div className="StringDivision">
                    <img alt={"inside"} style={{height: "30px"}} src={inside}/><br/>
                    &nbsp;&nbsp;‣ 현관문 사이의 <strong>중문</strong>을 꼭 닫고 다녀야 합니다.<br/>
                    &nbsp;&nbsp;‣ 휴지는 변기에 버리는 것이 아니라, <strong>휴지통</strong>에 버려주셔야 합니다.<br/>
                    <br/>
                </div>
                <div className="StringDivision">
                    <img alt={"outside"} style={{height: "30px"}} src={outside}/><br/>
                    &nbsp;&nbsp;‣ 가급적 외부에서 돌아다닐 경우엔 <strong>벌레</strong>를 피하기 위해, <strong>긴바지</strong>를 입도록 합니다. <br/>
                    &nbsp;&nbsp;‣ 밤에 외출시엔 <strong>라이트를 켜 뱀이 있는지 없는지 확인</strong>해야 합니다.<br/>
                </div>
        </div>
        );
}

export default CautionPageComponent;



