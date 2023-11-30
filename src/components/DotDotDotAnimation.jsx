import { useState, useEffect } from "react";
import "../css/DotDotDotAnimation.css";

const DotDotDotAnimation = () => {
    const [animationState, setAnimationState] = useState(0);

    useEffect(() => {
        const intervalId = setInterval(() => {
            setAnimationState((prev) => (prev + 1) % 4);
        }, 500); // Adjust the interval based on your animation speed

        return () => clearInterval(intervalId); // Cleanup on component unmount
    }, []);

    return (
        <span className="dot-dot-dot-container">
            <span className={`dot ${animationState === 1 ? "visible" : ""}`} />
            <span className={`dot ${animationState === 2 ? "visible" : ""}`} />
            <span className={`dot ${animationState === 3 ? "visible" : ""}`} />
        </span>
    );
};

export default DotDotDotAnimation;
