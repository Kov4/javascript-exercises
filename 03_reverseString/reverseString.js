const reverseString = function(string) {

    let stringChar = string.split("");
    let reversedArr = [];
    let reversedStr = '';
    for(char of stringChar){
        reversedArr.unshift(char);
        reversedStr = reversedArr.join('');
    }
    console.log(reversedStr)
    return reversedStr;
};

reverseString("ma phrase")

// Do not edit below this line
module.exports = reverseString;
