/**
 * @desc Convert Vietnamese characters in a given input string to their English counterparts.
 * @param {string} input - The input string to convert.
 * @return {string} The converted string with Vietnamese characters replaced by their English counterparts.
 */
const convertVietnameseToEnglish = (input) => {
    const vietnameseChars =
        "àáảãạăắằẳẵặâầấẩẫậèéẻẽẹêềếểễệìíỉĩịòóỏõọôồốổỗộơờớởỡợùúủũụưừứửữựỳýỷỹỵđ";
    const englishChars =
        "aaaaaaaaaaaaaaaaaeeeeeeeeeeeiiiiiooooooooooooooooouuuuuuuuuuuyyyyyyd";

    return input
        .split("")
        .map((char) => {
            const index = vietnameseChars.indexOf(char);
            return index !== -1 ? englishChars[index] : char;
        })
        .join("");
};

export default convertVietnameseToEnglish;
