const inputs = document.querySelectorAll("input")
const textArea = document.querySelectorAll("textarea")
const btnEnviar = document.querySelector(".btn-enviar");



btnEnviar.addEventListener("click", function(){
    inputs.forEach(function(item){
        if(item.value == ""){
            item.classList.add("borda-vermelha")
        } else {
            item.classList.add("campo-preenchido")
        }
    })

    textArea.forEach(function(item){
        console.log(item)
        if(item.value == ""){
            item.classList.add("borda-vermelha")
        } else {
            item.classList.add("campo-preenchido")
        }
    })
})

btnEnviar.addEventListener("click", function(){

})