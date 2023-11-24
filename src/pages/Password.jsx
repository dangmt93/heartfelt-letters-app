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
                value: "Scorpio Star Sign",
                label: "Scorpio Star Sign",
                icon: "./icons/scorpio.png",
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
    const [selectedData, setSelectedData] = useState(null);     // store selected data object from dataset
    const [name, setName] = useState("");   // store name input
    const [selectedOption, setSelectedOption] = useState("");   // store selected option object from dropdown

    // Handle onChange for inputs
    const handleNameChange = (e) => {
        // Update name state
        const inputName = e.target.value;
        setName(inputName);

        // Check in DATASETS and update dataset state
        const dataset = DATASETS.find(
            (item) => item.inputName === convertVietnameseToEnglish(inputName).toLowerCase()
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

    // TODO: Fix showSubmit to show submit button only when name entered + dropdown is selected
    const showSubmit = () => {
        // return selectedOption === selectedData?.correctOption;
        return name !== "" && selectedOption !== "";
    };

    const onSubmit = (e) => {
        e.preventDefault();
        if(selectedData.correctOption === selectedOption.label) {
            console.log("Correct");
            sessionStorage.setItem('receiver', selectedData.receiver);
            console.log("Receiver = ", sessionStorage.getItem('receiver'));
        } else {
            console.log("Wrong");
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
                        value={name}
                        onChange={handleNameChange}
                    />
                </div>

                <div
                    className="form-control"
                    style={{
                        visibility: DATASETS.some(
                            (item) => item.inputName === convertVietnameseToEnglish(name).toLowerCase()
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
                    />
                </div>
                
                {showSubmit && <button type="submit">I am sure!</button>}
            </form>

            <img
                src="./icons/gift.png"
                style={{ width: "100px" }}
                alt="Gift Icon"
            />
        </div>
    );
};

export default Password;
