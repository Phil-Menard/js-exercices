const reverseString = function(stringToReverse) {

    let letters = "";

    for (let i = stringToReverse.length - 1; i >= 0; i--)    {
        letters += stringToReverse[i];
    }
    return letters;
};

// Do not edit below this line
module.exports = reverseString;
