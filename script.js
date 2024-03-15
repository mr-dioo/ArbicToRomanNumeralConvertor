const inputNumber = document.getElementById("number");
const convertBtn = document.getElementById("convert-btn")
const output = document.getElementById("output");
const errorBox = document.getElementById("error");

const romanLetters = [
  { value: 1000, letter: 'M'  },
  { value: 900,  letter: 'CM' },
  { value: 500,  letter: 'D'  },
  { value: 400,  letter: 'CD' },
  { value: 100,  letter: 'C'  },
  { value: 90,   letter: 'LC' },
  { value: 50,   letter: 'L'  },
  { value: 49,   letter: 'XL' },
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
    return
  }else if (inputInt >= 4000) {
    notifyInvalidNumber("bigNumber")
    return
  } else if(inputInt < 1){
    notifyInvalidNumber("nonPositiveNumber")
  }
  output.innerHTML = ArabicToRoman(inputInt);
  output.classList.toggle("hidden")
}

const hidePreviousOutput = () => {
  output.classList.contains("hidden") || output.classList.toggle("hidden");
  errorBox.classList.contains("hidden") || errorBox.classList.toggle("hidden");
}

const notifyInvalidNumber = (reason) => {
  switch (reason) {
    case 'invalidNumber':
      errorBox.innerText = 'Please enter a valid number';
      break;
    case 'bigNumber':
      errorBox.innerText = 'Please enter a number less than or equal to 3999';
      break;
    case 'nonPositiveNumber':
      errorBox.innerText = 'Please enter a number greater than or equal to 1';
      break;
  }
  errorBox.classList.toggle("hidden");
}

const ArabicToRoman = (i) => {
  
  if (i === 1) {
    return `I`;
  }
  
  for (l of romanLetters) {
    if (i > l.value) {
      console.log(`remiander: ${i} , letter: ${l.letter} `)
      return l.letter + ArabicToRoman(i - l.value);
      break;
    }
  }
} 


inputNumber.addEventListener("keydown", (e) => {
  if (e.key === 'Enter') {
    e.preventDefault()
    checkUserInput();
  }
});

convertBtn.addEventListener('click', checkUserInput);