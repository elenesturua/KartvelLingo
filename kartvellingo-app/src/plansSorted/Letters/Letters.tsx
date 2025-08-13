import { useState, useEffect } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import { letterData, type LetterData } from "./letter-data";
import "./Letters.css";

function Letters() {
  const location = useLocation();
  const navigate = useNavigate();
  const [step, setStep] = useState<"intro" | "vowels" | "quiz" | "full">(
    "intro",
  );
  const [selectedLetter, setSelectedLetter] = useState<LetterData | null>(null);

  useEffect(() => {
    if ((location.state as any)?.jumpToFull) {
      setStep("full");
      return;
    }

    // Default: go to intro
    setStep("intro");
  }, [location.state]);

  if (step !== "full") {
    navigate("/letters/intro-path");
    return null;
  }

  return (
    <div className="letters-page">
      <h2>Georgian Alphabet</h2>
      <p>Click on a letter to learn more about its sound and example use:</p>

      <ul className="letter-list">
        {letterData.map((letter, index) => (
          <li key={index}>
            <button
              className="letter-item"
              onClick={() => setSelectedLetter(letter)}
            >
              {letter.letter} – {letter.latin}
            </button>
          </li>
        ))}
      </ul>

      {selectedLetter && (
        <div className="letter-modal" onClick={() => setSelectedLetter(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-letter">{selectedLetter.letter}</div>
            <div className="modal-latin">{selectedLetter.latin}</div>
            <p>
              <strong>Pronunciation:</strong> {selectedLetter.pronunciation}
            </p>
            <p>
              <strong>Example:</strong> {selectedLetter.example}
            </p>
            <button
              className="close-button"
              onClick={() => setSelectedLetter(null)}
            >
              Close
            </button>
          </div>
        </div>
      )}

      <button className="start-button" onClick={() => navigate("/plans")}>
        ← Back to Plans
      </button>
    </div>
  );
}

export default Letters;
