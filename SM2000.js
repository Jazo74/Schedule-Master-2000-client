let renderHeight = window.innerHeight;
let renderWidth = window.innerWidth;
console.log(renderWidth, renderHeight);
const body = document.querySelector('body');
body.style.height = renderHeight + 'px';
body.style.width = renderWidth + 'px';
const day1 = document.querySelector('.day1');

// creating 1 title + 24 slot in a day
// creating a title for the day
const dayTitleEl = document.createElement("div");
dayTitleEl.className = 'dayTitle';
dayTitleEl.id = 'day1';
const dayTitleText = document.createElement("p");
dayTitleText.innerText = 'Day 1';
dayTitleEl.appendChild(dayTitleText);
day1.appendChild(dayTitleEl);
for (i = 0; i<24; i++) {
    //creating a slot
    const slotEl = document.createElement("div");
    slotEl.className = 'slot';
    slotEl.id = i;
    const slotText = document.createElement("p");
    slotText.innerText = i + ':00 - ';
    slotEl.appendChild(slotText);

    day1.appendChild(slotEl);
}