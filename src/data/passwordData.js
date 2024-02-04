import CloverIcon from "../assets/icons/dropdown/4-leaf-clover.png";
import DeerIcon from "../assets/icons/dropdown/deer.png";
import GamingControllerIcon from "../assets/icons/dropdown/gaming-controller.png";
import MusicalNoteIcon from "../assets/icons/dropdown/musical-note.png";
import PaintBrushIcon from "../assets/icons/dropdown/paint-brush.png";
import PharmacyIcon from "../assets/icons/dropdown/pharmacy.png";
import ScorpioIcon from "../assets/icons/dropdown/scorpio.png";

/**
 * @desc Array of questions for password
 */
export const QUESTIONS = [
    "What's your partner's first name?",
    "Which of these is engraved on your partner's ring?",
];

/**
 * @desc Array of datasets for password
 */
export const ANSWER_DATASETS = [
    {
        inputName: "emily",
        receiver: "john",
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
        inputName: "john",
        receiver: "emily",
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
