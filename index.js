const inputElement = document.getElementById("input");
const outputElement = document.getElementById("output");
const errorElement = document.getElementById("error");

const vowels = ["A", "E", "I", "O", "U"];

function isVowel(character) {
  return vowels.includes(character.toUpperCase());
}

function spoonerize(wordOne, wordTwo) {
  let newWordOne = wordOne;
  let newWordTwo = wordTwo;
  const firstAndSecondLetterWordOne = wordOne.substr(0, 2);
  const firstAndSecondLetterWordTwo = wordTwo.substr(0, 2);
  const firstLetterWordOne = wordOne.charAt(0);
  const secondLetterWordOne = wordOne.charAt(1);
  const firstLetterWordTwo = wordTwo.charAt(0);
  const secondLetterWordTwo = wordTwo.charAt(1);
  const firstLetterWordOneIsVowel = isVowel(firstLetterWordOne);
  const secondLetterWordOneIsVowel = isVowel(secondLetterWordOne);
  const firstLetterWordTwoIsVowel = isVowel(firstLetterWordTwo);
  const secondLetterWordTwoIsVowel = isVowel(secondLetterWordTwo);
  const ogBeginningOfWordOne =
    firstLetterWordOneIsVowel === secondLetterWordOneIsVowel
      ? firstAndSecondLetterWordOne
      : firstLetterWordOne;
  const ogBeginningOfWordTwo =
    firstLetterWordTwoIsVowel === secondLetterWordTwoIsVowel
      ? firstAndSecondLetterWordTwo
      : firstLetterWordTwo;
  if (firstLetterWordOneIsVowel === firstLetterWordTwoIsVowel) {
    newWordOne =
      ogBeginningOfWordTwo + newWordOne.substr(ogBeginningOfWordOne.length);
    newWordTwo =
      ogBeginningOfWordOne + newWordTwo.substr(ogBeginningOfWordTwo.length);
  } else if (firstLetterWordOneIsVowel) {
    newWordOne = ogBeginningOfWordTwo + newWordOne;
    newWordTwo = newWordTwo.substr(ogBeginningOfWordTwo.length);
  } else if (firstLetterWordTwoIsVowel) {
    newWordTwo = ogBeginningOfWordOne + newWordTwo;
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
