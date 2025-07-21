import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';
import App from './App.tsx';
import Plans from './Plans.tsx';
import Letters from './letters.tsx';

createRoot(document.getElementById('root')!).render(
    <StrictMode>
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<App />} />
                <Route path="/plans" element={<Plans />} />
                <Route path="/letters" element={<Letters />} />
            </Routes>
        </BrowserRouter>
    </StrictMode>
);
