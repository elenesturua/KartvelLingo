import "./Letters.css";
import { useState, useEffect } from "react";
import { letterData, type LetterData } from "./letter-data";
import LettersIntro from "./intro/LettersIntro.tsx";
import Vowels from "./intro/vowels/Vowels.tsx";
import VowelQuiz from "./intro/vowels/VowelQuiz.tsx";

function Letters() {
  const [step, setStep] = useState<"intro" | "vowels" | "quiz" | "full">(
    "intro",
  );
  const [selectedLetter, setSelectedLetter] = useState<LetterData | null>(null);

  useEffect(() => {
    const completed = localStorage.getItem("lettersIntroCompleted");
    if (completed === "true") {
      setStep("full");
    }
  }, []);
  const handleIntroComplete = () => setStep("vowels");
  const handleVowelsComplete = () => setStep("quiz");
  const handleQuizComplete = () => {
    localStorage.setItem("lettersIntroCompleted", "true");
    setStep("full");
  };

  if (step === "intro")
    return (
      <LettersIntro
        onExit={() => setStep("full")}
        onFinish={handleIntroComplete}
      />
    );
  if (step === "vowels")
    return (
      <Vowels onExit={() => setStep("full")} onFinish={handleVowelsComplete} />
    );
  if (step === "quiz")
    return (
      <VowelQuiz onExit={() => setStep("full")} onFinish={handleQuizComplete} />
    );

  return (
    <div className="letters-page">
      <h2>Georgian Alphabet</h2>
      <p>Click on a letter to learn more about its sound and example use:</p>

      <ul className="letter-list">
        {letterData.map((letter, index) => (
          <li key={index} onClick={() => setSelectedLetter(letter)}>
            {letter.letter} – {letter.latin}
          </li>
        ))}
      </ul>

      {selectedLetter && (
        <div className="letter-modal" onClick={() => setSelectedLetter(null)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <div className="modal-letter">{selectedLetter.letter}</div>
            <div className="modal-latin">{selectedLetter.latin}</div>
            <p>
              <strong>Pronunciation:</strong> {selectedLetter.pronounciation}
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

      <button className="start-button" onClick={() => window.history.back()}>
        ← Back to Plans
      </button>
    </div>
  );
}

export default Letters;
