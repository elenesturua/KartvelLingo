import './BasicGrammar.css';

function BasicGrammar() {
    return (
        <div className="letters-page">
            <h2>Georgian Alphabet</h2>
            <p>Here are all 33 Georgian letters from the Georgian alphabet and their closest Latin equivalents:</p>

            <ul className="letter-list">

                <li>ა – A</li>
                <li>ბ – B</li>
                <li>გ – G</li>
                <li>დ – D</li>
                <li>ე – E</li>
                <li>ვ – V</li>
                <li>ზ – Z</li>
                <li>თ – Tʼ</li>
                <li>ი – I</li>
                <li>კ – Kʼ</li>
                <li>ლ – L</li>
                <li>მ – M</li>
                <li>ნ – N</li>
                <li>ო – O</li>
                <li>პ – Pʼ</li>
                <li>ჟ – Zh</li>
                <li>რ – R</li>
                <li>ს – S</li>
                <li>ტ – T'</li>
                <li>უ – U</li>
                <li>ფ – F</li>
                <li>ქ – Kh</li>
                <li>ღ – Gh</li>
                <li>ყ – Qʼ</li>
                <li>შ – Sh</li>
                <li>ჩ – Ch</li>
                <li>ც – Ts</li>
                <li>ძ – Dz</li>
                <li>წ – Tsʼ</li>
                <li>ჭ – Chʼ</li>
                <li>ხ – Kh</li>
                <li>ჯ – J</li>
                <li>ჰ – H</li>
            </ul>
            <button className="start-button" onClick={() => window.history.back()}>
                ← Back to Plans
            </button>

        </div>
    );
}

export default BasicGrammar;
