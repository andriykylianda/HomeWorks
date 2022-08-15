onst sentence = 'is2 thi1s t4est 3a';
const words = sentence.split(' ');
console.log(words);
const sortedWords = [];
words.forEach(x => {
    if (x.includes(1)) {
        sortedWords[0] = x;
    } else if (x.includes(2)) {
        sortedWords[1] = x;
    } else if (x.includes(3)) {
        sortedWords[2] = x;
    } else if (x.includes(4)) {
        sortedWords[3] = x;
    } else if (x.includes(5)) {
        sortedWords[4] = x
    } else if (x.includes(6)) {
        sortedWords[5] = x;
    } else if (x.includes(7)) {
        sortedWords[6] = x
    } else if (x.includes(8)) {
        sortedWords[7] = x
    } else if (x.includes(9)) {
        sortedWords[8] = x
    }
})
alert(sortedWords.join('-'));
