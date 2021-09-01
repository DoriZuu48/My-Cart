
function decrement(e) {
  const btn = e.target.parentNode.parentElement.querySelector(
    'button[data-action="decrement"]'
  );
  const target = btn.nextElementSibling;
  let value = Number(target.value);
  value--;
  target.value = value;
}

function increment(e) {
  const btn = e.target.parentNode.parentElement.querySelector(
    'button[data-action="decrement"]'
  );
  const target = btn.nextElementSibling;
  let value = Number(target.value);
  value++;
  target.value = value;
}

const decrementButtons = document.querySelectorAll(
  `button[data-action="decrement"]`
);

const incrementButtons = document.querySelectorAll(
  `button[data-action="increment"]`
);

decrementButtons.forEach(btn => {
  btn.addEventListener("click", decrement);
});

incrementButtons.forEach(btn => {
  btn.addEventListener("click", increment);
});





// document.getElementById("button1").style.backgroundColor ="#edf1f4";
// document.getElementById("button2").style.backgroundColor ="#edf1f4";

// document.getElementById("button1").onclick = function(){
//   this.style.backgroundColor = "#fb3d46";
//   document.getElementById("button2").style.backgroundColor ="#edf1f4";


// }
// document.getElementById("button2").onclick = function(){
//   this.style.backgroundColor ="#fb3d46";
//   document.getElementById("button1").style.backgroundColor ="#edf1f4";

// };