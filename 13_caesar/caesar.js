const caesar = function(str, number) {
    
    var array = str.split('');
    
    const majArray = [];
    const smlArray = [];
    
    for(i=65; i<91; i++){ //create an array with alphabet letter
        let letter = String.fromCharCode(i);
        majArray.push(letter);
    } 
    for(i=97; i<123; i++){ //create an array with alphabet letter in CAPS
        let letter = String.fromCharCode(i);
        smlArray.push(letter);
    }

    
    let encodedArray = [];
    console.log(array);

    array.forEach(function(item){
        
        let newLetter='';
        let letterPosition = 0;
        if(item.charCodeAt(0) >= 97 && item.charCodeAt(0) <= 122){
            letterPosition = item.charCodeAt(0) - 97 + (number % 26);
            console.log(letterPosition)
            if(letterPosition>=26){
                letterPosition = letterPosition-26;
            }
            newLetter = smlArray.at(letterPosition)    
            console.log(newLetter);

        }
        else if(item.charCodeAt(0) >= 65 && item.charCodeAt(0) <= 90){
            newLetter = majArray.at(item.charCodeAt(0) - 65 + (number % 26));
            letterPosition = item.charCodeAt(0) - 65 + (number % 26);
            console.log(letterPosition)
            if(letterPosition>=26){
                letterPosition = letterPosition-26;
            }
            newLetter = majArray.at(letterPosition)    
            console.log(newLetter);
        }
        else{
            newLetter = item;
        }

        encodedArray.push(newLetter);

    });
    console.log(encodedArray);
    encodedStr = encodedArray.join('');
    
    return encodedStr;
};

// Do not edit below this line
module.exports = caesar;
