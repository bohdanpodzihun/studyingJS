alert("Відгадай слово. Давай перевіримо чи ти не москаль)");

let words = [
    "паляниця",
    "молодиця",
    "нісенітниця",
    "веселка",
    "вештатися",
    "філіжанка",
    "духмяний",
    "непереливки",
    "кмітливий",
    "теревенити",
    "телепень"
];

let word = words[Math.floor(Math.random() * words.length)];

let answer = [];

for (let i = 0; i < word.length; i++) {
    answer[i] = "_";
}

let remainingLetters = word.length;

while (remainingLetters > 0) {
    alert(answer.join(" "))
    let guess = prompt("Відгадай букву, або натисніть скасувати ддяд завершення гри");

    if (guess === null) {
        break;
    } else if (guess.length !== 1) {
        alert("Будь ласка, введіть тільки одну букву");
    } else {
        for (let j = 0; j < word.length; j++) {
            if (word[j] === guess) {
                answer[j] = guess;
                remainingLetters--;
            }
        }
    }
}

alert(answer.join(" "));
alert("Чудово, було загадано слово - " + word);