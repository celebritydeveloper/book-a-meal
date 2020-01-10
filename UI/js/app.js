const inputField = document.querySelector('#anyContent');

inputField.oninput = function() {
    console.log(inputField.value); // returns input value on each new input
}

