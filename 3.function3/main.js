function alphabetSort(message){
    var array = message.split("");
    function compare(var1, var2){
        if(var1 > var2){
            return 1;
        }
        if(var1 < var2){
            return -1;
        }
        return 0;
    }
    return array.sort(compare).join("");
}

console.log(alphabetSort("hello"));
console.log(alphabetSort("he llo "));
