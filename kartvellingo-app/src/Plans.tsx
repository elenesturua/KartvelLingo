import {useNavigate} from "react-router-dom";
import "./Plans.css"

function Plans() {
    const navigate = useNavigate();
    const handleStartLetters = () => {navigate('/Letters');};
    return (
        <div className={"plans-container"}>
            <h2>Your Journey Begins Here!! </h2>
            <p>Select a category to start learning:</p>
            <div className={"plan-card"} onClick={handleStartLetters}>
                <h3> the Georgian Alphabet </h3>
                <button className={"start-button"}>Start Now</button>
        </div>
            <div className={"plan-card"} onClick={handleStartLetters}>
                <h3> Fun Facts </h3>
                <button className={"start-button"}>Start Now</button>
            </div>
            <div className={"plan-card"} onClick={handleStartLetters}>
                <h3> Basic Phrases </h3>
                <button className={"start-button"}>Start Now</button>
            </div>
            </div>
    );
}

export default Plans;
