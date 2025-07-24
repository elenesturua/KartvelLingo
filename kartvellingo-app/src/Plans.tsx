import {useNavigate} from "react-router-dom";
import "./Plans.css"

function Plans() {
    const navigate = useNavigate();
    const handleStartLetters = () => {navigate('/Letters');};
    const handleStartGrammar = () => {navigate('/basicGrammar');};
    const handleStartPhrases = () => {navigate('/basicPhrases');};
    const handleStartFacts = () => {navigate('/LanguageFacts');};
    return (
        <div className={"plans-container"}>
            <h2>Your Journey Begins Here!! </h2>
            <p>Select a category to start learning:</p>

            <div className={"plan-card"} onClick={handleStartLetters}>
                <h3> the Georgian Alphabet </h3>
                <button className={"start-button"}>Start Now</button>
        </div>
            <div className={"plan-card"} onClick={handleStartGrammar}>
                <h3> Basic Grammar </h3>
                <p> Understand simple sentence structure and grammar (It's hard but I'll do my best)</p>
                <button className={"start-button"}>Start Now</button>
            </div>
            <div className={"plan-card"} onClick={handleStartPhrases}>
                <h3> Basic Phrases and Words </h3>
                <p> The most important phrases you need to know to get by in Georgia, like Gagimarjos and Supra! </p>
                <button className={"start-button"}>Start Now</button>
            </div>
            <div className={"plan-card"} onClick={handleStartFacts}>
                <h3> Fun Facts </h3>
                <p> Learn about the Georgian culture, history and quirks. </p>
                <button className={"start-button"}>Start Now</button>
            </div>
            </div>
    );
}

export default Plans;
