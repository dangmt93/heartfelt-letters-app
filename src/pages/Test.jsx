import { useState } from "react";
import CustomSelect from "../components/CustomSelect";

const OPTIONS = [
    { value: "Scorpio", label: "Scorpio", icon: "./icons/scorpio.png" },
    { value: "Clover", label: "Clover", icon: "./icons/4-leaf-clover.png" },
	{ value: "Deer", label: "Deer", icon: "./icons/deer.png" },
	{ value: "Paint", label: "Paint", icon: "./icons/paint-brush.png" },
];

const Test = () => {
    const [selectedOption, setSelectedOption] = useState("");

    return (
        <div>
            <h1>Select An Item</h1>
            <CustomSelect
                dataArray={OPTIONS}
                selectedItem={selectedOption}
                setSelectedItem={setSelectedOption}
            />

			<p>Selected Item: {selectedOption.label}</p>
        </div>
    );
};

export default Test;
