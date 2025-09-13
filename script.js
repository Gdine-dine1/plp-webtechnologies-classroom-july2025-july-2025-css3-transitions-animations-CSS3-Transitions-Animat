// =============================
// Part 2: JavaScript Functions — Scope, Parameters & Return Values
// =============================

// Function with parameters and return valueunction addNumbers(a, b) {
  return a + b;
}

// Function to show sum in the DOM
function showSum() {
  const result = addNumbers(7, 5);
  document.getElementById('sum-result').textContent = `7 + 5 = ${result}`;
}

// Demonstrate local vs global scope
let globalVar = 'I am global!';
function scopeDemo() {
  let localVar = 'I am local!';
  document.getElementById('scope-result').textContent = `${globalVar} / ${localVar}`;
}

// =============================
// Part 3: Combining CSS Animations with JavaScript
// =============================

// Animate box on button click
const animateBoxBtn = document.getElementById('animate-box-btn');
const jsBox = document.getElementById('js-animated-box');
animateBoxBtn.addEventListener('click', function() {
  jsBox.classList.toggle('animated');
});

// Card flip animation on button click
const flipCardBtn = document.getElementById('flip-card-btn');
const flipCard = document.getElementById('flip-card');
flipCardBtn.addEventListener('click', function() {
  flipCard.classList.toggle('flipped');
});

// =============================
// (Optional) Utility function for reusability
// =============================
function toggleClass(element, className) {
  element.classList.toggle(className);
}
// Example usage: toggleClass(jsBox, 'animated');
