var list = document.getElementById("list");
var add = document.getElementById("addElement");

add.addEventListener('click', function addElement() {
    var element = document.createElement('li');
    var getLi = document.getElementsByTagName('li');
    var countingLi = getLi.length;
    console.log (countingLi);
    list.appendChild(element);
    element.innerHTML = ('Item' + " " + (countingLi + 1));
});
