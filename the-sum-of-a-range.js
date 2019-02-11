
function range(start, end) {
    let rangeArray = []
    for (i=start; i<=end; i++) {
        rangeArray.push(i);
    }
    return rangeArray;
}

function sum(range) {
    let summingUp = 0;    
    for (i=0; i<=range.length-1; i++) {
        summingUp +=  range[i];
    }
    return summingUp;
}

console.log(range(1, 10));

console.log(sum(range(1, 10)));

//BONUS
//console.log(range(5, 2, -1)); 
