function countWords(message){
    var reg = /\s+/;
    var array = message.trim().split(reg);
    return array.length;
}
console.log(countWords('Good morning, I love JavaScript.'));
console.log(countWords('Good morning,     I love  JavaScript.  '));
