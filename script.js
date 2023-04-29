/* eslint-disable no-unused-vars */
/* eslint-disable no-undef */
/* eslint-disable no-alert */
/* eslint-disable no-restricted-globals */
/* eslint-disable no-unused-expressions */
function scrollToFirstSection() {
  const sections = document.querySelectorAll('.product-container');
  const currentSection = document.querySelector('.product-container:target') || sections[0];
  const nextSection = currentSection.nextElementSibling || sections[0];
  nextSection.scrollIntoView({ behavior: 'smooth' });
}

function scrollToNextSection() {
  const sections = document.querySelectorAll('.product-container');
  const currentSection = [...sections].find(section => section.classList.contains('active')) || sections[0];
  const nextSection = currentSection.nextElementSibling || sections[0];
  currentSection.classList.remove('active');
  nextSection.classList.add('active');
  nextSection.scrollIntoView({ behavior: 'smooth' });
}
function redirectToNewTab(url) {
  var win = window.open(url, '_blank');
  win.focus();
}


function readAloud() {
  // Check if the SpeechSynthesis API is supported by the browser
  if ('speechSynthesis' in window) {
    // Create a new SpeechSynthesisUtterance object
    var utterance = new SpeechSynthesisUtterance();
    // Set the text to be read
    utterance.text = document.body.innerText;
    // Set the language to use for speech synthesis (optional)
    utterance.lang = 'en-US';
    // Call the SpeechSynthesis API to start speaking the text
    speechSynthesis.speak(utterance);
  } else {
    // SpeechSynthesis API is not supported by the browser
    alert('Sorry, your browser does not support the SpeechSynthesis API.');
  }
}

function readAloudExplicit() {
  if ('speechSynthesis' in window) {
    var utterance = new SpeechSynthesisUtterance();
    // Get the text content of the div element with id="product-container"
    utterance.text = document.getElementById('product-container').innerText;
    utterance.lang = 'en-US';
    speechSynthesis.speak(utterance);
  } else {
    alert('Sorry, your browser does not support the SpeechSynthesis API.');
  }
}
function sayHello() {
  alert('Hello, World! \nWelcome to Codacon.net!');
}
