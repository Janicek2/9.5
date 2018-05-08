var buttonElement = document.getElementsByClassName('button');

console.log(buttonElement);

var buttonLenght = buttonElement.length

console.log(buttonLenght);

for (i = 0 ; i < buttonLenght ; i++ ) {
    console.log(buttonElement[i].innerText);
}