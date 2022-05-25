const findTheOldest = function(array) {

    const orderedArray = array.sort(function(a, b){
        
        let lastInventor;
        let nextInventor;

        if(!a.yearOfDeath){
            a.yearOfDeath = ((new Date()).getFullYear());
        }
        if(!b.yearOfDeath){
            b.yearOfDeath = ((new Date()).getFullYear());
        }

            lastInventor = a.yearOfDeath - a.yearOfBirth;
            nextInventor = b.yearOfDeath - b.yearOfBirth;
            (console.log)
        return lastInventor > nextInventor ? -1 : 1;
    });
    console.log(orderedArray)
    
    return orderedArray[0];
};

// Do not edit below this line
module.exports = findTheOldest;
