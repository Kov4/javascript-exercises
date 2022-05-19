const sumAll = function(a, b) {

    let sum = 0;
    console.log((typeof(a) !== 'number') || (typeof(b)!== 'number'));

    if ((typeof(a) !== 'number') || (typeof(b)!== 'number')){
        return "ERROR";
    }

    if(a>b){
        old_b = b;
        b = a;
        a = old_b;
    }

    if ((a<0)||(b<0)){
        return "ERROR";
    }



    for(let i = a; i<=b; i++){
        sum += i;
        //console.log(sum);
    }

    return sum;
};


// Do not edit below this line
module.exports = sumAll;
