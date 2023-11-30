import { useState } from "react";
import CustomSelect from "../components/CustomSelect";
import StartButton from "../components/StartButton";
import DotDotDotAnimation from "../components/DotDotDotAnimation";
import ChestOpening from "../components/ChestOpening";
import BackgroundFloating from "../components/BackgroundFloating";
import CloverIcon from "../assets/icons/dropdown/4-leaf-clover.png";
import DeerIcon from "../assets/icons/dropdown/deer.png";
import GamingControllerIcon from "../assets/icons/dropdown/gaming-controller.png";
import MusicalNoteIcon from "../assets/icons/dropdown/musical-note.png";
import PaintBrushIcon from "../assets/icons/dropdown/paint-brush.png";
import PharmacyIcon from "../assets/icons/dropdown/pharmacy.png";
import ScorpioIcon from "../assets/icons/dropdown/scorpio.png";
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
                icon: CloverIcon,
            },
            { value: "Deer", label: "Deer", icon: DeerIcon },
            {
                value: "Pharmacy Symbol",
                label: "Pharmacy Symbol",
                icon: PharmacyIcon,
            },
            {
                value: "Paint Brush",
                label: "Paint Brush",
                icon: PaintBrushIcon,
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
                icon: ScorpioIcon,
            },
            {
                value: "4-leaf Clover",
                label: "4-leaf Clover",
                icon: CloverIcon,
            },
            {
                value: "Music Note",
                label: "Music Note",
                icon: MusicalNoteIcon,
            },
            {
                value: "Gaming Controller",
                label: "Gaming Controller",
                icon: GamingControllerIcon,
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
            setIsPasswordCorrect(true);
        } else {
            // If incorrect option is selected, direct to "fake" letter for imposters
            sessionStorage.setItem("receiver", "imposter"); // Save `receiver` as "imposter"
            window.location.href = "/letter"; // Direct to `letter` page
        }
    };

    return (
        <>
            <BackgroundFloating />
            {isPasswordCorrect ? (
                // If password is correct, show chest opening
                <ChestOpening toRoute="/letter" />
            ) : (
                // If password is incorrect, show form
                <div id="main-container">
                    <h1 id="title">To you<DotDotDotAnimation /></h1>
                    
                    <form onSubmit={onSubmit}>
                        <div className="form-control">
                            <h3>
                                What&apos;s your partner&apos;s Vietnamese first
                                name?
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
                                        convertVietnameseToEnglish(
                                            name
                                        ).toLowerCase()
                                )
                                    ? "visible"
                                    : "hidden",
                            }}
                        >
                            <h3>
                                Which of these is engraved on your
                                partner&apos;s ring?
                            </h3>
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
