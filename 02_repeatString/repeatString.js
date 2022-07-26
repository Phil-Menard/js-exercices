const repeatString = function(string, number) {

    let coefficient = number;
    
    if (coefficient < 0)    {result = "ERROR"}
    else  {
        result = "";
        let strings = [""];
        let index = 0;

        for (index; index < coefficient; index++) {
            strings.push(string);
        }

        result = strings.join("");
        }

    return result;

};

// Do not edit below this line
module.exports = repeatString;
