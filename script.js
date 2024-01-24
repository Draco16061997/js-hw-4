
function qs(a){
    return document.querySelector(a)
}

let form = document.querySelector("conteiner")
let name1 = qs('#name');
let surname = qs('#surname');
let email = qs('#email');
let pasword1 = qs('#password1');
let pasword2 = qs('#password2');
let buttonSubmit = qs('#submit')




function submit(){
    console.log(name1.querySelector('input').value,surname.querySelector('input').value,email.querySelector('input').value,pasword1.querySelector('input').value,pasword2.querySelector('input').value)
}

buttonSubmit.addEventListener("click", submit )