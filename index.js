const characters = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
  "a",
  "b",
  "c",
  "d",
  "e",
  "f",
  "g",
  "h",
  "i",
  "j",
  "k",
  "l",
  "m",
  "n",
  "o",
  "p",
  "q",
  "r",
  "s",
  "t",
  "u",
  "v",
  "w",
  "x",
  "y",
  "z",
  "0",
  "1",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "~",
  "`",
  "!",
  "@",
  "#",
  "$",
  "%",
  "^",
  "&",
  "*",
  "(",
  ")",
  "_",
  "-",
  "+",
  "=",
  "{",
  "[",
  "}",
  "]",
  ",",
  "|",
  ":",
  ";",
  "<",
  ">",
  ".",
  "?",
  "/",
];

const passwordsEL = document.querySelectorAll(".password");
const lengthEl = document.querySelector("#length");
const numberEl = document.querySelector("#numbers");
const symbolEl = document.querySelector("#symbols");

function generatePassword() {
  let passwordLength = lengthEl.value;
  let firstPassword = createPassword(passwordLength);
  let secondPassword = createPassword(passwordLength);
  let thirdPassword = createPassword(passwordLength);
  let fourthPassword = createPassword(passwordLength);

  passwordsEL[0].textContent = firstPassword;
  passwordsEL[1].textContent = secondPassword;
  passwordsEL[2].textContent = thirdPassword;
  passwordsEL[3].textContent = fourthPassword;
}

function createPassword(len) {
  let password = "";

  for (let i = 0; i < len; i++) {
    let character = " ";
    if (numberEl.checked && symbolEl.checked) {
      let randomNumber = Math.floor(Math.random() * characters.length);
      character = characters[randomNumber];
    } else if (numberEl.checked) {
      let randomNumber = Math.floor(Math.random() * 52 + 10);
      character = characters[randomNumber];
    } else if (symbolEl.checked) {
      let arr = characters.slice(0, 52);
      arr = arr.concat(characters.slice(52 + 10));
      let randomNumber = Math.floor(Math.random() * arr.length);
      character = arr[randomNumber];
    } else {
      let randomNumber = Math.floor(Math.random() * 52);
      character = characters[randomNumber];
    }
    password += character;
  }

  return password;
}
