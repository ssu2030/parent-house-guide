import React from "react";

import './style/MainPage.css'
import Button from '@material-ui/core/Button';

const MainPageComponent: React.FC = () => {

    return (
    <div
        className="Main"
    >
       <Button id={"homeButton"} variant="outlined" className="HomeButton">
            {"홈"}
        </Button>
        <Button id={"introButton"} variant="outlined" className="HomeButton">
            소개
        </Button>
        <Button id={"warnButton"} variant="outlined" className="HomeButton">
            주의사항
        </Button>
        <Button id={"wayButton"}  variant="outlined" className="HomeButton">
            오시는 길
        </Button>
    </div>)
    ;

}

export default MainPageComponent;