
export const isNumberEven = (i) => {
  // i will be an integer.
  // Return true if it's even, and false if it isn't.
if ((i & 1) === 0) {
    return true;
} else {
    return false;
}
};

export const getFileExtension = (str) => {


  if (str.lastIndexOf(".") > 0) {
    var str1 = str.substr(str.lastIndexOf("."));
    var str2 = str1.split('.');
    return str2[1];
} else {
    return false;
}
 
};

export const longestString = (arr) => {
 var max = 0;
 for (var i = 0; i < arr.length; i += 1) {
    if ((typeof(arr[max]) === 'string' || arr[max] instanceof String)&&(typeof(arr[i]) === 'string' || arr[i] instanceof String))


{
    if(arr[i].length >arr[max].length)
    max = i;}
}
return arr[max];
};

export const reverseString = (str) => {

  
String.prototype.reverse = function ()
{
        var n   =  '';
        for( var i=this.length-1; i >= 0; i--)
                n       +=     this.charAt(i);
        return n;
}
return str.reverse();
};

export const isPalindrome = (str) => {


  if(str.toLowerCase() === reverseString(str.toLowerCase()))
  return true;
  else return false;
};

export const nestedSum = (arr) => {

var i, sum =0;
    for (i=0;i<arr.length;i++){

	if (Array.isArray(arr[i])){
		sum+=nestedSum(arr[i]);
        }else if(Number.isInteger(arr[i]))
	   sum+=arr[i];
    }
return sum;
};
