const sumAll = function(numberOne, numberTwo) {

    if (numberOne < 0 || numberTwo < 0) {
        return "ERROR";
    }
    else if (typeof numberOne != "number" || typeof numberTwo != "number")  {
        console.log("prout test fonctionne")
        return "ERROR";
    }
    console.log(typeof numberOne);
    let result = 0;
    let index = 0;
    let limit = 0;

    if (numberOne < numberTwo)  {
        index = numberOne
        limit = numberTwo
    }
    else    {
        index = numberTwo
        limit = numberOne
    }

    for (let i = index; i <= limit; i++) {
        result += i;
    }

    return result;
};

// Do not edit below this line
module.exports = sumAll;
