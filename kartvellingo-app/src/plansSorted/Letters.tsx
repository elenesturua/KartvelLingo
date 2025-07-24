import './Letters.css';
import {useState} from "react";
import {letterData, type LetterData} from "./letter-data";

function Letters() {
    const[selectedLetter, setSelectedLetter] = useState<LetterData | null>(null);
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
                {/*<li>ა – A</li>*/}
                {/*<li>ბ – B</li>*/}
                {/*<li>გ – G</li>*/}
                {/*<li>დ – D</li>*/}
                {/*<li>ე – E</li>*/}
                {/*<li>ვ – V</li>*/}
                {/*<li>ზ – Z</li>*/}
                {/*<li>თ – Tʼ</li>*/}
                {/*<li>ი – I</li>*/}
                {/*<li>კ – Kʼ</li>*/}
                {/*<li>ლ – L</li>*/}
                {/*<li>მ – M</li>*/}
                {/*<li>ნ – N</li>*/}
                {/*<li>ო – O</li>*/}
                {/*<li>პ – Pʼ</li>*/}
                {/*<li>ჟ – Zh</li>*/}
                {/*<li>რ – R</li>*/}
                {/*<li>ს – S</li>*/}
                {/*<li>ტ – T'</li>*/}
                {/*<li>უ – U</li>*/}
                {/*<li>ფ – F</li>*/}
                {/*<li>ქ – Kh</li>*/}
                {/*<li>ღ – Gh</li>*/}
                {/*<li>ყ – Qʼ</li>*/}
                {/*<li>შ – Sh</li>*/}
                {/*<li>ჩ – Ch</li>*/}
                {/*<li>ც – Ts</li>*/}
                {/*<li>ძ – Dz</li>*/}
                {/*<li>წ – Tsʼ</li>*/}
                {/*<li>ჭ – Chʼ</li>*/}
                {/*<li>ხ – Kh</li>*/}
                {/*<li>ჯ – J</li>*/}
                {/*<li>ჰ – H</li>*/}

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








            <button className="start-button" onClick={() => window.history.back()}>
                ← Back to Plans
            </button>

        </div>
    );
}

export default Letters;
