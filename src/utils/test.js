const NAME_ASSOCIATIONS = [
    {
        inputName: "Ngan",
        receiver: "Quan",
        answerOptions: [
            "4-leaf Clover",
            "Deer",
            "Scorpio Star Sign",
            "Paint Brush",
        ],
    },
    {
        inputName: "Quan",
        receiver: "Ngan",
        answerOptions: [
            "Scorpio Star Sign",
            "4-leaf Clover",
            "Music Note",
            "Gaming Controller",
        ],
    },
]

console.log("TEST---------------");
console.log(NAME_ASSOCIATIONS.find(item => item.inputName === "Quan").answerOptions);

