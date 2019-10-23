const inputElement = document.getElementById("input");
const outputElement = document.getElementById("output");
const errorElement = document.getElementById("error");

const vowels = ["A", "E", "I", "O", "U"];

function isVowel(character) {
  return vowels.includes(character.toUpperCase());
}

function spoonerize(wordOne, wordTwo) {
  const firstLetterWordOne = wordOne.charAt(0);
  const firstLetterWordTwo = wordTwo.charAt(0);
  const firstLetterWordOneIsVowel = isVowel(firstLetterWordOne);
  const firstLetterWordTwoIsVowel = isVowel(firstLetterWordTwo);
  const ogBeginningOfWordOne =
    firstLetterWordOneIsVowel === isVowel(wordOne.charAt(1))
      ? wordOne.substr(0, 2)
      : firstLetterWordOne;
  const ogBeginningOfWordTwo =
    firstLetterWordTwoIsVowel === isVowel(wordTwo.charAt(1))
      ? wordTwo.substr(0, 2)
      : firstLetterWordTwo;
  let newWordOne = wordOne;
  let newWordTwo = wordTwo;
  if (firstLetterWordOneIsVowel === firstLetterWordTwoIsVowel) {
    newWordOne =
      ogBeginningOfWordTwo + newWordOne.substr(ogBeginningOfWordOne.length);
    newWordTwo =
      ogBeginningOfWordOne + newWordTwo.substr(ogBeginningOfWordTwo.length);
  } else if (firstLetterWordOneIsVowel) {
    newWordOne = ogBeginningOfWordTwo + newWordOne.toLowerCase();
    newWordTwo = newWordTwo.substr(ogBeginningOfWordTwo.length);
  } else if (firstLetterWordTwoIsVowel) {
    newWordTwo = ogBeginningOfWordOne + newWordTwo.toLowerCase();
    newWordOne = newWordOne.substr(ogBeginningOfWordOne.length);
  }
  return newWordOne + " " + newWordTwo;
}

function handleClick() {
  outputElement.innerText = "";
  errorElement.style.display = "none";
  const input = inputElement.value.trim();
  const words = input.split(" ").filter(w => w.length);
  if (words.length !== 2 || words[0].length < 3 || words[1].length < 3) {
    errorElement.style.display = "block";
    return;
  }
  outputElement.innerText = spoonerize(words[0], words[1]);
}

document.getElementById("button").onclick = handleClick;

inputElement.addEventListener("keyup", ({ keyCode }) => {
  if (keyCode === 13) {
    handleClick();
  }
});

const examples = [
  "William Spooner",
  "Mark Wahlberg",
  "Mark Zuckerberg",
  "loving shepherd",
  "wage rate",
  "lighting fire",
  "oiled bicycle",
  "busy dean",
  "cozy nook",
  "missed history",
  "down train",
  "wasted term",
  "Sleeping Beauty",
  "dirty lies",
  "guinea pig",
  "President Reagan",
  "picking leaders",
  "Snooping Putin",
  "keeping parrots",
  "pheasant pluck",
  "phone bug",
  "barber shop",
  "brink pain",
  "candy handle",
  "handy candle",
  "cold bake",
  "jelly beans",
  "fairy hall",
  "drunk pool",
  "pill drugs",
  "fluids dry",
  "Harry Potter",
  "Frodo Baggins",
  "Fleetwood Mac",
  "Bob Marley"
];
function getRandomSuggestion() {
  inputElement.value = examples[Math.floor(Math.random() * examples.length)];
}
getRandomSuggestion();
document.getElementById("random").onclick = getRandomSuggestion;
