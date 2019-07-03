
function palindrome(message){
    var length = message.length;
    var array = message.split("");
    for(var i=0,j=length-1; i<length/2;i++,j--){
        if(array[i] != array[j]){
            return false;
        }
    }
    return true;
}

console.log(palindrome("Hello"));
console.log(palindrome("abcba"));
console.log(palindrome("abccba"));
