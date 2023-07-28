import ItemList from "../ItemList/ItemList";
import { pedirProductos } from "../pedirProductos";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const ItemListContainer = () => {

  const [productos, setProductos] = useState([]);
  const { category } = useParams()

  useEffect(() => {
    // SI LA CATEGORÍA EXISTE 👇 SE EJECUTA LA PROMESA HACIENDO EL FILTRO PARA SETEAR LO QUE LLEGA DEL FILTRADO
    // AL ESTADO "PRODUCTOS"
    category ?
      pedirProductos()
        .then((resp) => {
          setProductos(resp.filter(prod => prod.category === category));
        })
        .catch(error => {
          console.error(error);
        })
      // SI NO HAY CATEGORÍA 👇 SE RENDERIZAN TODOS LOS PRODUCTOS, 👈 ESTO SERVIRÍA PARA CUANDO SE HACE CLIC EN 
      // "TODOS LOS PRODUCTOS" 
      :
      pedirProductos()
        .then((resp) => {
          setProductos(resp);
        })
        .catch(error => {
          console.error(error);
        })
  }, [category])


  return (
    <div className="itemListContainer">
      <h2 className='main-title'>Productos</h2>
      <ItemList productos={productos} />
    </div>
  )

};
export default ItemListContainer;