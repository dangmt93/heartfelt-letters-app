import PropTypes from "prop-types";
import "../css/startButton.css";

const StartButton = ({ text, isVisible }) => {
    return (
        <button id="startBtn" style={{ visibility: isVisible ? 'visible' : 'hidden' }}>
            <span>{text}</span>
        </button>
    );
};

StartButton.propTypes = {
    text: PropTypes.string,
	isVisible: PropTypes.bool,
};

export default StartButton;
