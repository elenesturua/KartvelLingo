import {useState} from "react";
import LettersIntro from "./LettersIntro";
import Vowels from "./vowels/Vowels.tsx";
import VowelQuiz from "./vowels/VowelQuiz.tsx";

function LettersIntroFlow() {
    const[step, setStep] = useState<"intro" | "vowels" | "quiz" | "done">("intro");
    const goToVowels = () => setStep("vowels");
    const goToQuiz = () => setStep("quiz");
    const goToDone = () => setStep("done");

    if (step === "intro")
        return <LettersIntro onExit={goToDone} onFinish={goToVowels}/>;
        if (step === "vowels")
            return <Vowels onExit={goToDone} onFinish={goToQuiz}/>;

        if (step === "quiz")
            return <VowelQuiz onExit={goToDone} onFinish={goToDone}/>;


    return <p style={{ textAlign: "center", marginTop: "2rem" }}>You're all set! Go to the <a href="/letters">Alphabet</a>.</p>;
}

export default LettersIntroFlow;