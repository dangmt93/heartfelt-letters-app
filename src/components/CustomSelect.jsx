import Select, { components } from "react-select";
import PropTypes from "prop-types";

/**
 * @desc A custom select component that renders a dropdown with each option containing an image icon and label.
 * @param {object} props - The props object containing the necessary data for rendering the CustomSelect component.
 * @param {array} props.dataArray - The array of data objects that represent the options in the dropdown.
 * Each data object in the array must have the following structure: { value: "...", label: "...", icon: "..." }
 * (value for searching the option, label for displaying the option, icon for displaying the image icon)
 * @param {object} props.selectedItem - The state of the selected item object.
 * Initial value should be an empty string (e.g. const [selectedOption, setSelectedOption] = useState("");)
 * @param {function} props.setSelectedItem - The function to update the selected item.
 * @param {object} props.uerLabelStyle - User-defined style object for the label; if not defined, default style will be used.
 * @param {object} props.userIconStyle - User-defined style object for the icon; if not defined, default style will be used.
 * @returns {ReactElement} The rendered CustomSelect component.
 */
const CustomSelect = ({
    dataArray,
    selectedItem,
    setSelectedItem,
    userIconStyle,
    userLabelStyle,
}) => {
    const defaultIconStyle = {
        width: "1.5em",
        marginRight: 10,
    };

    const defaultLabelStyle = {
        fontSize: "1.1em",
        fontFamily: "Arial, sans-serif",
    };

    /**
     * @desc Custom Option component, used to display each option in the dropdown.
     * This includes an image icon and label.
     * @param {object} props - The props object containing the necessary data for rendering the Option component.
     * The data object must have the following structure: { value: "...", label: "...", icon: "..." }
     * @returns {ReactElement} The rendered custom Option component.
     */
    const Option = (props) => (
        <components.Option {...props} className="option">
            <img
                src={props.data.icon}
                alt="icon"
                className="icon"
                style={{ ...defaultIconStyle, ...userIconStyle }}
            />
            <span style={{ ...defaultLabelStyle, ...userLabelStyle }}>
                {props.data.label}
            </span>
        </components.Option>
    );

    Option.propTypes = {
        data: PropTypes.shape({
            value: PropTypes.string,
            label: PropTypes.string,
            icon: PropTypes.string,
        }),
    };

    /**
     * @desc Custom SingleValue component, used to display the selected value in the dropdown.
     * This includes an image icon and label.
     * @param {object} props - The props object containing the children and other props.
     * @return {JSX.Element} The rendered single value component.
     */
    const SingleValue = ({ children, ...props }) => (
        <components.SingleValue {...props}>
            <img
                src={selectedItem.icon}
                alt="s-logo"
                className="selected-logo"
                style={{ ...defaultIconStyle, ...userIconStyle }}
            />
            <span style={{ ...defaultLabelStyle, ...userLabelStyle }}>{children}</span>
        </components.SingleValue>
    );

    SingleValue.propTypes = {
        children: PropTypes.node,
    };

    const handleSelectChange = (value) => {
        setSelectedItem(value);
    };

    return (
        <Select
            value={selectedItem}
            options={dataArray}
            onChange={handleSelectChange}
            styles={{
                singleValue: (base) => ({
                    ...base,
                    display: "flex",
                    alignItems: "center",
                }),
            }}
            components={{
                Option,
                SingleValue,
            }}
        />
    );
};

CustomSelect.propTypes = {
    dataArray: PropTypes.array, // nullable array
    selectedItem: PropTypes.oneOfType([PropTypes.object, PropTypes.string]), // initial value should be an empty string
    setSelectedItem: PropTypes.func.isRequired,
    userIconStyle: PropTypes.object,
    userLabelStyle: PropTypes.object,
};

CustomSelect.defaultProps = {
    dataArray: [],
    selectedItem: "",
    userIconStyle: {},
    userLabelStyle: {},
};

export default CustomSelect;
