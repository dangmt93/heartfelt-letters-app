import { useState } from "react";
import { useNavigate } from "react-router-dom";
import CustomSelect from "../components/CustomSelect";
import StartButton from "../components/StartButton";
import DotDotDotAnimation from "../components/DotDotDotAnimation";
import ShiningScroll from "../components/ShiningScroll";
import BackgroundFloating from "../components/BackgroundFloating";
import { QUESTIONS, ANSWER_DATASETS } from "../data/passwordData";
import "../css/password.css";

const Password = () => {
    // Hooks
    const navigate = useNavigate();

    // States
    const [selectedData, setSelectedData] = useState(null); // store selected data object from dataset
    const [name, setName] = useState(""); // store name input
    const [selectedOption, setSelectedOption] = useState(""); // store selected option object from dropdown
    const [isPasswordCorrect, setIsPasswordCorrect] = useState(false); // store status if password is correct

    // Styling for dropdown
    const dropdownStyle = {
        labelStyle: {
            // Style for labels in dropdown menu
            fontFamily: "Arial, sans-serif",
        },
        iconStyle: {
            // Style for icons in dropdown menu
        },
    };

    // Handle onChange for inputs
    const handleNameChange = (e) => {
        // Update name state
        const inputName = e.target.value;
        setName(inputName);

        // Check in DATASETS and update dataset state
        const dataset = ANSWER_DATASETS.find(
            (item) => item.inputName === inputName.toLowerCase()
        );
        if (dataset) {
            setSelectedData(dataset);
            // Randomise the answer options
            const randomisedOptions = [...dataset.answerOptions].sort(
                () => Math.random() - 0.5
            );
            setSelectedData({
                ...dataset,
                answerOptions: randomisedOptions,
            });
        } else {
            // Reset selectedData and selectedOption states
            setSelectedData(null);
            setSelectedOption("");
        }
    };

    //  Determine if submit button should be shown
    const showSubmit = () => {
        return name !== "" && selectedOption !== "";
    };

    // Handle form onSubmit
    const onSubmit = (e) => {
        e.preventDefault();
        // If correct option is selected
        if (selectedData?.correctOption === selectedOption?.label) {
            sessionStorage.setItem("recipient", selectedData.recipient); // Save `recipient` to session storage
            setIsPasswordCorrect(true);
        } else {
            // If incorrect option is selected, direct to "fake" letter for imposters
            sessionStorage.setItem("recipient", "imposter"); // Save `recipient` as "imposter"
            navigate("/letter"); // Direct to `letter` page
        }
    };

    return (
        <>
            <BackgroundFloating />
            {isPasswordCorrect ? (
                // If password is correct, show chest opening
                <ShiningScroll toRoute="/letter" />
            ) : (
                // If password is incorrect, show form
                <div id="main-container">
                    <h1 id="title">
                        To you
                        <DotDotDotAnimation />
                    </h1>

                    <form onSubmit={onSubmit}>
                        <div className="form-control">
                            <h3>{QUESTIONS[0]}</h3>
                            <input
                                type="text"
                                className="name-input"
                                value={name}
                                onChange={handleNameChange}
                            />
                        </div>

                        <div
                            className="form-control"
                            style={{
                                visibility: ANSWER_DATASETS.some(
                                    (item) =>
                                        item.inputName === name.toLowerCase()
                                )
                                    ? "visible"
                                    : "hidden",
                            }}
                        >
                            <h3>{QUESTIONS[1]}</h3>- correct answer ={" "}
                            {selectedData?.correctOption} (removed when
                            deployed)
                            <CustomSelect
                                dataArray={selectedData?.answerOptions}
                                selectedItem={selectedOption}
                                setSelectedItem={setSelectedOption}
                                userLabelStyle={dropdownStyle.labelStyle}
                                userIconStyle={dropdownStyle.iconStyle}
                            />
                        </div>
                        <br />
                        <StartButton text="▶▶" isVisible={showSubmit()} />
                    </form>
                </div>
            )}
        </>
    );
};

export default Password;
