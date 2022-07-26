const removeFromArray = function() {

    let table = arguments[0];

    // I start the loop at 1 because 0 is the array (first argument)
    for (let i = 1; i < arguments.length; i++) {

        for (let j = 0; j <= table.length; j++) {
            if (table[j] === arguments[i]) {
                table.splice(j, 1);
            }
        }
    }
    return table;
};

// Do not edit below this line
module.exports = removeFromArray;
