import { useState, useEffect } from "react";
import "../css/background.css";
import BookStackSVG from "../assets/background/floatingItems/books-stack.svg";
import CameraDroneSVG from "../assets/background/floatingItems/camera-drone.svg";
import CameraSVG from "../assets/background/floatingItems/camera.svg";
import CloverSVG from "../assets/background/floatingItems/clover.svg";
import CookingSVG from "../assets/background/floatingItems/cooking.svg";
import Deer1SVG from "../assets/background/floatingItems/deer1.svg";
import Deer2SVG from "../assets/background/floatingItems/deer2.svg";
import DumbbellSVG from "../assets/background/floatingItems/dumbbell.svg";
import FurbishingSVG from "../assets/background/floatingItems/furbishing.svg";
import GamepadSVG from "../assets/background/floatingItems/gamepad.svg";
import GamingConsoleSVG from "../assets/background/floatingItems/gaming-console.svg";
import GamingPCSVG from "../assets/background/floatingItems/gaming-pc.svg";
import GardeningSVG from "../assets/background/floatingItems/gardening.svg";
import GoProSVG from "../assets/background/floatingItems/gopro.svg";
import GrandPiano from "../assets/background/floatingItems/grand-piano.svg";
import HouseKeySVG from "../assets/background/floatingItems/house-key.svg";
import HouseSearchSVG from "../assets/background/floatingItems/house-search.svg";
import KangarooSVG from "../assets/background/floatingItems/kangaroo.svg";
import MedicineSVG from "../assets/background/floatingItems/medicine.svg";
import MicSVG from "../assets/background/floatingItems/mic.svg";
import MochiSVG from "../assets/background/floatingItems/mochi.svg";
import MovieSVG from "../assets/background/floatingItems/movie.svg";
import MusicalNoteSVG from "../assets/background/floatingItems/musical-note.svg";
import PaintBucketSVG from "../assets/background/floatingItems/paint-bucket.svg";
import PaintRollerSVG from "../assets/background/floatingItems/paint-roller.svg";
import PaintingSVG from "../assets/background/floatingItems/painting.svg";
import PianoSVG from "../assets/background/floatingItems/piano.svg";
import PlantSVG from "../assets/background/floatingItems/plant.svg";
import PrescriptionSVG from "../assets/background/floatingItems/prescription.svg";
import ScorpioConstellation from "../assets/background/floatingItems/scorpio-constellation.svg";
import ScorpioSymbolSVG from "../assets/background/floatingItems/scorpio-symbol.svg";
import TradingSVG from "../assets/background/floatingItems/trading.svg";
import VideoPlayerSVG from "../assets/background/floatingItems/video-player.svg";

// Array of SVG items
const svgItems = [
    BookStackSVG,
    CameraDroneSVG,
    CameraSVG,
    CloverSVG,
    CookingSVG,
    Deer1SVG,
    Deer2SVG,
    DumbbellSVG,
    FurbishingSVG,
    GamepadSVG,
    GamingConsoleSVG,
    GamingPCSVG,
    GardeningSVG,
    GoProSVG,
    GrandPiano,
    HouseKeySVG,
    HouseSearchSVG,
    KangarooSVG,
    MedicineSVG,
    MicSVG,
    MochiSVG,
    MovieSVG,
    MusicalNoteSVG,
    PaintBucketSVG,
    PaintRollerSVG,
    PaintingSVG,
    PianoSVG,
    PlantSVG,
    PrescriptionSVG,
    ScorpioConstellation,
    ScorpioSymbolSVG,
    TradingSVG,
    VideoPlayerSVG,
];

// Animation constraints
const positionAnimationConstraints = {
    top: { min: 0.5, max: 82 },
    left: { min: 4.5, max: 91 },
    animationDelay: { min: -0.5, max: -5 },
};

