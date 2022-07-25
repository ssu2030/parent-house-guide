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
            <div className="StringDivision">
                집에 놀러오게 되실 경우, 몇 가지 유의사항이 있습니다.
                <br/>
            </div>
            <div className="StringDivision">
                <img alt={"inside"} style={{height: "30px"}} src={inside}/>
                <br/>
                &nbsp;&nbsp;‣ 현관문 사이의 <strong>중문</strong>을 꼭 닫고 다녀야 합니다. 
                <br/>
                &nbsp;&nbsp;‣ 휴지는 변기에 버리는 것이 아니라, <strong>휴지통</strong>에 버려주셔야 합니다.
                <br/>
            </div>
            <div className="StringDivision">
                <img alt={"outside"} style={{height: "30px"}} src={outside}/>
                <br/>
                &nbsp;&nbsp;‣ 꽃밭에 꽃을 <strong>꺾거</strong>나, <strong>밟지 않도록</strong> 조심하셔야 합니다. 
                <br/>
                &nbsp;&nbsp;‣ 꽃밭이나 외부에 <strong>쓰레기</strong>를 버리시면 안됩니다. 
                <br/>
                &nbsp;&nbsp;‣ 밤에 외출시엔 <strong>라이트를 켜 뱀이 있는지 없는지 확인</strong>해야 합니다.
                <br/>
                &nbsp;&nbsp;‣ 돌담을 차거나 무너뜨리는 행위를 하시면 안됩니다.
                <br/>
            </div>
        </div>
        </div>
        );

}

export default CautionPageComponent;



