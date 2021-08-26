
let countInput;
let totalDiv;
let decrementButton;

const PRICE = 488.99;

document.addEventListener('DOMContentLoaded', function(event) { 
    countInput = document.getElementById('count');
    totalDiv = document.getElementById('total');
    decrementButton = document.getElementById('decr');

    calculateTotal();
});

const increment = () => {
    countInput.value++;
    if (decrementButton.disabled) {
        decrementButton.disabled = false;
    }

    calculateTotal();
}

const decrement = () => {
    countInput.value--;
    if (Number(countInput.value) === 0) {
        decrementButton.disabled = true;
    }

    calculateTotal();
}

const calculateTotal = () => {
    totalDiv.innerText = `${PRICE * countInput.value}`;
}


document.getElementById("button1").style.backgroundColor ="#E2E6E9";
document.getElementById("button2").style.backgroundColor ="#E2E6E9";
document.getElementById("button1").onclick = function(){
    this.style.backgroundColor = "#F05359";
    document.getElementById("button2").style.backgroundColor ="#E2E6E9";

}
document.getElementById("button2").onclick = function(){
    this.style.backgroundColor ="#F05359";
    document.getElementById("button1").style.backgroundColor ="#E2E6E9";

};
