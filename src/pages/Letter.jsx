import { useState } from "react";
import "../css/letter.css";
import { REAL_LETTERS, FAKE_LETTER } from "../data/letters";

const Letter = () => {
    const [image, setImage] = useState("");
    const [showImage, setShowImage] = useState(false);

    const handleTextTriggerOnClick = (imageLink) => {
        setImage(imageLink);
        setShowImage(true);
    };

    const handleCloseClick = () => {
        setShowImage(false);
    };

    // If sessionStorage is not set, redirect to main page
    if (sessionStorage.getItem("receiver") === null) {
        window.location.href = "/";
    }

    const renderLetterContent = () => {
        const receiver = sessionStorage.getItem("receiver");
        const letterContent = REAL_LETTERS[receiver];
        if (letterContent) {
            return letterContent(handleTextTriggerOnClick);
        }
        return FAKE_LETTER(handleTextTriggerOnClick);
    };

    return (
        <>
            {showImage && (
                <div id="image-container">
                    <span className="closeButton" onClick={handleCloseClick}>
                        &#10006;
                    </span>
                    <img id="image" src={image} alt="Popup Image" />
                </div>
            )}

            <div id="letter">
                <div id="letter-body">{renderLetterContent()}</div>
            </div>
        </>
    );
};

export default Letter;
