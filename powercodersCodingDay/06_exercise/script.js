function getLastValue(array) {
    array.sort();
    // console.log(array.sort());
    return array[array.length-1];
}

console.log(getLastValue(["Monday","Thursday","Saturday","Wednesday","Tuesday"]));