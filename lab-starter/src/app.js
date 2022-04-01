const divselect = document.querySelectorAll(".original-container div");
const copyto = document.querySelector(".copy-container");

divselect.forEach((element) =>
  element.addEventListener("click", (evt) => {
    let copyselect = evt.target.parentElement.outerHTML;
    copyto.insertAdjacentHTML("beforeend", copyselect);
  })
);

const clear_but = document.querySelector("button");

clear_but.addEventListener("click", (evt) => {
  copyto.innerHTML = "";
});

const body = document.querySelector('body')
body.style.backgroundColor = '#003B49';
document.querySelector('body').style.color = '#D6FF4E';

clear_but.style.backgroundColor = '#e7e7e7'

