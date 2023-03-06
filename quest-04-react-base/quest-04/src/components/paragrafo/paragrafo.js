import React from 'react'
import './paragrafo.css'
const Paragrafo = (props, color) =>{
    return (
        <p 
        className='paragrafo' style={{color: color}}>{props.texto}</p>
    )
}



export default Paragrafo