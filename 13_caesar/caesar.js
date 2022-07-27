const caesar = function(string, number) {

    let char = 0;
    let letter = "";
    let temp = "";
    // string.charCodeAt(0) + number;
    // String.fromCharCode(char);

    while(number > 26)  {
        number -= 26;
    }

    while (number < -26)    {
        number += 26;
    }
    
    for (let i = 0; i < string.length; i++) {
        
        let index = string[i].charCodeAt(0);
        let outOfLimits = 0;
        let minLowerIndex = 65;
        let maxLowerIndex = 90;
        let minUpperIndex = 97;
        let maxUpperIndex = 122;


        if (index >= minLowerIndex && index <= maxLowerIndex){  // if charcode is inside numeral value for lowercase

            
            char = index + number;

            if (char > maxLowerIndex)  {    // if the charCode is superior at the limit of lowercase letter code
                // Add new code here !!!!!!!>>>>>><<<<<<!!!!!!!
                outOfLimits = char - maxLowerIndex;
                // console.log(minLowerIndex + outOfLimits);
                letter = String.fromCharCode(minLowerIndex + outOfLimits - 1);
                temp += letter;
            }
            else if (char < minLowerIndex)  {   // if the charCode is inferior at the limit of lowercase letter code
                outOfLimits = minLowerIndex - char;
                // console.log("PROUT");
                // console.log(maxLowerIndex - outOfLimits);
                letter = String.fromCharCode(maxLowerIndex - outOfLimits + 1);
                temp += letter;
            }
            else    {
                letter = String.fromCharCode(char);
                temp += letter;
            }

        }
        else if (index >= minUpperIndex && index <= maxUpperIndex)   {    // if charcode is inside numeral value for uppercase


            char = index + number;

            if (char > maxUpperIndex)  {    // if the charCode is superior at the limit of uppercase letter code
                outOfLimits = char - maxUpperIndex;
                // console.log(outOfLimits);
                letter = String.fromCharCode(minUpperIndex + outOfLimits - 1);
                temp += letter;
            }
            else if (char < minUpperIndex)  {  // if the charCode is inferior at the limit of uppercase letter code
                outOfLimits = minUpperIndex - char;
                // console.log("PROUT");
                // console.log(minUpperIndex - outOfLimits);
                letter = String.fromCharCode(minUpperIndex - outOfLimits + 1);
                temp += letter;
            }
            else    {
                letter = String.fromCharCode(char);
                temp += letter;
            }
        }
        else    {
            letter = String.fromCharCode(index);
            temp += letter;
        }
    }

    return temp;


};

// Do not edit below this line
module.exports = caesar;
