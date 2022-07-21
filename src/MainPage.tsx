import React from "react";

import './style/MainPage.css'
import Button from '@material-ui/core/Button';
import HomePageComponent from './HomePage';

const MainPageComponent: React.FC = () => {
    

    return (
    <>
        <div className="Main">
                <div className="ButtonWrapper">
                    <Button id={"homeButton"} variant="contained" className="HomeButton">홈</Button>
                </div>
                <div className="ButtonWrapper">
                    <Button id={"introButton"} variant="contained" className="HomeButton">소개</Button>
                </div>
                <div className="ButtonWrapper">
                    <Button id={"warnButton"} variant="contained" className="HomeButton">주의사항</Button>
                </div>
                <div className="ButtonWrapper">
                    <Button id={"wayButton"} variant="contained" className="HomeButton">오시는 길</Button>
                </div>

        <HomePageComponent />
        </div>
    </>
    )
    ;

}

export default MainPageComponent;