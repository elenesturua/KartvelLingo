import { Suspense, StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./index.css";
import App from "./App";
import * as React from "react";

const Plans = React.lazy(() => import("./Plans"));
const Letters = React.lazy(() => import("./plansSorted/Letters/Letters"));
const Vowels = React.lazy(() => import("./plansSorted/Letters/intro/vowels/Vowels"));
const LettersIntro = React.lazy(() => import("./plansSorted/Letters/intro/LettersIntro"));
const BasicGrammar = React.lazy(() => import("./plansSorted/BasicGrammar"));
const BasicPhrases = React.lazy(() => import("./plansSorted/BasicPhrases"));
const LanguageFacts = React.lazy(() => import("./plansSorted/LanguageFacts"));
const VowelQuiz = React.lazy(() => import("./plansSorted/Letters/intro/vowels/VowelQuiz"));
const LettersIntroFlow = React.lazy(() => import("./plansSorted/Letters/intro/LettersIntroFlow"));

createRoot(document.getElementById("root")!).render(
    <StrictMode>
      <BrowserRouter>
        <Suspense fallback={<p style={{ padding: "2rem", textAlign: "center" }}>Loading…</p>}>
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
        </Suspense>
      </BrowserRouter>
    </StrictMode>
);
