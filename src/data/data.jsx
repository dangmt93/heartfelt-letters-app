import { Link } from "react-router-dom";
import CloverIcon from "../assets/icons/dropdown/4-leaf-clover.png";
import DeerIcon from "../assets/icons/dropdown/deer.png";
import GamingControllerIcon from "../assets/icons/dropdown/gaming-controller.png";
import MusicalNoteIcon from "../assets/icons/dropdown/musical-note.png";
import PaintBrushIcon from "../assets/icons/dropdown/paint-brush.png";
import PharmacyIcon from "../assets/icons/dropdown/pharmacy.png";
import ScorpioIcon from "../assets/icons/dropdown/scorpio.png";
import BugsBunnyNoImage from "../assets/images/memes/bugs-bunny-no.png";
import DrinkingInYour30sImage from "../assets/images/memes/drinking-in-your-30s.jpg";
import PermissionToPlayImage from "../assets/images/memes/permission-to-play.jpg";
import WrongChoiceImage from "../assets/images/memes/wrong-choice.png";
import YouShallNotPassGIF from "../assets/images/memes/you-shall-not-pass.gif";
import ItsAboutTimeGIF from "../assets/images/memes/its-about-time.gif";

const QUESTIONS = [
    "What's your partner's first name?",
    "Which of these is engraved on your partner's ring?",
];

const DATASETS = [
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
        letterContent: (handleTextTriggerOnClick) => (
            <>
                Dear John,
                <br />
                <br />
                This is the <strong>template letter to John</strong>. In this
                letter, we can have all sorts of HTML elements or React
                components. For example, to go into a new line, we can use a
                line break &lt;br /&gt; like this.
                <br />
                Or use 2 line breaks &lt;br /&gt; &lt;br /&gt; for clear
                separation between paragraphs like so.
                <br />
                <br />
                Additionally, I have created predefined class names:
                <br />
                <li>
                    <strong>text-image-trigger</strong>: to open an image or a
                    GIF within the letter. For example, &quot;this is a{" "}
                    <a
                        className="text-image-trigger"
                        onClick={() =>
                            handleTextTriggerOnClick(PermissionToPlayImage)
                        }
                    >
                        meme image
                    </a>
                    {""} in the middle a sentence&quot;, or a{" "}
                    <a
                        className="text-image-trigger"
                        onClick={() =>
                            handleTextTriggerOnClick(ItsAboutTimeGIF)
                        }
                    >
                        meme GIF
                    </a>
                    {""} like so. Oh, and don&apos;t forget to import your
                    images before you use them.
                </li>
                <li>
                    <strong>important-note</strong>: to add a curly arrow
                    pointing to the emphasied text, like{" "}
                    <span className="important-note">this important text</span>.
                    We can also use it with <strong>text-image-trigger</strong>{" "}
                    like{" "}
                    <a
                        className="text-image-trigger important-note"
                        onClick={() =>
                            handleTextTriggerOnClick(DrinkingInYour30sImage)
                        }
                    >
                        this one
                    </a>
                    . Please note that the curly arrow can be overlapped with
                    the text on the next line, so use it sparingly.
                </li>
                <li>
                    <strong>vietnamese-text</strong>: to type Vietnamese words,
                    for example, &quot;
                    <span className="vietnamese-text">Đây là Tiếng Việt</span>
                    &quot;.
                </li>
                <li>
                    <strong>song-link</strong>: to add a link to a song.
                    Here&apos;s my {"  "}
                    <a
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="song-link"
                    >
                        favourite song
                    </a>
                    .
                </li>
                <li>
                    <strong>signature</strong>: to add your signature, for
                    example, <span className="signature">T.D.</span>
                </li>
                <br />
                <br />
                Feel free to customise the letter to suit your needs. And
                don&apos;t forget to give me proper credit when you use this
                project. Thanks!
            </>
        ),
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
        letterContent: (handleTextTriggerOnClick) => (
            <>
                Dear Emily,
                <br />
                <br />
                This is the <strong>template letter to Emily</strong>. In this
                letter, we can have all sorts of HTML elements or React
                components. For example, to go into a new line, we can use a
                line break &lt;br /&gt; like this.
                <br />
                Or use 2 line breaks &lt;br /&gt; &lt;br /&gt; for clear
                separation between paragraphs like so.
                <br />
                <br />
                Additionally, I have created predefined class names:
                <br />
                <li>
                    <strong>text-image-trigger</strong>: to open an image or a
                    GIF within the letter. For example, &quot;this is a{" "}
                    <a
                        className="text-image-trigger"
                        onClick={() =>
                            handleTextTriggerOnClick(PermissionToPlayImage)
                        }
                    >
                        meme image
                    </a>
                    {""} in the middle a sentence&quot;, or a{" "}
                    <a
                        className="text-image-trigger"
                        onClick={() =>
                            handleTextTriggerOnClick(ItsAboutTimeGIF)
                        }
                    >
                        meme GIF
                    </a>
                    {""} like so. Oh, and don&apos;t forget to import your
                    images before you use them.
                </li>
                <li>
                    <strong>important-note</strong>: to add a curly arrow
                    pointing to the emphasied text, like{" "}
                    <span className="important-note">this important text</span>.
                    We can also use it with <strong>text-image-trigger</strong>{" "}
                    like{" "}
                    <a
                        className="text-image-trigger important-note"
                        onClick={() =>
                            handleTextTriggerOnClick(DrinkingInYour30sImage)
                        }
                    >
                        this one
                    </a>
                    . Please note that the curly arrow can be overlapped with
                    the text on the next line, so use it sparingly.
                </li>
                <li>
                    <strong>vietnamese-text</strong>: to type Vietnamese words,
                    for example, &quot;
                    <span className="vietnamese-text">Đây là Tiếng Việt</span>
                    &quot;.
                </li>
                <li>
                    <strong>song-link</strong>: to add a link to a song.
                    Here&apos;s my {"  "}
                    <a
                        href="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="song-link"
                    >
                        favourite song
                    </a>
                    .
                </li>
                <li>
                    <strong>signature</strong>: to add your signature, for
                    example, <span className="signature">T.D.</span>
                </li>
                <br />
                <br />
                Feel free to customise the letter to suit your needs. And
                don&apos;t forget to give me proper credit when you use this
                project. Thanks!
            </>
        ),
    },
];

