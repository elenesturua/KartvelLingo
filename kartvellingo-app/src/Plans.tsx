import { useNavigate } from "react-router-dom";
import "./Plans.css";

function Plans() {
  const navigate = useNavigate();
  const handleStartLetters = () => {
    navigate("/letters");
  };
  const handleIntroLetters = ()=>{
      navigate("/letters/intro-path");
  };
  const handleStartGrammar = () => {
    navigate("/basic-grammar");
  };
  const handleStartPhrases = () => {
    navigate("/basic-phrases");
  };
  const handleStartFacts = () => {
    navigate("/language-facts");
  };
  return (
    <div className={"plans-container"}>
      <h2>Your Journey Begins Here!! </h2>
      <p>Select a category to start learning:</p>

      <div className={"plan-card"} onClick={handleStartLetters}>
        <h3> the Georgian Alphabet </h3>
          <p>Explore the 33 unique letters of the Georgian script.</p>
          <div style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}>
              <button className="start-button" onClick={handleIntroLetters}>
                  Start Guided Intro
              </button>
              <button className="start-button outline" onClick={handleStartLetters}>
                  Jump to Alphabet
              </button>
          </div>
      </div>
      <div className={"plan-card"} onClick={handleStartGrammar}>
        <h3> Basic Grammar </h3>
        <p>
          {" "}
          Understand simple sentence structure and grammar (It's hard but I'll
          do my best)
        </p>
        <button className={"start-button"}>Start Now</button>
      </div>
      <div className={"plan-card"} onClick={handleStartPhrases}>
        <h3> Basic Phrases and Words </h3>
        <p>
          {" "}
          The most important phrases you need to know to get by in Georgia, like
          Gagimarjos and Supra!{" "}
        </p>
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
