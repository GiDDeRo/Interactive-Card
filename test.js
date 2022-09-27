const container1 = document.getElementById('container1');
const container2 = document.getElementById('container2'); 
const submit = document.getElementById('submit');
const btn = document.querySelectorAll('.btn');
const text = document.getElementById('text');
let span = document.querySelector('span');

submit.addEventListener('click', (ev) => {
    container1.style.display = 'none';
    container2.style.display = 'flex';
});

btn.forEach((rate) => {
    rate.addEventListener('click', () => {
        span.innerText = rate.innerText
    });
});