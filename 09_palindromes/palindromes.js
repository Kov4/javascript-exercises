const palindromes = function (string) {

    str = string.toLowerCase().replace(/[^\w\s]/g, "").replace(/\s/g, '');
    console.log(str);
    console.log(Math.floor(str.length/2));
    let middle = parseInt(Math.floor(str.length/2));
    middleNeg = -Math.abs(middle);
    console.log(middleNeg)
    firstPart = str.slice(0, middle);
    secondPart = str.slice(middleNeg);
    console.log(firstPart);
    secondPart = secondPart.split("").reverse().join("");
    console.log(secondPart);
    if(firstPart === secondPart){
        return true;
    }

    return false;
};

// Do not edit below this line
module.exports = palindromes;
