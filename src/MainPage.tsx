import React from "react";
import home from './img/home.png';
import description from './img/description.png';
import map from './img/map.png';
import caution from './img/caution.png';
import title from './img/title.png';

import './style/MainPage.css'
import Button from '@material-ui/core/Button';

import HomePageComponent from './HomePage';

const MainPageComponent: React.FC = () => {
    

    return (
    <>
        <div className="Main">
            <div className="Title">
                <img alt={"title"} style={{width: "60%"}} src={title}/>
            </div>
            <HomePageComponent/>
            <div className="ButtonsWrapper">
                <div className="ButtonWrapper">
                    <Button id={"homeButton"} variant="text" className="HomeButton">
                        <img alt={"home"} style={{width: "54px", height: "54px"}} src={home}/>
                    </Button>
                </div>
                <div className="ButtonWrapper">
                    <Button id={"introButton"} variant="text" className="HomeButton">
                        <img alt={"description"} style={{width: "54px", height: "54px"}} src={description}/>
                    </Button>
                </div>
                <div className="ButtonWrapper">
                    <Button id={"warnButton"} variant="text" className="HomeButton">
                        <img alt={"caution"} style={{height: "54px"}} src={caution}/>
                    </Button>
                </div>
                <div className="ButtonWrapper">
                    <Button id={"wayButton"} variant="text" className="HomeButton">
                        <img alt={"map"} style={{ height: "54px"}} src={map}/>
                    </Button>
                </div>
            </div>
            
        </div>
    </>
    )
    ;

}

export default MainPageComponent;