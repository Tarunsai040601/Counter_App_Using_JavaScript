// h1 tag
const display = document.createElement("h1");
display.innerText = 0;

// card
const card = document.createElement("div");
card.style.border = "4px solid black";
card.style.height = "150px";
card.style.width = "250px";
card.style.padding = "40px";
card.style.textAlign = "center";

// increment
const increment = document.createElement("button");
increment.innerText = "Increment";
increment.style.padding = "4px";
increment.style.color = "blue";
increment.style.marginRight = "10px"; // gap

// reset
const reset = document.createElement("button");
reset.innerText = "Reset";
reset.style.padding = "4px";
reset.style.color = "blue";
reset.style.marginRight = "10px"; // gap

// decrement
const decrement = document.createElement("button");
decrement.innerText = "Decrement";
decrement.style.padding = "4px";
decrement.style.color = "blue";

// append child
card.appendChild(display);
card.appendChild(increment);
card.appendChild(reset);


let count = 0;
let intervalId = null;

increment.addEventListener("click", () => {
  if (intervalId === null) {
    // start
    intervalId = setInterval(() => {
      count++;
      display.innerText = count;
    }, 1000);
  } else {
    // stop
    clearInterval(intervalId);
    intervalId = null;
  }
});

reset.addEventListener("click", () => {
  clearInterval(intervalId);
  intervalId = null;
  count = 0;
  display.innerText = count;
});

// append body
document.body.appendChild(card);
