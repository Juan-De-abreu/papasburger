
const CardFood = ({items}) => {
  const direccion=`/src/assets/img/${items.id}.jpg`;
  return (
    <div className="col-xl-3 col-md-4 col-sm-6 mb-3 p-3 ">
      <div className="card h-100 bordercard">
        <div className="card-header bg-danger p-1 bordercard ">
            <img
            src={direccion}
            alt={items.nombre}
            className="img-fluid tamaborimg "/>
        </div>
        <div className="card-body bg-danger bordercard">
          <h1 className="text-center BorderTextblack">{items.nombre}</h1>
          <h2 className="text-center BorderTextblack">Precio: $ {items.precio}</h2>
        </div>
        <div className="card-footer text-center bg-danger bordercard">
            <div className="btn btn-light btn-lg px-5 text-bg-warning bordercard"><h2 className="m-auto">Ingredientes</h2></div>
        </div>
      </div>
    </div>
  )
}

export default CardFood