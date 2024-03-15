const inputNumber = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn")
const output = document.getElementById("output");

const romanLetters = [
  { value: 1000, letter: 'M'  },
  { value: 900,  letter: 'CM' },
  { value: 500,  letter: 'D'  },
  { value: 400,  letter: 'CD' },
  { value: 100,  letter: 'C'  },
  { value: 90,   letter: 'XC' },
  { value: 50,   letter: 'L'  },
  { value: 40,   letter: 'XL' },
  { value: 10,   letter: 'X'  },
  { value: 9,    letter: 'IX' },
  { value: 5,    letter: 'V'  },
  { value: 4,    letter: 'IV' },
  { value: 1,    letter: 'I'  },
]


const checkUserInput = () => {
  hidePreviousOutput();
  const inputInt = parseInt(inputNumber.value) 
  if (!inputNumber.value || isNaN(inputInt)) {
    notifyInvalidInput("invalidNumber");
    
  }else if (inputInt >= 4000) {
    notifyInvalidInput("bigNumber")
  } else if(inputInt < 1){
    notifyInvalidInput("nonPositiveNumber")
  } else {
    output.innerText = ArabicToRoman(inputInt , 0);
  }
  output.classList.toggle("hidden")
}

const hidePreviousOutput = () => {
  output.classList.contains("hidden") || output.classList.toggle("hidden");
  output.classList.contains("error") && output.classList.toggle("error");
}

const notifyInvalidInput = (reason) => {
  switch (reason) {
    case 'invalidNumber':
      output.innerText = 'Please enter a valid number';
      break;
    case 'bigNumber':
      output.innerText = 'Please enter a number less than or equal to 3999';
      break;
    case 'nonPositiveNumber':
      output.innerText = 'Please enter a number greater than or equal to 1';
      break;
  }
  output.classList.toggle("error");
}

const ArabicToRoman = (input , LetterIndex) => {
  
  if (input === 0) {
    return "";
  }
  const romanLetter = romanLetters[LetterIndex]
    console.log(`remiander: ${input} , letter: ${romanLetter.letter} `)
    if (input >= romanLetter.value) {
      return romanLetter.letter + ArabicToRoman(input - romanLetter.value, LetterIndex);
    } else if (LetterIndex < romanLetters.length) {
      return ArabicToRoman(input, LetterIndex + 1);
    }
} 


inputNumber.addEventListener("keydown", (e) => {
  if (e.key === 'Enter') {
    e.preventDefault()
    checkUserInput();
  }
});

convertBtn.addEventListener('click', checkUserInput);