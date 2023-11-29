import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import "../css/chestOpening.css";

const ChestOpening = ({ toRoute }) => {
    return (
        <div id="shining-item-container">
            <Link to={`${toRoute}`}>
                <div className="item">
                    <div className="ray-box">
                        <div className="ray ray1"></div>
                        <div className="ray ray2"></div>
                        <div className="ray ray3"></div>
                        <div className="ray ray4"></div>
                        <div className="ray ray5"></div>
                        <div className="ray ray6"></div>
                        <div className="ray ray7"></div>
                        <div className="ray ray8"></div>
                        <div className="ray ray9"></div>
                        <div className="ray ray10"></div>
                    </div>
                </div>
            </Link>
        </div>
    );
};

ChestOpening.propTypes = {
    toRoute: PropTypes.string,
};

ChestOpening.defaultProps = {
    toRoute: "/letter",
};

export default ChestOpening;
