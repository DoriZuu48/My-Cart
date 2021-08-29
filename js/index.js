
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
