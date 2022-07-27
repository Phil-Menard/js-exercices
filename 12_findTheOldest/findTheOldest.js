const findTheOldest = function(people) {

    let birthDate = people.map(a => a.yearOfBirth);
    let today = new Date();

    let deathDate = people.map(a => a.yearOfDeath);
    for (let i = 0; i < deathDate.length; i++)   {
        if (deathDate[i] == undefined)  {
            deathDate[i] = today.getFullYear();
        }
    }

    let calculAge = [0];
    let index = 0;
    let temp = 0;

    for (let i = 0; i < people.length; i++)    {
        calculAge[i] = deathDate[i] - birthDate[i];
    }

    for (let i = 0; i < calculAge.length; i++)  {
    
        if (calculAge[i] > temp)    {
            temp = calculAge[i];
            index = i;
        }
    }

    return people[index];

};

// Do not edit below this line
module.exports = findTheOldest;
