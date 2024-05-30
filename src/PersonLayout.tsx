import React from "react";
import { observer } from "mobx-react";
import data from "./PersonData";
import "./PersonLayout.css";


const PersonLayout: React.FC = observer(() => {
    return (
        <div className="person-layout-container" >
            <div className="person-info">
                <h2> Informatie personala</h2>
                <p>Nume : {data.name}</p>
                <p>Varsta : {data.age}</p>
                <p>Grupa : {data.group}</p>
            </div>
        </div>
    );
});

export default PersonLayout;