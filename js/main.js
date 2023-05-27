const digitizPara = document.getElementById("digitizing-para")
const digitizeList = document.getElementById("digitize-li")
const vectorPara = document.getElementById("vector-para")
const patchesPara = document.getElementById("patches-para")



const digitizing = () => {
    digitizPara.style.display = "block";
    vectorPara.style.display = "none";
    console.log("digitizing is Fired")
    patchesPara.style.display = "none";

}
const vector = () => {

    digitizPara.style.display = "none";
    vectorPara.style.display = "block";
    patchesPara.style.display = "none";

}
const patches = () => {

    digitizPara.style.display = "none";
    vectorPara.style.display = "none";
    patchesPara.style.display = "block";

}
let buttons = document.querySelectorAll('li');
let targetButtons = Array.from(buttons).slice(4, 7);
targetButtons.forEach(button => {
    button.addEventListener('click', function () {
        targetButtons.forEach(btn => btn.classList.remove('activated'));
        this.classList.add('activated');
    });
});
