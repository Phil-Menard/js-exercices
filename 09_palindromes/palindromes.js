const palindromes = function (string) {

    let str = string.toLowerCase();
    
    let value = str.replace(/[^a-zA-Z]/g, '');
    value.toLowerCase();
    
    let valueSize = value.length;
    let compare = "";

    for (let i = valueSize - 1; i > valueSize / 2; i--)    {
        compare += value[i];
    }


    for (let i = 0; i < compare.length; i++)    {
        if (compare[i] != value[i])    {return false;}
    }
    return true;
}

// Do not edit below this line
module.exports = palindromes;
