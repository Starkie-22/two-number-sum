let array = [];
let arrayLength = 0;

const arrayLengthInput = document.getElementById('arrayLength');
const arrayElementInput = document.getElementById('arrayElement');
const enterLengthBtn = document.getElementById('enterLength');
const addElementBtn = document.getElementById('addElement');
const arrayDisplay = document.getElementById('arrayDisplay');
const targetDisplay = document.getElementById('targetDisplay');
const resultDisplay = document.getElementById('resultDisplay');

enterLengthBtn.addEventListener('click', function() {
  arrayLength = parseInt(arrayLengthInput.value);
  if (arrayLength > 0) {
    arrayElementInput.disabled = false;
    addElementBtn.disabled = false;
    arrayLengthInput.disabled = true;
    enterLengthBtn.disabled = true;
  }
});

addElementBtn.addEventListener('click', function() {
  if (array.length < arrayLength) {
    let element = parseInt(arrayElementInput.value);
    array.push(element);
    arrayDisplay.textContent = `Array: [${array.join(', ')}]`;
    arrayElementInput.value = '';

    if (array.length === arrayLength) {
      addElementBtn.disabled = true;
      arrayElementInput.disabled = true;
      calculateTargetAndResult();
    }
  }
});

function calculateTargetAndResult() {
  let index1 = Math.floor(Math.random() * arrayLength);
  let index2;
  do {
    index2 = Math.floor(Math.random() * arrayLength);
  } while (index2 === index1);

  let target = array[index1] + array[index2];
  targetDisplay.textContent = `Target: ${target}`;

  let result = findTwoNumbers(array, target);
  if (result) {
    resultDisplay.textContent = `The numbers ${array[result[0]]} and ${array[result[1]]} at indices ${result[0]} and ${result[1]} add up to the target.`;
  } else {
    resultDisplay.textContent = "No two numbers add up to the target.";
  }
}

function findTwoNumbers(array, target) {
  for (let i = 0; i < array.length; i++) {
    for (let j = i + 1; j < array.length; j++) {
      if (array[i] + array[j] === target) {
        return [i, j];
      }
    }
  }
  return null;
}