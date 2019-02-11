
function countBs(word) {
    let Bs = 0
    for (i = 0; i < word.length; i++) {
        if (word[i] === "B") {
            Bs++
        }
    }
    return Bs;
}
console.log(countBs("BBC"));


function countChar(word, char) {
    let Chars = 0
    for (i = 0; i < word.length; i++) {
        if (word[i] === char) {
            Chars++
        }
    }
    return Chars;
}
console.log(countChar("kakkerlak", "k"));
