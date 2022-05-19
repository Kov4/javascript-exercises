const repeatString = function(string, num) {
    let repeatedstr = '';
    
    if(num<0){
        repeatedstr = 'ERROR'
    }
    else{
        for(let i=0; i<num; i++){
            repeatedstr += string;
        }
        
    }
    return repeatedstr;
    

};

// Do not edit below this line
module.exports = repeatString;
