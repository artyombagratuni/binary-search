function binarySearch(arr,item) {
    let start = 0;
    let end = arr.length - 1;
    let mid;
    while (start <= end) {
        mid = Math.floor((start + end) / 2);
        if (item === arr[mid]) {
            return mid;
        }
        if (item > arr[mid]) {
            start = mid + 1;
        }
        if (item < arr[mid]) { 
            end = mid - 1;
        }
    }
    console.log('Item not found');
    return -1; 
}
const array = [2,3,5,7,9];
const item = 3;

console.log(binarySearch(array,item));