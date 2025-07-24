import { useState } from "react";
import { letterData, type LetterData } from "../letter-data";
import "../Letters.css";

function Vowels() {
    const vowels = letterData.filter((l) => l.letter === "ა" || l.letter === "ე" || l.letter === "ი" || l.letter === "ო" || l.letter === "უ");
    const [selectedLetter, setSelectedLetter] = useState<LetterData | null>(null);
    return (
        <div className="letters-page">
            <h2>Georgian Vowels</h2>
            <p>These are the 5 vowels in the Georgian alphabet. Click on each to see examples and pronunciation.</p>
            <ul className="letter-list">
                {vowels.map((letter, index) => (
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
                        <p><strong>Pronunciation:</strong> {selectedLetter.pronounciation}</p>
                        <p><strong>Example:</strong> {selectedLetter.example}</p>
                        <button className="close-button" onClick={() => setSelectedLetter(null)}>Close</button>
                    </div>
                </div>
            )}

            <div className="start-section">
                <button className="start-button" onClick={() => alert("Quiz coming soon!")}>
                    Start Vowel Quiz
                </button>
            </div>
        </div>
    );
}

export default Vowels;
