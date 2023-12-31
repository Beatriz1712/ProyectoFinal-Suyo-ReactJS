import React from 'react'
import { useContext } from 'react';
import { CartContext }from './context/CartContext'
const Carrito = () => {

    const {carrito, precioTotal, vaciarCarrito } = useContext(CartContext);
    const handleVaciar = ()=>{
        vaciarCarrito();
    }
  return (
    <div className='container'>
       <h1>Carrito</h1> 
       {
        carrito.map((prod) => (
            <div key={prod.id}>
                <br/>
                <h2>{prod.titulo}</h2>
                <p>Precio unit: ${prod.precio}</p>
                <p>Precio total:${prod.precio * prod.cantidad}</p>
                <p>cantidad : {prod.cantidad}</p>
                <br/>
            </div>
        ))
       }
       {
            carrito.length >0 ?
            <>
                <h2>PRECIO TOTAL: ${precioTotal()}</h2>
                <button onClick={handleVaciar}>Vaciar carrito</button>
                
            </>:
            <h2>El carrito está vacio ☹</h2>
       }
    </div>
  )
}

export default Carrito