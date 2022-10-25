function reverseNumber(num) {
    let Num = num.toString();
    let reverseNum = "";
    let index = Num.length-1;
    for (let i=0; i<Num.length ; i++){
        
        // console.log(index);
        reverseNum+= Num[index];
        console.log(Num[index]);
        index--;
        // console.log(index);
    }
    return reverseNum;
    
}

console.log(1234);
console.log("reverse number : " + reverseNumber(1234));