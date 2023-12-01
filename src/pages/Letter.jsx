import { useState } from "react";
import { Link } from "react-router-dom";
import "../css/letter.css";
import BugsBunnyNoImage from "../assets/images/memes/bugs-bunny-no.png";
import DrinkingInYour30sImage from "../assets/images/memes/drinking-in-your-30s.jpg";
import PermissionToPlayImage from "../assets/images/memes/permission-to-play.jpg";
import ThisIsFineGIF from "../assets/images/memes/this-is-fine.gif";
import WrongChoiceImage from "../assets/images/memes/wrong-choice.png";
import YouShallNotPassGIF from "../assets/images/memes/you-shall-not-pass.gif";
import ItsAboutTimeGIF from "../assets/images/memes/its-about-time.gif";
import ModernArtImage from "../assets/images/memes/modern-art.jpg";

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
                                    handleTextTriggerOnClick(ItsAboutTimeGIF)
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
                            To my favourite person (only second to Kain),
                            <br />
                            <br />
                            As I sit down to write this letter, my heart is
                            filled with a bittersweet mix of joy and regret.
                            Tomorrow, or today, depending on when you open this
                            letter, marks the day you and Kain embark on a new
                            journey together, exchanging vows and promises of a
                            lifetime. While I am unable to physically be there
                            to witness this momentous occasion, my spirit is
                            undoubtedly with you, dancing alongside the
                            celebration of your wedding.
                            <br />
                            <br />
                            More than 13 years, huh? Wow, that&apos;s a long
                            journey. From the moment Kain entered your life (or
                            rather when I met him for the first time on that
                            night when you sneakily went outside to meet him,
                            and I tagged along), I sensed that he would become
                            an integral part of your story (maybe not; I was
                            only 11 years old). But as the time went on, I could
                            tell for sure that he is the one for you.
                            <br />
                            <br />
                            The two of you are an extraordinary match, a pairing
                            that seems almost too perfect for this chaotic
                            world. In a sea of billions, how fortunate both of
                            you were to find each other - or more accurately,
                            that Kain found you and made you fall in love with
                            his unwavering determination and decisiveness. I
                            still remember him telling me about how you were
                            playing hard to get and seemingly ignoring him
                            (&quot;treat them mean, keep them keen&quot; I see).
                            But with his will, he continued to surprise you time
                            after time - from the gifts he prepared for you, to
                            the ride with his cousin to see you off at the
                            airport the first time you left, and most recently,
                            the proposal. Speaking of which, when he approached
                            me to help with the proposal, I couldn&apos;t help
                            but smirk and think,{" "}
                            <a
                                className="text-image-trigger"
                                onClick={() =>
                                    handleTextTriggerOnClick(ItsAboutTimeGIF)
                                }
                            >
                                &quot;Finally!&quot;
                            </a>
                            {""}, because seriously, the guy used to keep a
                            notebook with the line in his to-do list saying{" "}
                            &quot;
                            <span className="vietnamese-text">
                                Talk to chị Ngân tomorrow
                            </span>
                            &quot; highlighted, underlined, starred, and circled
                            (or maybe just highlighted). That&apos;s some KDrama
                            shit right there if I&apos;ve ever seen one.
                            <br />
                            <br />
                            Thinking about you with anyone else is inconceivable
                            because you complement each other so well. For
                            instance, your lack of culinary and vocal prowess
                            finds their perfect counterparts in Kain&apos;s, so
                            at least you won&apos;t be starved to death, and we
                            are spared from experiencing your rendition of{" "}
                            <a
                                className="text-image-trigger"
                                onClick={() =>
                                    handleTextTriggerOnClick(ModernArtImage)
                                }
                            >
                                &quot;modern art&quot;
                            </a>
                            {""}
                            , but with sound. Jokes aside, Sis, you are great in
                            many things, umm… like your keen eye for design and
                            aesthetics, which Kain also happens to be great at,
                            huh? That makes me wonder, how much has Kain&apos;s
                            influence shaped your styles? And let&apos;s not
                            forget your knack for house decoration, turning
                            every space into a warm and inviting haven. Your
                            outgoing nature and negotiation skills also pair
                            really well with Kain&apos;s logical thinking, so
                            you can take the lead in conversations while he
                            provides his input from the background. And when it
                            comes to connecting with people, your charm is
                            undeniable - or perhaps they&apos;re simply
                            terrified of your bossing demeanour. No wonder so
                            many of your friends are willing to quit their job
                            just to attend your wedding.
                            <br />
                            <br />
                            Despite my countless episodes of third-wheeling, I
                            wouldn&apos;t trade those moments for anything -
                            after all, I did get my free treat for food. If
                            nothing else, I hope my amateur photography skills
                            managed to capture a fraction of the love that
                            radiates between you two.
                            <br />
                            <br />
                            It saddens me that I cannot be present at your
                            meticulously planned, long-awaited majestic wedding.
                            But hey, I&apos;ve been there for the countless
                            other moments that have led to this day. Consider
                            this small app my wedding gift to you. Hope you have
                            the best wedding ever, and that everything goes
                            according to what you had spent the past year
                            planning. Don&apos;t you worry about the house,
                            everything is{"  "}
                            <a
                                className="text-image-trigger"
                                onClick={() =>
                                    handleTextTriggerOnClick(ThisIsFineGIF)
                                }
                            >
                                fine
                            </a>
                            {""}. Remember, this is your night - enjoy every
                            moment. Oh, and keep an eye on Kain; we don&apos;t
                            want him partying too hard, {"  "}
                            <a
                                className="text-image-trigger"
                                onClick={() =>
                                    handleTextTriggerOnClick(
                                        DrinkingInYour30sImage
                                    )
                                }
                            >
                                you know
                            </a>
                            {""}
                            .
                            <br />
                            <br />
                            With all my love,
                            <br />
                            <span className="signature">T.D.</span>
                            <br />
                            <br />
                            P.S. Here&apos;s{"  "}
                            <a
                                href="https://www.youtube.com/watch?v=IsGk5vej7mw&ab_channel=westlifeVEVO"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="song-link"
                            >
                                a song that I think would be perfect for both of
                                you
                            </a>
                            <br />
                            Another P.S. Remember the journey in the city of
                            Yendys, hence the name of this app.
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
                                    handleTextTriggerOnClick(YouShallNotPassGIF)
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
                    )}
                    {/* ----------------- End of FAKE LETTER ----------------------------- */}
                </div>
            </div>
        </>
    );
};

export default Letter;
