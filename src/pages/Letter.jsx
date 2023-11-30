import { useState } from "react";
import "../css/letter.css";
import BugsBunnyNoImage from "../assets/images/memes/bugs-bunny-no.png";
import DrinkingInYour30sImage from "../assets/images/memes/drinking-in-your-30s.jpg";
import PermissionToPlayImage from "../assets/images/memes/permission-to-play.jpg";
import ThisIsFineImage from "../assets/images/memes/this-is-fine.jpg";
import WrongChoiceImage from "../assets/images/memes/wrong-choice.png";
import YouShallNotPassImage from "../assets/images/memes/you-shall-not-pass.png";

const Letter = () => {
    const [image, setImage] = useState("");
    const [showImage, setShowImage] = useState(false);

    const handleTextTriggerOnClick = (imageLink) => {
        setImage(imageLink);
        setShowImage(true);
    };

    const handleCloseClick = () => {
        setShowImage(false);
    };

    // If sessionStorage is not set, redirect to main page
    if (sessionStorage.getItem("receiver") === null) {
        window.location.href = "/";
    }

    return (
        <>
            {showImage && (
                <div id="image-container">
                    <span className="closeButton" onClick={handleCloseClick}>
                        &#10006;
                    </span>
                    <img id="image" src={image} alt="Popup Image" />
                </div>
            )}

            <div id="letter">
                <div id="letter-body">
                    {/* --------------------- Letter for Kain -------------------------------- */}
                    {sessionStorage.getItem("receiver") === "quan" && (
                        <>
                            Dear my bro,
                            <br />
                            <br />
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Consequatur ratione maiores nihil aspernatur
                            delectus ipsum aperiam quae dolor reiciendis dolorum
                            sit, debitis quam totam deserunt perspiciatis,
                            temporibus ea dolorem. Veritatis, officiis?
                            Repudiandae eum obcaecati fuga qui nisi quod
                            possimus, debitis alias. Culpa nesciunt distinctio
                            optio reprehenderit rem blanditiis aperiam animi,
                            suscipit aliquid deserunt. Earum voluptatum quia,
                            porro veritatis unde autem quibusdam, natus ipsum
                            iste excepturi minima tempore temporibus molestias
                            sunt sapiente commodi perspiciatis, exercitationem
                            asperiores. Fugit quam optio quia amet excepturi
                            mollitia explicabo eum minus nulla nihil ullam
                            atque, dignissimos illo. Reiciendis est sit
                            inventore! Repellat, et quibusdam? Assumenda
                            doloribus enim distinctio consequatur pariatur
                            facilis ducimus labore voluptates laborum nihil hic
                            cupiditate quis, reiciendis est perspiciatis? et
                            illum, officia inventore veniam explicabo{" "}
                            <a
                                className="text-image-trigger important-note"
                                onClick={() =>
                                    handleTextTriggerOnClick(
                                        "/images/drinking-in-your-30s.jpg"
                                    )
                                }
                            >
                                &quot;okay&quot;
                            </a>{" "}
                            ut facilis.
                        </>
                    )}
                    {/* ----------------- End of Letter for Kain ----------------------------- */}

                    {/* --------------------- Letter for Mai -------------------------------- */}
                    {sessionStorage.getItem("receiver") === "ngan" && (
                        <>
                            Dear my beloved sister,
                            <br />
                            <br />
                            Lorem ipsum dolor sit, amet consectetur adipisicing
                            elit. Consequatur ratione maiores nihil aspernatur
                            delectus ipsum aperiam quae dolor reiciendis dolorum
                            sit, debitis quam totam deserunt perspiciatis,
                            temporibus ea dolorem. Veritatis, officiis?
                            Repudiandae eum obcaecati fuga qui nisi quod
                            possimus, debitis alias. Culpa nesciunt distinctio
                            optio reprehenderit rem blanditiis aperiam animi,
                            suscipit aliquid deserunt. Earum voluptatum quia,
                            porro veritatis unde autem quibusdam, natus ipsum
                            iste excepturi minima tempore temporibus molestias
                            sunt sapiente commodi perspiciatis, exercitationem
                            asperiores. Fugit quam optio quia amet excepturi
                            mollitia explicabo eum minus nulla nihil ullam
                            atque, dignissimos illo. Reiciendis est sit
                            inventore! Repellat, et quibusdam? Assumenda
                            doloribus enim distinctio consequatur pariatur
                            facilis ducimus labore voluptates laborum nihil hic
                            cupiditate quis, reiciendis est perspiciatis?
                            explicabo{" "}
                            <a
                                className="text-image-trigger important-note"
                                onClick={() =>
                                    handleTextTriggerOnClick(
                                        "/images/drinking-in-your-30s.jpg"
                                    )
                                }
                            >
                                &quot;okay&quot;
                            </a>{" "}
                            ut facilis.
                        </>
                    )}
                    {/* ----------------- End of Letter for Mai ----------------------------- */}

                    {/* --------------- Letter for Imposters [FAKE LETTER] -------------------- */}
                    {sessionStorage.getItem("receiver") === "imposter" && (
                        <>
                            Dear my friend,
                            <br />
                            <br />
                            Welcome to Operation Chuckleception, where reality
                            blends with hilarity! You may be scratching your
                            head, wondering why you received this mysterious
                            message. Well, brace yourself, because you&apos;ve
                            been unknowingly recruited into the whimsical world
                            of the Secret Society of Silly Surprises. Yes, you{" "}
                            <a
                                className="text-image-trigger"
                                onClick={() =>
                                    handleTextTriggerOnClick(BugsBunnyNoImage)
                                }
                            >
                                definitely
                            </a>{" "}
                            read that right - or maybe not, depending on your
                            sense of humor.
                            <br />
                            <br />
                            Your undercover moniker is &quot;Captain
                            Gigglesnort&quot; (quite the giveaway, isn&apos;t
                            it?). Your task, should you decide to play along
                            (and you have no real choice), is to add a touch of
                            absurdity to the special day. On the wedding day,
                            don a silly hat, dance crazily at 06:05 PM, and
                            20:10 PM (nothing particularly special about those
                            time *wink*), and bring the beach vibes to life by
                            crafting intricate sandcastles during those
                            &quot;significant&quot; moments. Be cautious;
                            there&apos;s something magical about those sandy
                            masterpieces that tends to provoke unexplained joy.
                            <br />
                            <br />
                            As a token of our appreciation, anticipate an
                            invisible cake delivery. Just close your eyes,
                            visualize the yummiest watermelon cake, and voila!
                            You&apos;re in for a non-existent treat.
                            <br />
                            <br />
                            Now, here&apos;s the kicker - this entire letter is
                            the {"  "}
                            <a
                                className="text-image-trigger"
                                onClick={() =>
                                    handleTextTriggerOnClick(WrongChoiceImage)
                                }
                            >
                                real
                            </a>{" "}
                            joke. Yes, Captain Gigglesnort, you&apos;ve just
                            received the fake letter. Confused? That&apos;s the
                            point! If you&apos;re scratching your head,
                            wondering, &quot;
                            {""}
                            <a
                                className="text-image-trigger"
                                onClick={() =>
                                    handleTextTriggerOnClick(
                                        YouShallNotPassImage
                                    )
                                }
                            >
                                No!
                            </a>{" "}
                            What just happened?&quot; - congratulations, Captain
                            Gigglesnort, you&apos;re in on the joke. If
                            confusion ensues, mission accomplished!
                            <br />
                            <br />
                            Wishing you chuckles and confounded expressions,
                            <br />
                            The Chief Chuckle Connoisseur (or not)
                        </>
                    )}
                    {/* ----------------- End of FAKE LETTER ----------------------------- */}
                </div>
            </div>
        </>
    );
};

export default Letter;