const generateRandomImages = (svgItems, constraints) => {
    const randomImages = svgItems.map((svg, index) => {
        const randomTop =
            Math.random() * (constraints.top.max - constraints.top.min) +
            constraints.top.min;
        const randomLeft =
            Math.random() * (constraints.left.max - constraints.left.min) +
            constraints.left.min;
        const randomAnimationDelay =
            Math.random() *
                (constraints.animationDelay.max -
                    constraints.animationDelay.min) +
            constraints.animationDelay.min;

        return (
            <img
                key={index}
                src={svg}
                className="floating element"
                style={{
                    top: `${randomTop}%`,
                    left: `${randomLeft}%`,
                    animationDelay: `${randomAnimationDelay}s`,
                }}
            />
        );
    });

    return randomImages;
};

const BackgroundFloating = () => {
    const [randomImages, setRandomImages] = useState([]);

    // Only generate random images in the background when the component mounts
    useEffect(() => {
        // Run the generator function once at the start
        const images = generateRandomImages(
            svgItems,
            positionAnimationConstraints
        );
        setRandomImages(images);
    }, []); // Empty dependency array means run once on mount

    return (
        <div className="backwrap gradient">
            <div className="back-shapes">
                {randomImages}
                {/* <img
                    src={CloverSVG}
                    className="floating element"
                    style={{
                        top: "66.59856996935649%",
                        left: "13.020833333333334%",
                        animationDelay: "-0.9s",
                    }}
                />
                <img
                    src={ScorpioConstellation}
                    className="floating element"
                    style={{
                        top: "31.46067415730337%",
                        left: "33.59375%",
                        animationDelay: "-4.8s",
                    }}
                />
                <img
                    src={BookStackSVG}
                    className="floating element"
                    style={{
                        top: "76.50663942798774%",
                        left: "38.020833333333336%",
                        animationDelay: "-4s",
                    }}
                />
                <img
                    src={CameraDroneSVG}
                    className="floating element"
                    style={{
                        top: "21.450459652706844%",
                        left: "14.0625%",
                        animationDelay: "-2.8s",
                    }}
                />
                <img
                    src={CameraSVG}
                    className="floating element"
                    style={{
                        top: "58.12053115423902%",
                        left: "56.770833333333336%",
                        animationDelay: "-2.15s",
                    }}
                />
                <img
                    src={CookingSVG}
                    className="floating element"
                    style={{
                        top: "8.682328907048008%",
                        left: "72.70833333333333%",
                        animationDelay: "-1.9s",
                    }}
                />
                <img
                    src={Deer1SVG}
                    className="floating element"
                    style={{
                        top: "31.3585291113381%",
                        left: "58.541666666666664%",
                        animationDelay: "-0.65s",
                    }}
                />
                <img
                    src={Deer2SVG}
                    className="floating element"
                    style={{
                        top: "69.96935648621042%",
                        left: "81.45833333333333%",
                        animationDelay: "-0.4s",
                    }}
                />
                <img
                    src={DumbbellSVG}
                    className="floating element"
                    style={{
                        top: "15.117466802860061%",
                        left: "32.34375%",
                        animationDelay: "-4.1s",
                    }}
                />
                <img
                    src={FurbishingSVG}
                    className="floating element"
                    style={{
                        top: "13.074565883554648%",
                        left: "45.989583333333336%",
                        animationDelay: "-3.65s",
                    }}
                />
                <img
                    src={GamepadSVG}
                    className="floating element"
                    style={{
                        top: "55.87334014300306%",
                        left: "27.135416666666668%",
                        animationDelay: "-2.25s",
                    }}
                />
                <img
                    src={GamingConsoleSVG}
                    className="floating element"
                    style={{
                        top: "34.62717058222676%",
                        left: "67.1875%",
                        animationDelay: "-1.5s",
                    }}
                />
                <img
                    src={GamingPCSVG}
                    className="floating element"
                    style={{
                        top: "31.46067415730337%",
                        left: "46.875%",
                        animationDelay: "-0.25s",
                    }}
                />
                <img
                    src={GardeningSVG}
                    className="floating element"
                    style={{
                        top: "49.54034729315628%",
                        left: "53.75%",
                        animationDelay: "-2s",
                    }}
                />
                <img
                    src={GoProSVG}
                    className="floating element"
                    style={{
                        top: "34.62717058222676%",
                        left: "49.635416666666664%",
                        animationDelay: "-1.55s",
                    }}
                />
                <img
                    src={GrandPiano}
                    className="floating element"
                    style={{
                        top: "33.19713993871297%",
                        left: "86.14583333333333%",
                        animationDelay: "-0.95s",
                    }}
                />
                <img
                    src={HouseKeySVG}
                    className="floating element"
                    style={{
                        top: "28.19203268641471%",
                        left: "25.208333333333332%",
                        animationDelay: "-4.45s",
                    }}
                />
                <img
                    src={KangarooSVG}
                    className="floating element"
                    style={{
                        top: "39.7344228804903%",
                        left: "10.833333333333334%",
                        animationDelay: "-3.35s",
                    }}
                />
                <img
                    src={MedicineSVG}
                    className="floating element"
                    style={{
                        top: "77.83452502553627%",
                        left: "24.427083333333332%",
                        animationDelay: "-2.3s",
                    }}
                />
                <img
                    src={HouseSearchSVG}
                    className="floating element"
                    style={{
                        top: "71.3993871297242%",
                        left: "66.45833333333333%",
                        animationDelay: "-1.25s",
                    }}
                />
                <img
                    src={MicSVG}
                    className="floating element"
                    style={{
                        top: "2.860061287027579%",
                        left: "47.864583333333336%",
                        animationDelay: "-1.75s",
                    }}
                />
                <img
                    src={MochiSVG}
                    className="floating element"
                    style={{
                        top: "31.256384065372828%",
                        left: "76.92708333333333%",
                        animationDelay: "-0.65s",
                    }}
                />
                <img
                    src={MovieSVG}
                    className="floating element"
                    style={{
                        top: "46.47599591419816%",
                        left: "38.90625%",
                        animationDelay: "-0.35s",
                    }}
                />
                <img
                    src={MusicalNoteSVG}
                    className="floating element"
                    style={{
                        top: "3.575076608784474%",
                        left: "6.25%",
                        animationDelay: "-4.05s",
                    }}
                />
                <img
                    src={PaintBucketSVG}
                    className="floating element"
                    style={{
                        top: "3.4729315628192032%",
                        left: "19.635416666666668%",
                        animationDelay: "-4.3s",
                    }}
                />
                <img
                    src={PaintRollerSVG}
                    className="floating element"
                    style={{
                        top: "0.9193054136874361%",
                        left: "91.14583333333333%",
                        animationDelay: "-3.3s",
                    }}
                />
                <img
                    src={PaintingSVG}
                    className="floating element"
                    style={{
                        top: "77.3237997957099%",
                        left: "4.583333333333333%",
                        animationDelay: "-3.75s",
                    }}
                />
                <img
                    src={PianoSVG}
                    className="floating element"
                    style={{
                        top: "81.30745658835546%",
                        left: "45.15625%",
                        animationDelay: "-1.75s",
                    }}
                />
                <img
                    src={PlantSVG}
                    className="floating element"
                    style={{
                        top: "23.6976506639428%",
                        left: "63.28125%",
                        animationDelay: "-2.1s",
                    }}
                />
                <img
                    src={PrescriptionSVG}
                    className="floating element"
                    style={{
                        top: "59.009193054136876%",
                        left: "83.90625%",
                        animationDelay: "-1.05s",
                    }}
                />
                <img
                    src={ScorpioSymbolSVG}
                    className="floating element"
                    style={{
                        top: "60.9805924412666%",
                        left: "42.239583333333336%",
                        animationDelay: "-1.45s",
                    }}
                />
                <img
                    src={TradingSVG}
                    className="floating element"
                    style={{
                        top: "81.51174668028601%",
                        left: "83.59375%",
                        animationDelay: "-0.35s",
                    }}
                />
                <img
                    src={VideoPlayerSVG}
                    className="floating element"
                    style={{
                        top: "52.093973442288046%",
                        left: "68.90625%",
                        animationDelay: "-0.7s",
                    }}
                /> */}
            </div>
        </div>
    );
};

export default BackgroundFloating;
