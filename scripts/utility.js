function hideElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add('hidden')
}
function showElementById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.remove("hidden");
}
function getARandomNumber() {
    const arrayAlphabet = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
    const randomIndex = Math.round(Math.random() * 25);
    const randomAlphabet = arrayAlphabet[randomIndex];
    return randomAlphabet;
    
}
function setBackgroundColorById(elementId) {
    const element = document.getElementById(elementId);
    element.classList.add("bg-orange-500");
}
function removeBackgroundColorById(elementId) {
  const element = document.getElementById(elementId);
  element.classList.remove("bg-orange-500");
}

function getInitialScoreById(elementId) {
    const element = document.getElementById(elementId);
    const elementTextValue = parseInt(element.innerText);
    return elementTextValue;
}
function setNewScoreById(elementId,value) {
    const element = document.getElementById(elementId);
    element.innerText = value;
}

function getElementTextById(elementId) {
    const element = document.getElementById(elementId);
    const text = element.innerText;
    return text;

}
function getElementValueById(elementId) {
    const element = document.getElementById(elementId);
    const text = parseInt(element.innerText);
    return text;

}
