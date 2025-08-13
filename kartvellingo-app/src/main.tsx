import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App.tsx";
import Plans from "./Plans.tsx";
import Letters from "./plansSorted/Letters/Letters.tsx";
import Vowels from "./plansSorted/Letters/intro/vowels/Vowels.tsx";
import LettersIntro from "./plansSorted/Letters/intro/LettersIntro.tsx";
import BasicGrammar from "./plansSorted/BasicGrammar.tsx";
import BasicPhrases from "./plansSorted/BasicPhrases.tsx";
import LanguageFacts from "./plansSorted/LanguageFacts.tsx";
import VowelQuiz from "./plansSorted/Letters/intro/vowels/VowelQuiz.tsx";
import LettersIntroFlow from "./plansSorted/Letters/intro/LettersIntroFlow.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/letters/intro-path" element={<LettersIntroFlow />} />
        <Route path="/" element={<App />} />
        <Route path="/plans" element={<Plans />} />
        <Route path="/letters" element={<Letters />} />
        <Route path="/letters/vowels" element={<Vowels />} />
        <Route path="/letters/vowels/vowel-quiz" element={<VowelQuiz />} />
        <Route path="/letters/intro" element={<LettersIntro />} />
        <Route path="/basic-grammar" element={<BasicGrammar />} />
        <Route path="/basic-phrases" element={<BasicPhrases />} />
        <Route path="/language-facts" element={<LanguageFacts />} />
      </Routes>
    </BrowserRouter>
  </StrictMode>,
);
