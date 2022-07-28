const snakeCase = function(string) {

    // A-Za-z
    let result = "";
    let onlyLetters = true;

    for (let i = 0; i < string.length; i++)    {
        let currentLetter = string[i];

        if (!currentLetter.match(["^[a-zA-Z]+$"]))  {
            onlyLetters = false;
            result = "";
            break;
        }
        else    {
            if (i != 0 && currentLetter == currentLetter.toUpperCase()) {
                result += "_" + currentLetter;
            }
            else    {
                result += currentLetter;
            }
        }
    }
    //SnAkE..CaSe..Is..AwEsOmE
    if (!onlyLetters)    {

        for (let i = 0; i < string.length; i++) {
    
            let currentLetter = string[i];
    
            if (currentLetter == " " || currentLetter == "-")   { // if letter is space
                result += "_";
            }
            else if (currentLetter.match(["^[a-zA-Z]+$"]) ) {
                if (currentLetter == currentLetter.toUpperCase() && string[i-1] == "." && string[i-2] == ".")   {
                    result += "_" + currentLetter;
                }
                else     {

                    result += currentLetter;
                }
            }
    
        }
    }


    let answer = result.toLowerCase();
    return answer;
};

// Do not edit below this line
module.exports = snakeCase;
