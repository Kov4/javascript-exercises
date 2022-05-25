const fibonacci = function(number) {
    let result = 1;
    let oldresultsave;
    let oldresult =0;
    number = parseInt(number);
    if(number<0){
        return "OOPS";
    }
    else if(number === 0){
        return 0;
    }
    else{
        for(let i=0; i<number-1; i++){
            oldresultsave = oldresult;
    
            oldresult = result;
    
            result = result + oldresultsave;
            //console.log(result);
        }
        return result;
    }
    
};

// Do not edit below this line
module.exports = fibonacci;
