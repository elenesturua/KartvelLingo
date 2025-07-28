import { useState } from "react";
import "./VowelQuiz.css";
import { useNavigate } from "react-router-dom";

interface QuizQuestion {
  letter: string;
  question: string;
  options: string[];
  answer: string;
}

const equivalenceQuiz: QuizQuestion[] = [
  {
    letter: "ა",
    question: "What is the Latin (English) equivalent of letter 'ა'?",
    options: ["a", "e", "i", "o"],
    answer: "a",
  },
  {
    letter: "ე",
    question: "What is the Latin (English) equivalent of letter 'ე'?",
    options: ["u", "e", "i", "o"],
    answer: "e",
  },
  {
    letter: "ი",
    question: "What is the Latin (English) equivalent of letter 'ი'?",
    options: ["a", "e", "i", "o"],
    answer: "i",
  },
  {
    letter: "ო",
    question: "What is the Latin (English) equivalent of letter 'ო'?",
    options: ["u", "e", "i", "o"],
    answer: "o",
  },
  {
    letter: "უ",
    question: "What is the Latin (English) equivalent of letter 'უ'?",
    options: ["a", "u", "i", "o"],
    answer: "u",
  },
];

const pronunciationQuiz: QuizQuestion[] = [
  {
    letter: "ა",
    question: "What is the pronunciation of letter 'ა'?",
    options: ["a in name", "a in salt", "a in scar", "a in main"],
    answer: "a in scar",
  },
  {
    letter: "ე",
    question: "What is the pronunciation of letter 'ე'?",
    options: ["e in name", "e in street", "e in end", "e in shield"],
    answer: "e in end",
  },
  {
    letter: "ი",
    question: "What is the pronunciation of letter 'ი'?",
    options: ["i in miss", "i in blind", "i in triangle", "i in mile"],
    answer: "i in miss",
  },
  {
    letter: "ო",
    question: "What is the pronunciation of letter 'ო'?",
    options: ["o in boat", "o in cool", "o in brother", "o in shoe"],
    answer: "o in boat",
  },
  {
    letter: "უ",
    question: "What is the pronunciation of letter 'უ'?",
    options: ["u in under", "u in trust", "u in mule", "oo in spoon"],
    answer: "oo in spoon",
  },
];

function VowelQuiz({
  onExit,
  onFinish,
}: {
  onExit: () => void;
  onFinish: () => void;
}) {
  const [phase, setPhase] = useState<"equivalence" | "pronunciation" | "done">(
    "equivalence",
  );
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);
  const [selectedOption, setSelectedOption] = useState<string | null>(null);
  const [score, setScore] = useState(0);
  const [showAnswer, setShowAnswer] = useState(false);

  const questions =
    phase === "equivalence" ? equivalenceQuiz : pronunciationQuiz;
  const question = questions[current];

  const handleOptionClick = (option: string) => {
    if (selectedOption) return; // prevent double selection
    setSelectedOption(option);
    setShowAnswer(true);
    if (option === question.answer) {
      setScore((prev) => prev + 1);
    }
  };

  const nextQuestion = () => {
    if (current + 1 < questions.length) {
      setCurrent(current + 1);
      setSelectedOption(null);
      setShowAnswer(false);
    } else {
      if (phase === "equivalence") {
        setPhase("pronunciation");
        setCurrent(0);
        setSelectedOption(null);
        setShowAnswer(false);
      } else {
        setPhase("done");
      }
    }
  };

  const restartQuiz = () => {
    setPhase("equivalence");
    setScore(0);
    setCurrent(0);
    setSelectedOption(null);
    setShowAnswer(false);
  };

  return (
    <div className="vowel-quiz-page">
      <button className="exit-button" onClick={onExit}>
        ✕
      </button>
      <h2>Vowel Quiz</h2>
      <p>Test your knowledge of the Georgian vowels!</p>

      {phase !== "done" ? (
        <div className="quiz-card">
          <h3>{question.letter}</h3>
          <p>{question.question}</p>
          {question.options.map((opt, idx) => {
            let className = "quiz-option";
            if (selectedOption) {
              if (opt === question.answer) className += " correct";
              else if (opt === selectedOption) className += " incorrect";
            }

            return (
              <button
                key={idx}
                className={className}
                onClick={() => handleOptionClick(opt)}
              >
                {opt}
              </button>
            );
          })}
          {showAnswer && (
            <div>
              {selectedOption !== question.answer && (
                <p className="correct-answer">
                  Correct Answer: {question.answer}
                </p>
              )}
              <button className="next-button" onClick={nextQuestion}>
                Next
              </button>
            </div>
          )}
        </div>
      ) : (
        <div className="quiz-result">
          <h3>You have completed the Quiz!</h3>
          <p>
            Your score is: {score} out of{" "}
            {equivalenceQuiz.length + pronunciationQuiz.length}
          </p>
          <button className="restart-button" onClick={restartQuiz}>
            Restart Quiz
          </button>
        </div>
      )}
    </div>
  );
}

export default VowelQuiz;
