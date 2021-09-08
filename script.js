const elSelect = document.querySelector('#select');
const elInput = document.querySelector('#number');
const elInputsecond = document.querySelector('#input');
const elTitle = document.querySelector('#title');

elTitle.textContent = 'Natija'


form.addEventListener('submit', function(e){
    e.preventDefault();

    if(elSelect.value === "+"){
     elTitle.textContent = (Number(elInput.value) + Number(elInputsecond.value));
    }
    if(elSelect.value === "-"){
        elTitle.textContent = (Number(elInput.value) - Number(elInputsecond.value));
       }
       if(elSelect.value === "*"){
        elTitle.textContent = (Number(elInput.value) * Number(elInputsecond.value));
       }
       if(elSelect.value === "/"){
        elTitle.textContent = (Number(elInput.value) / Number(elInputsecond.value));
       }
})