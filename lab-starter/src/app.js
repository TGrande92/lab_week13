const divselect = document.querySelectorAll('.original-container div')
const copyto = document.querySelector('.copy-container')

divselect.forEach(element => element.addEventListener('click', (evt) => {
    let copyselect  = evt.target.parentElement.outerHTML;
    copyto.insertAdjacentHTML("beforeend", copyselect);
}))



