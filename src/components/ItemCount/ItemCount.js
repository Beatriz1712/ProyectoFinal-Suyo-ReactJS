// eslint-disable-next-line
import React, { useState } from 'react';

const ItemCount  = ({cantidad, handlerRestar,handlerSumar ,handleAgregar,stock})=> {
  

   
  return (
    <div>
        <div className='item-count'>
          <button className="Button" onClick={handlerRestar}> - </button>
          <h4 className='Number'>{cantidad}</h4>
          <button className="Button" onClick={handlerSumar}> + </button>
        </div>
        <div>
            <button className='agregar-al-carrito' onClick={handleAgregar} disable={!stock}>
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