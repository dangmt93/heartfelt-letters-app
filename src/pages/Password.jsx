import { useState } from "react";
import CustomSelect from "../components/CustomSelect";
import "../css/password.css";
import convertVietnameseToEnglish from "../utils/convertVietnameseToEnglish";

const DATASETS = [
    {
        inputName: "ngan",
        receiver: "quan",
        answerOptions: [
            {
                value: "4-leaf Clover",
                label: "4-leaf Clover",
                icon: "./icons/4-leaf-clover.png",
            },
            { value: "Deer", label: "Deer", icon: "./icons/deer.png" },
            {
                value: "Pharmacy Symbol",
                label: "Pharmacy Symbol",
                icon: "./icons/pharmacy.png",
            },
            {
                value: "Paint Brush",
                label: "Paint Brush",
                icon: "./icons/paint-brush.png",
            },
        ],
        correctOption: "4-leaf Clover",
    },
    {
        inputName: "quan",
        receiver: "ngan",
        answerOptions: [
            {
                value: "Scorpio Star Sign",
                label: "Scorpio Star Sign",
                icon: "./icons/scorpio.png",
            },
            {
                value: "4-leaf Clover",
                label: "4-leaf Clover",
                icon: "./icons/4-leaf-clover.png",
            },
            {
                value: "Music Note",
                label: "Music Note",
                icon: "./icons/musical-note.png",
            },
            {
                value: "Gaming Controller",
                label: "Gaming Controller",
                icon: "./icons/gaming-controller.png",
            },
        ],
        correctOption: "Scorpio Star Sign",
    },
];

const Password = () => {
    // States
    const [selectedData, setSelectedData] = useState(null); // store selected data object from dataset
    const [name, setName] = useState(""); // store name input
    const [selectedOption, setSelectedOption] = useState(""); // store selected option object from dropdown

    // Styling for dropdown
    const dropdownStyle = {
        labelStyle: {
            // Style for labels in dropdown menu
            fontFamily: "Arial, sans-serif",
        },
        iconStyle: {
            // Style for icons in dropdown menu
        }
    }

    // Handle onChange for inputs
    const handleNameChange = (e) => {
        // Update name state
        const inputName = e.target.value;
        setName(inputName);

        // Check in DATASETS and update dataset state
        const dataset = DATASETS.find(
            (item) =>
                item.inputName ===
                convertVietnameseToEnglish(inputName).toLowerCase()
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
            sessionStorage.setItem("receiver", selectedData.receiver); // Save `receiver` to session storage
            window.location.href = "/letter"; // Direct to `letter` page
        } else {
            alert("Incorrect answer. Please try again.");
        }
    };

    return (
        <div id="main-container">
            <h1>To you...</h1>
            <form onSubmit={onSubmit}>
                <div className="form-control">
                    <h3>
                        What&apos;s your partner&apos;s Vietnamese first name?
                    </h3>
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
                        visibility: DATASETS.some(
                            (item) =>
                                item.inputName ===
                                convertVietnameseToEnglish(name).toLowerCase()
                        )
                            ? "visible"
                            : "hidden",
                    }}
                >
                    <h3>
                        Which of these is engraved on your partner&apos;s ring?
                    </h3>
                    <CustomSelect
                        dataArray={selectedData?.answerOptions}
                        selectedItem={selectedOption}
                        setSelectedItem={setSelectedOption}
                        userLabelStyle={dropdownStyle.labelStyle}
                        userIconStyle={dropdownStyle.iconStyle}
                    />
                </div>

                <button
                    type="submit"
                    style={{ visibility: showSubmit() ? "visible" : "hidden" }}
                >
                    I am sure!
                </button>
            </form>

            <img
                src="./icons/gift.png"
                style={{
                    width: "100px",
                    visibility: showSubmit() ? "visible" : "hidden",
                }}
                alt="Gift Icon"
            />
        </div>
    );
};

export default Password;
