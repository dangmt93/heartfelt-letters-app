import ChestOpening from "../components/ChestOpening";
import BackgroundFloating from "../components/BackgroundFloating";

const Test = () => {
    return (
        <>
            <BackgroundFloating />
            <div
                style={{
                    color: "red",
                    zIndex: 9999,
                    width: "100px",
                    height: "100px",
                    border: "1px solid black",
                }}
            >
                TESTfefefe
            </div>
        </>
    );
};

export default Test;
