function numberFinder(input){
    let count = 0;

    for(let x = 0; x <= 1000 ; x++) {
        let str = x.toString();

        let name = input.toString(),
            re = new RegExp(name, 'gi');
         count += (str.match(re) ||[]).length;
    }
    return count;
}

for(let i = 0; i <= 9; i++){
    console.log( i + ' Occurs: ' + numberFinder(i));
}