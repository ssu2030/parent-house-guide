import React, { useState } from "react";
import home from './img/home.png';
import description from './img/description.png';
import map from './img/map.png';
import caution from './img/caution.png';
import title from './img/title.png';

import './style/MainPage.css'
import Button from '@material-ui/core/Button';

import HomePageComponent from './HomePage';
import DescriptionPageComponent from "./DescriptionPage";
import MapPageComponent from "./MapPage";
import CautionPageComponent from "./CautionPage";

const MainPageComponent: React.FC = () => {
    
    const [hompageOpen,setHompageOpen] = useState<boolean>(true);
    const [descriptionPageOpen,setDescriptionPageOpen] = useState<boolean>(false);
    const [mapPageOpen,setMapPageOpen] = useState<boolean>(false);
    const [cautionPageOpen,setCautionPageOpen] = useState<boolean>(false);

    return (
    <div id="MainWrapper" className="MainWrapper">
        <div className="Main">
            <div className="Title">
                <img alt={"title"} style={{width: "60%"}} src={title}/>
            </div>
            {hompageOpen && <HomePageComponent/>}
            {descriptionPageOpen && <DescriptionPageComponent/>}
            {mapPageOpen && <MapPageComponent/>}
            {cautionPageOpen && <CautionPageComponent/>}
            <div className="ButtonsWrapper">
                <div className="ButtonWrapper">
                    <Button id={"homeButton"} variant="text" className="HomeButton" onClick={e=>{
                        setHompageOpen(true);
                        setDescriptionPageOpen(false);
                        setMapPageOpen(false);
                        setCautionPageOpen(false);
                    }}>
                        <img alt={"home"} style={{width: "54px", height: "54px"}} src={home}/>
                    </Button>
                </div>
                <div className="ButtonWrapper">
                    <Button id={"introButton"} variant="text" className="HomeButton" onClick={e=>{
                        setHompageOpen(false);
                        setDescriptionPageOpen(true);
                        setMapPageOpen(false);
                        setCautionPageOpen(false);
                    }}>
                        <img alt={"description"} style={{width: "54px", height: "54px"}} src={description}/>
                    </Button>
                </div>
                <div className="ButtonWrapper">
                    <Button id={"warnButton"} variant="text" className="HomeButton" onClick={e=>{
                        setHompageOpen(false);
                        setDescriptionPageOpen(false);
                        setMapPageOpen(false);
                        setCautionPageOpen(true);
                    }}>
                        <img alt={"caution"} style={{height: "54px"}} src={caution}/>
                    </Button>
                </div>
                <div className="ButtonWrapper">
                    <Button id={"wayButton"} variant="text" className="HomeButton" onClick={e=>{
                        setHompageOpen(false);
                        setDescriptionPageOpen(false);
                        setMapPageOpen(true);
                        setCautionPageOpen(false);
                    }}>
                        <img alt={"map"} style={{ height: "54px"}} src={map}/>
                    </Button>
                </div>
            </div>
        </div>
    </div>
    )
    ;

}

export default MainPageComponent;