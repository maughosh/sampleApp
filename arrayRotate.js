/*
Array rotation means you need to rotate the elements of an array in the right or left direction by given number of positions.
For example, if {1, 2, 3, 4, 5, 6, 7} is an input array then rotating this array in the left direction by two positions
will give {3, 4, 5, 6, 7, 1, 2} and rotating in the right direction by two positions will give {6, 7, 1, 2, 3, 4, 5}.
*/

function Rotate(arr,left,right){
    while(left){
    for(let i=0;i<left;i++){
    let val=arr.shift();
    arr.push(val);
    }
    return arr;
    
    }
     while(right){
    for(let i=0;i<right;i++){
    let val=arr.pop();
    arr.unshift(val);
    }
    return arr;
    
    }
    }
    
  console.log(Rotate([1, 2, 3, 4, 5, 6, 7],4,0));