for(let i = 0; i <= 20; i++){
    if(i % 4 === 0 || i.toString().includes('4')){
        continue;
    }
    console.log(i);
}