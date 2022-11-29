const formControl = document.querySelectorAll(".form-control")
const inputNome = document.getElementById("nome")
const inputEmail = document.getElementById("email")
const inputTelefone = document.getElementById("telefone")
const textArea = document.getElementById("mensagem")
const btnEnviar = document.querySelector(".btn-enviar")


btnEnviar.addEventListener("click", function(){
    if(inputNome.value === ""){
        formControl[0].classList.add("error")
    } else {
        formControl[0].classList.add("success")
    }

    if(inputEmail.value === ""){
        formControl[1].classList.add("error")
    } else {
        formControl[1].classList.add("success")
    }

    if(inputTelefone.value === ""){
        formControl[2].classList.add("error")
    } else {
        formControl[2].classList.add("success")
    }

    if(textArea.value === ""){
        formControl[3].classList.add("error")
    } else {
        formControl[3].classList.add("success")
    }
})
