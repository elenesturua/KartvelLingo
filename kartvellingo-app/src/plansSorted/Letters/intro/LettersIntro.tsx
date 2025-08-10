import { useState } from "react";
//import { useNavigate } from "react-router-dom";
import "./LettersIntro.css";

const slides = [
  {
    title: "Welcome to the Georgian Alphabet!",
    content:
      "The Georgian alphabet consists of 33 letters: 5 vowels and 28 consonants.",
  },
  {
    title: "Fun Fact!",
    content:
      "Before you start complaining: There used to be 38 letters in the old Georgian alphabet!",
  },
  {
    title: "Fixed Pronunciation",
    content:
      "In Georgian, letters have a fixed pronunciation. Unlike English, a letter's sound never changes based on the word.",
  },
  {
    title: "Why Vowels First?",
    content:
      "Let's focus on the 5 vowels first, because they are key to clear pronunciation, even if consonants seem tricky at first.",
  },
];

function LettersIntro({
  onExit,
  onFinish,
}: {
  onExit: () => void;
  onFinish: () => void;
}) {
  //const navigate = useNavigate();
  const [currentSlide, setCurrentSlide] = useState(0);

  const nextSlide = () =>
    setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  //const handleStart = () => navigate("/letters/vowels");

  return (
    <div className="letters-intro-page">
      <button className="exit-button" onClick={onExit}>
        Exit
      </button>
      <div className="intro-card">
        <h2>{slides[currentSlide].title}</h2>
        <p>{slides[currentSlide].content}</p>
      </div>
      <div className="intro-controls">
        <button
          onClick={prevSlide}
          disabled={currentSlide === 0}
          className="nav-button"
        >
          ← Back
        </button>
        {currentSlide < slides.length - 1 ? (
          <button onClick={nextSlide} className="nav-button">
            Next →
          </button>
        ) : (
          <button onClick={onFinish} className="start-button">
            Start with Vowels →
          </button>
        )}
      </div>
    </div>
  );
}

export default LettersIntro;
