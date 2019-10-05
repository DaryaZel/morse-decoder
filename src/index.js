const MORSE_TABLE = {
    '.-': 'a',
    '-...': 'b',
    '-.-.': 'c',
    '-..': 'd',
    '.': 'e',
    '..-.': 'f',
    '--.': 'g',
    '....': 'h',
    '..': 'i',
    '.---': 'j',
    '-.-': 'k',
    '.-..': 'l',
    '--': 'm',
    '-.': 'n',
    '---': 'o',
    '.--.': 'p',
    '--.-': 'q',
    '.-.': 'r',
    '...': 's',
    '-': 't',
    '..-': 'u',
    '...-': 'v',
    '.--': 'w',
    '-..-': 'x',
    '-.--': 'y',
    '--..': 'z',
    '.----': '1',
    '..---': '2',
    '...--': '3',
    '....-': '4',
    '.....': '5',
    '-....': '6',
    '--...': '7',
    '---..': '8',
    '----.': '9',
    '-----': '0',
};


function decode(expr) {
    let array10each = expr.match(/.{1,10}/g);
    let array10each2each = [];
    let morseArray10each2each = [];
    let morseLettersArray = [];
    for (let i = 0; i < array10each.length; i++) {
        array10each2each.push(array10each[i].match(/.{1,2}/g));
    }
    for (let i = 0; i < array10each2each.length; i++) {
        morseArray10each2each[i] = []
        for (let y = 0; y < array10each2each[i].length; y++) {

            if (array10each2each[i][y] == "10") {
                morseArray10each2each[i].push(".")
            }
            else if (array10each2each[i][y] == "11") {
                morseArray10each2each[i].push("-")
            }
            else if (array10each2each[i][y] == "**") {
                morseArray10each2each[i].push(" ")
            }
        }
    }
    for (let i = 0; i < morseArray10each2each.length; i++) {
        morseArray10each2each[i] = morseArray10each2each[i].join("")
    }
    for (let y = 0; y < morseArray10each2each.length; y++) {
        if (morseArray10each2each[y] != "     ") {
            morseLettersArray.push(MORSE_TABLE[morseArray10each2each[y]])
        }
        else {
            morseLettersArray.push(' ')
        }
    }
    return morseLettersArray.join('')
}
module.exports = {
    decode
}