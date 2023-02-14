var arr = [1,2,43,342,575];
var low = 0;
var high = arr.length-1;
var element = 43;
var ans = recursive(arr,low,high,element);
if(ans == -1)
{
    console.log("Element not found");
}
else{
    console.log(element+" found at pos "+ans);
}
function recursive(arr,low,high,element)
{
    var middle = (low + (high - low))/2;
    if(arr[middle] == element)
    {
        return middle;
    }
    if(arr[middle] < element)
    {
        recursive(arr,middle+1,high,element);
    }
    else{
        recursive(arr,low,middle-1,element);
    }
    return -1;
}
