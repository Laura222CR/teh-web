import React, {useState} from "react";
import PersonLayout from "./PersonLayout";
import "./App.css";

const App = () => {
    const [showInfo, setShowInfo] = useState(false);
    const [buttonText, setButtonText] = useState("Afiseaza date");
    const handleButtonClick = () => {
        setShowInfo(!showInfo);
        setButtonText(showInfo ? "Afiseaza date" : "Ascunde date");
    };

    return (
        <div className="container">
            <button className="button" onClick={handleButtonClick}>
                {buttonText}
            </button>
            {showInfo && <div className="spacer" />}
            {showInfo && <PersonLayout />}
        </div>
    );
};

export default App;