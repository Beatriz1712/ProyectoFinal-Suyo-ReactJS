
const ItemDetail = ({ item }) => {

  return (
    <div className='container'>
      <div className='producto-detalle'>
        <img src={item.image} alt={item.titulo} />
        <div>
          <h3 className='titulo'>{item.titulo}</h3>
          <p className='precio'>${item.precio}</p>
          <p className='decripcion'>{item.description}</p>
          <p className='categoria'> Categoria:{item.category}</p>
          
        </div>
      </div>
    </div>
  )
}

export default ItemDetail
