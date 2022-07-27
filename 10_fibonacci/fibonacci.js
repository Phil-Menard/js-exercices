const fibonacci = function(number) {

    let result = 1;
    let lastNumber = 0;

    //fibonacci(4) returns the 4th member of the series: 3  (1, 1, 2, 3)
    if (number < 0)    {return "OOPS";}

    for (let i = 1; i < number; i++)   {

        let temp = result;
        result += lastNumber;
        lastNumber = temp;
        //console.log("last number => " + lastNumber);
    }

    console.log("result => " + result);

    return result;

};

// Do not edit below this line
module.exports = fibonacci;
