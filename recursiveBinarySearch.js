function binarySearch(arr, item, start = 0, end = arr.length - 1) {
    if (start > end) {
        console.log('Item not found');
        return -1;
    }
    
    const mid = Math.floor((start + end) / 2);
    if (arr[mid] === item) {
      return mid;
    }
    if (arr[mid] < item) {
      return binarySearch(arr, item, mid + 1, end);
    } 
    if (arr[mid] > item) {
      return binarySearch(arr, item, start, mid - 1);
    }
}

const array = [2,3,5,7,9];
const item = 7;

console.log(binarySearch(array,item));