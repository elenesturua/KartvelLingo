import {useNavigate} from "react-router-dom";
import "./LettersIntro.css";

function LettersIntro() {
    const navigate = useNavigate();

    const handleStart = () => {navigate('/Letters/vowels');};
    return (
        <div className={"letters-intro-page"}>
            <h2>Welcome to the Georgian Alphabet!</h2>
            <p>
                The Georgian alphabet consists of 33 letters: 5 vowels and 28 consonants
            </p>
            <p>
                Fun fact before you start complaining: There used to be 38 letters in the old Georgian alphabet!
            </p>
            <p>
                In Georgian, letters have a fixed pronounciation.
                Unlike english, where a letter's sound changes based on the word, Georgian letters always sound the same.
            </p>
            <p>
                Before we dive into all 33 letters, let's focus on the 5 vowels.
                These vowels are the key to getting pronounciation right and will help you communicate clearly, even if consonants seem tricky at firast.
            </p>
            <p>
                Some Georgian consonants are unique to the language and may feel unfamiliar.
                Don't worry if you mispronounce them initially. With the correct vowel sounds, you'll still be understood!
            </p>

            <div className="start-section">
                <button className="start-button" onClick={handleStart}>Start with Vowels </button>
            </div>
        </div>
    )
}
export default LettersIntro;