const arr = [];

for(let a of Array.from({length: 10}, (a ,index) => index + 1)){
    arr.push(a);
}

console.log(arr);