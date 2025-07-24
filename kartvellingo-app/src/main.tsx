import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import Plans from './Plans.tsx';
import Letters from './plansSorted/Letters.tsx';
import BasicGrammar from './plansSorted/BasicGrammar.tsx';
import BasicPhrases from './plansSorted/BasicPhrases.tsx';
import LanguageFacts from './plansSorted/LanguageFacts.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/plans" element={<Plans />} />
                <Route path="/Letters" element={<Letters />} />
                <Route path="/BasicGrammar" element={<BasicGrammar />} />
                <Route path="/BasicPhrases" element={<BasicPhrases />} />
                <Route path="/LanguageFacts" element={<LanguageFacts />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
