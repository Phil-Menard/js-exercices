const leapYears = function(date) {

    //Leap years are years divisible by four (like 1984 and 2004). 
    //However, years divisible by 100 are not leap years (such as 1800 and 1900) 
    //unless they are divisible by 400 (like 1600 and 2000, which were in fact leap years). 

    if ((date % 4 == 0) && (date % 100 != 0) ){
        return true;
    }
    else if (date % 400 == 0)    {
        return true
    }
    else    {
        return false;
    }


};

// Do not edit below this line
module.exports = leapYears;
