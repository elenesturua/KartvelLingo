import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import LettersIntro from "./LettersIntro";
import Vowels from "./vowels/Vowels";
import VowelQuiz from "./vowels/VowelQuiz";

function LettersIntroFlow() {
  const [step, setStep] = useState<"intro" | "vowels" | "quiz" | "done">(
    "intro",
  );
  const navigate = useNavigate();

  const goToVowels = () => setStep("vowels");
  const goToQuiz = () => setStep("quiz");
  const goToDone = () => setStep("done");

  useEffect(() => {
    if (step === "done") {
      // mark intro as completed if you still want this saved
      localStorage.setItem("lettersIntroCompleted", "true");
      navigate("/letters", { state: { jumpToFull: true } });
    }
  }, [step, navigate]);

  if (step === "intro")
    return <LettersIntro onExit={goToDone} onFinish={goToVowels} />;
  if (step === "vowels")
    return <Vowels onExit={goToDone} onFinish={goToQuiz} />;
  if (step === "quiz")
    return <VowelQuiz onExit={goToDone} onFinish={goToDone} />;

  return null;
}

export default LettersIntroFlow;
