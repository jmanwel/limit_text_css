const btn1 = document.querySelector("#a1");
const btn2 = document.querySelector("#a2");
const btn3 = document.querySelector("#a3");

btn1.addEventListener('click', (e) => {
    const p1 = document.querySelector("#p1");
    p1.classList.toggle('cutoff-text-checked');
    e.preventDefault();
  });

btn2.addEventListener('click', (e) => {
    const p2 = document.querySelector("#p2");
    p2.classList.toggle('cutoff-text-checked');
    e.preventDefault();
  });

btn3.addEventListener('click', (e) => {
    const p3 = document.querySelector("#p3");
    p3.classList.toggle('cutoff-text-checked');
    e.preventDefault();
  });

