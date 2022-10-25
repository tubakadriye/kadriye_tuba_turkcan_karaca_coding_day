function weekNumbersToWords(numsArray) {
    numsArray.forEach(myFunction);
    return numsArray;

}

function myFunction(item,index, arr) {
    switch(item) {

        case 1:
            // console.log(item);
            arr[index] = "Monday";
            // console.log(arr[index]);
            break;
        case 2:
            arr[index] = "Tuesday";
            break;
        case 3: 
            arr[index] = "Wednesday";
            break;
        case 4:
            arr[index] = "Thursday";
            break;
        case 5:
            arr[index] = "Friday";
            break;
        case 6:
            arr[index] = "Saturday";
            break;
        case 7:
            arr[index] = "Sunday";
            break;
    }
    // console.log(arr);
}

console.log(weekNumbersToWords([1,4,6,3,2]));