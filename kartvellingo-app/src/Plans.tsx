import {useNavigate} from "react-router-dom";


function Plans() {
    const navigate = useNavigate();
    const handleStartLetters = () => {navigate('/letters');};
    return (
        <div className={"plans-container"}>
            <h2>Your Journey Begins Here!! </h2>
            <p>Select a category to start learning:</p>
            <div className={"plan-card"} onClick={handleStartLetters}>
                <h3> Let's learn the Georgian Alphabet </h3>
                <p>Here are the Georgian Letters in their script and their closest variants in Latin script</p>
                <button className={"start-button"}>Start Now </button>
        </div>
            </div>
    );
}

export default Plans;
