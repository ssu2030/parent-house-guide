import React from "react";

import './style/MapPage.css'


const MapPageComponent: React.FC = () => {
    
    return (
        <div className="MapOutDivision">
            <iframe title="waytoparenthouse" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d1936.1603478706186!2d127.73923701230032!3d37.542755769476514!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3563115b67104171%3A0xa5cdb2178794fe38!2z6rK96riw64-EIOyWke2Pieq1sCDssq3smrTrqbQg7Jqp65GQ66asIDEy!5e0!3m2!1sko!2skr!4v1658475515404!5m2!1sko!2skr" 
                width="420px" height="420px" 
                style={{border: "0px"}} 
                loading="lazy" 
            ></iframe>
        </div>
        );

}

export default MapPageComponent;



