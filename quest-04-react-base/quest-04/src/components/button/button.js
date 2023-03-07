import React from 'react'

const pegarLabelEMostrarNaTela = (label) => {
    alert(`A label desse botão é ${label}`)
}

const Button = (props) => {
    return(
        <button onClick={ ()=> pegarLabelEMostrarNaTela(props.label)}>{props.label}</button>
    )
}

export default Button