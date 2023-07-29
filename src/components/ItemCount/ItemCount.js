// eslint-disable-next-line
import React, { useState } from 'react';

const ItemCount  = ({cantidad, handlerRestar, handlerSumar,handleAgregar })=> {
  
  
   
  return (
    <div className='item-count-container'>
        <div className='item-count'>
          <button className="Button" onClick={handlerRestar}> - </button>
          <p className='Number'>{cantidad}</p>
          <button className="Button" onClick={handlerSumar}> + </button>
        </div>
        <div>
            <button className='agregar-al-carrito' onClick={handleAgregar} >
             Agregar al carrito
            </button>
        </div>
    </div>
  )
 
}

export default ItemCount
/*
const [quantity,setQuantity]=useState (initial) 

const increment =()=> {
 if(quantity<stock){
   setQuantity(quantity + 1)
 }
}

const decrement = () => {
 if(quantity >1) {
   setQuantity(quantity - 1)
 }
}
*/