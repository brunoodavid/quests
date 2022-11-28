const inputs = document.querySelectorAll(".inputs")
const spans = document.querySelectorAll(".campo-obrigatorio")
const btnEnviar = document.querySelector(".btn-enviar");

console.log(spans)
console.log(inputs)

btnEnviar.addEventListener("click", function(){
    inputs.forEach(function(item){
        const itemComCampoVazio = item.value == "";
        if(itemComCampoVazio){
            item.classList.add("borda-vermelha")
        } else {
            item.classList.add("campo-preenchido")
        }
        spans.forEach(function(item){
            if(itemComCampoVazio){
                item.classList.add("campo-obrigario-com-block")
            } else {
                item.classList.remove("campo-obrigario-com-block")
            }
        })
    })

    
})
