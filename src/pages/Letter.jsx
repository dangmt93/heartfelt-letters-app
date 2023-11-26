import { useState } from "react";
import "../css/letter.css";

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
                                className="text-image-trigger"
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
                                className="text-image-trigger"
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
                </div>
            </div>
        </>
    );
};

export default Letter;