const FAKE_LETTER = (handleTextTriggerOnClick) => (
    <>
        <strong>This is a fake letter template.</strong>
        <br />
        Dear my friend,
        <br />
        <br />
        Welcome to Operation Chuckleception, where reality blends with hilarity!
        You may be scratching your head, wondering why you received this
        mysterious message. Well, brace yourself, because you&apos;ve been
        unknowingly recruited into the whimsical world of the Secret Society of
        Silly Surprises. Yes, you{" "}
        <a
            className="text-image-trigger"
            onClick={() => handleTextTriggerOnClick(BugsBunnyNoImage)}
        >
            definitely
        </a>{" "}
        read that right - or maybe not, depending on your sense of humor.
        <br />
        <br />
        Your undercover moniker is &quot;Captain Gigglesnort&quot; (quite the
        giveaway, isn&apos;t it?). Your task, should you decide to play along
        (and you have no real choice), is to add a touch of absurdity to the
        special day. On the wedding day, don a silly hat, dance crazily at 06:05
        PM, and 20:10 PM (nothing particularly special about those times
        *wink*), and bring the beach vibes to life by crafting intricate
        sandcastles during those &quot;significant&quot; moments. Be cautious;
        there&apos;s something magical about those sandy masterpieces that tends
        to provoke unexplained joy.
        <br />
        <br />
        As a token of our appreciation, anticipate an invisible cake delivery.
        Just close your eyes, visualize the yummiest watermelon cake, and voila!
        You&apos;re in for a non-existent treat.
        <br />
        <br />
        Now, here&apos;s the kicker - this entire letter is the {"  "}
        <a
            className="text-image-trigger"
            onClick={() => handleTextTriggerOnClick(WrongChoiceImage)}
        >
            real
        </a>{" "}
        joke. Yes, Captain Gigglesnort, you&apos;ve just received the fake
        letter. Confused? That&apos;s the point! If you&apos;re scratching your
        head, wondering, &quot;
        {""}
        <a
            className="text-image-trigger"
            onClick={() => handleTextTriggerOnClick(YouShallNotPassGIF)}
        >
            No!
        </a>{" "}
        What just happened?&quot; - congratulations, Captain Gigglesnort,
        you&apos;re in on the joke. If confusion ensues, mission accomplished!
        <br />
        <br />
        Wishing you chuckles and confounded expressions,
        <br />
        The Chief Chuckle Connoisseur (or not)
        <br />
        <br />
        P.S. Here&apos;s the quick{" "}
        <span className="back-button">
            <Link to="/" style={{ textDecoration: "none" }}>
                back
            </Link>
        </span>{" "}
        button for making an alternative selection.
    </>
);

export { QUESTIONS, DATASETS, FAKE_LETTER };
