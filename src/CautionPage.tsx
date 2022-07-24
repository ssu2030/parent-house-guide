import React from "react";

import './style/CautionPage.css'

import inside from './img/insideString.png';
import outside from './img/outsidestring.png';

const CautionPageComponent: React.FC = () => {
    
    return (
        <div className="CautionOutDivision">
            <div className="StringDivision">
                집에 놀러오게 되실 경우, 몇 가지 유의사항이 있습니다.
                <br/>
                집안에서 지켜주셔야 할것과 밖에서 지켜주셔야 할 부분을 나누었습니다.
                <br/>
            </div>
            <div className="StringDivision">
                <img alt={"inside"} style={{height: "30px"}} src={inside}/>
                <br/>
                    ‣ 현관문 사이의 중문을 꼭 닫고 다녀야 합니다. 
                <br/>
                    ‣ 휴지는 변기에 버리는 것이 아니라, 휴지통에 버려주셔야 합니다.
                <br/>
            </div>
            <div className="StringDivision">
                <img alt={"outside"} style={{width: "30px"}} src={outside}/>
                <br/>
                    ‣ 꽃밭에 꽃을 꺾거나, 밟지 않도록 조심하셔야 합니다. 
                <br/>
                    ‣ 꽃밭이나 외부에 쓰레기를 버리시면 안됩니다. 
                <br/>
                    ‣ 밤에 외출시엔 라이트를 켜 뱀이 있는지 없는지 확인해야 합니다.
                <br/>
                    ‣ 돌담을 차거나 무너뜨리는 행위를 하시면 안됩니다.
                <br/>
            </div>
            
        </div>
        );

}

export default CautionPageComponent;



