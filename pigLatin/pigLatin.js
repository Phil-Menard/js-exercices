function pigLatin(string) {

    /* For words that begin with consonant sounds, all letters before the initial vowel are placed at the end of the word sequence. 
    Then, "ay" is added, as in the following examples: "pig" = "igpay"

    When words begin with consonant clusters, the whole sound is added to the end when speaking or writing : "smile" = "ilesmay"

    For words that begin with vowel sounds, generally only a syllable 'yay' is appended to the end, with no modifications to the beginning onset. 
    This convention is not universal; other suffixes such as 'way' or 'hay' are also used. Examples are: "eat" = "eatyay" or "eatway" or "eathay"

    An alternative for words beginning with vowel sounds has one remove the initial vowel(s) along 
    with the first consonant or consonant cluster.[citation needed] This usually only works for words with more than one 
    syllable and offers a variant of the words in keeping with the mysterious, unrecognizable sounds of the converted words. Examples are: "every" = "eryevay"
// */

// faire une boucle sur la longueur de string
// si première lettre => checker consonnant et firstletter jusqu'à "espace" ou fin de string
// si espace => rechecker consonnant et letter jusqu'à "espace" ou fin de string

//(string[i].match(/[^aeiouy]/gi)

let result = "";
let consonants = "";
let isSpace = false;
let checkConsonants = false;

for (let i = 0; i < string.length; i++) {

    let currentLetter = string[i];

    if (currentLetter == " ")    {  // si on a un espace
        isSpace = true;
        result += consonants + "ay" +  " ";
        consonants = "";
    }
    else if (i == 0 || isSpace) {   // si c'est la première lettre d'un mot
        if (currentLetter.match(/[^aeioy]/gi)) {
            consonants += currentLetter;
            checkConsonants = true;
            //console.log("lettre ajoutée dans consonnes 1 : " + currentLetter);
            isSpace = false;
        }
        else    {
            result += currentLetter;
            isSpace = false;
            //console.log("lettre ajoutée dans reste de phrase 1 : " + currentLetter);
        }
    }
    else if (currentLetter.match(/[^aeioy]/gi) && checkConsonants)  {   // si les lettres suivantes sont des consonnes
        consonants += currentLetter;
        //console.log("lettre ajoutée dans consonnes 2 : " + currentLetter);
    }
    else    {   
        result += currentLetter;
        //console.log("lettre ajoutée dans reste de phrase 2 : " + currentLetter);
        checkConsonants = false;
        isSpace = false;
    }

}

result += consonants + "ay";
return result;

}

  
// Do not edit below this line
module.exports = pigLatin;
