(function() {
    // Avoid polluting global scope
    const myUtils = {
        log: (msg) => console.log(`[MyUtils] ${msg}`),
        add: (a, b) => a + b,
        capitalize: (str) => str.charAt(0).toUpperCase() + str.slice(1),
        createButton
    };

    // Attach to window so other scripts can access it
    window.myUtils = myUtils;
  
function createButton(id,text, selectorBefore, cssClass, eventFunction){
const button = document.createElement('button');
button.id = id;
button.textContent = text;
button.className= cssClass

// Append the button directly after the ul element
const target = document.querySelector(selectorBefore);
target.insertAdjacentElement('beforebegin', button);
  
sortButton.addEventListener('click', eventFunction);
})();
