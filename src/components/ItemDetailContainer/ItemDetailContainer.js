import { useState, useEffect } from 'react';
import ItemDetail from '../ItemDetail/ItemDetail';
import { pedirProductoById } from '../pedirProductos';
import { useParams } from 'react-router-dom';

const ItemDetailContainer = () => {

    const [item, setItem] = useState({});
    const {id}= useParams()
    

    useEffect(() => {
      pedirProductoById(id)
      .then(response => {
        setItem(response)
      })
      .catch(error => {
        console.error(error)
      })
    },[id])

  return (
    <div>
        {item && <ItemDetail item={item}/>}
        

    </div>
  )
}

export default ItemDetailContainer