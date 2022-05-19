const removeFromArray = function(initialArray, ...itemToRemove) {

    let initialArrayLen = initialArray.length;

    for(item of itemToRemove){
        for(let i = 0; i < initialArrayLen; i++){
            console.log(i);
            if(item === initialArray[i]){
                initialArray.splice(i, 1);
            }
        }       
    }
    return initialArray;
};


// Do not edit below this line
module.exports = removeFromArray;
