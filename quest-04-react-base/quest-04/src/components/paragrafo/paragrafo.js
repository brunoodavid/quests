import React from 'react'
import './paragrafo.css'
const Paragrafo = (props) =>{
    return (
        <p 
        className='paragrafo' style={{color: props.color, textTransform: props.maiusculo}}>{props.texto}</p>
    )
}



export default Paragrafo