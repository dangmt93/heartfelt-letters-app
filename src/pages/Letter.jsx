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
                    Dear John Doe,
                    <br />
                    <br />
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Consequatur ratione maiores nihil aspernatur delectus ipsum
                    aperiam quae dolor reiciendis dolorum sit, debitis quam
                    totam deserunt perspiciatis, temporibus ea dolorem.
                    Veritatis, officiis? Repudiandae eum obcaecati fuga qui nisi
                    quod possimus, debitis alias. Culpa nesciunt distinctio
                    optio reprehenderit rem blanditiis aperiam animi, suscipit
                    aliquid deserunt. Earum voluptatum quia, porro veritatis
                    unde autem quibusdam, natus ipsum iste excepturi minima
                    tempore temporibus molestias sunt sapiente commodi
                    perspiciatis, exercitationem asperiores. Fugit quam optio
                    quia amet excepturi mollitia explicabo eum minus nulla nihil
                    ullam atque, dignissimos illo. Reiciendis est sit inventore!
                    Repellat, et quibusdam? Assumenda doloribus enim distinctio
                    consequatur pariatur facilis ducimus labore voluptates
                    laborum nihil hic cupiditate quis, reiciendis est
                    perspiciatis?
                    <br />
                    <br />
                    Nemo excepturi dolores dolorum aut ipsum fugit sapiente
                    aliquid nisi! Aliquid nesciunt reiciendis laborum dolor quos
                    deserunt consequatur sunt nobis necessitatibus repellat
                    nostrum similique recusandae quod rem, voluptate perferendis
                    eos dolore aperiam laudantium consequuntur magni nisi culpa.
                    Nam eveniet, similique beatae magnam, laudantium, ipsam
                    iusto tenetur odio quaerat animi illum. Sed magni obcaecati
                    aliquid est, doloribus fuga incidunt iure recusandae
                    adipisci dolor, molestias laboriosam quibusdam ut dicta
                    ipsum inventore error. Id nostrum nobis aperiam autem
                    corporis temporibus repellat? Et delectus reprehenderit
                    adipisci sunt mollitia recusandae dignissimos, enim
                    architecto voluptates quae voluptatem eligendi quos cumque
                    tempora quibusdam expedita eveniet in, aliquam atque.
                    <br />
                    <br />
                    Cum, harum. Doloribus vitae est tempore iste! Esse culpa,
                    temporibus explicabo, itaque aut rerum iure, quo delectus
                    nemo hic et corporis atque rem. Sint excepturi voluptatum
                    aliquam mollitia tempore maxime perspiciatis, a ullam,
                    quidem ad neque obcaecati eaque, suscipit omnis quis minima
                    est earum numquam assumenda cum dolor! Consequatur et quas
                    accusamus nostrum iure dolores! Asperiores fugiat nobis
                    explicabo molestias ut ipsum obcaecati? Eum alias vero
                    praesentium excepturi cum molestias nobis unde maiores earum
                    aperiam error eaque dolorem quis corporis quia sint atque
                    porro, optio architecto dolore! Explicabo, quo! Quisquam
                    adipisci illo ratione dolorem debitis fuga vitae eos ab
                    dolorum tempora est delectus, dignissimos nostrum alias non
                    asperiores ipsam vel itaque rerum. Nihil assumenda totam
                    amet illum vel magni ipsum eius rerum, pariatur unde eveniet
                    magnam nemo dolore fuga ratione repellendus ex, suscipit
                    omnis! Amet rem, aut quod dolor tempora quos inventore,
                    necessitatibus ut eum, iure deserunt minus? Iusto voluptatum
                    quas quis nemo praesentium quam, eaque quod maxime, eius
                    quisquam eveniet iste tempore repellat dolore ratione
                    commodi odit, architecto in? Ipsam ratione amet porro sunt
                    placeat sit repudiandae sed voluptatum ullam, quia maxime
                    ducimus vel exercitationem necessitatibus et illum, officia
                    inventore veniam explicabo{" "}
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
                    <br />
                    <br />
                    Voluptas, sapiente unde eaque ab ratione dolorem laudantium!
                    Delectus adipisci ab iste impedit ea blanditiis sapiente
                    libero aliquam asperiores nobis nemo dolorem, repellat quis
                    ipsam fuga vel eligendi sint autem, quos voluptate.
                    Exercitationem minima voluptate ullam. Voluptatibus eveniet
                    perspiciatis molestias voluptas cum sed qui aspernatur
                    soluta quo dicta a excepturi error voluptates quas commodi
                    quasi aliquid, iste rem sit laudantium dolorem dolore! Fuga
                    quia deserunt, recusandae aperiam aut ipsam expedita, magni
                    hic quaerat dolore nobis minima voluptatum eveniet quas
                    laboriosam quasi optio qui sit corrupti tempore debitis?
                </div>
            </div>
        </>
    );
};

export default Letter;
