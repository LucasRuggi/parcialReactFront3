// El componente Item no tiene componentes hijos.
// ESTADO: Item debe tener un número para almacenar la cantidad de stock, la misma se la defina el padre a la hora de crearlo.
// MÉTODOS: Item debe manejar el click de su boton para restar la cantidad en stock de sí mismo y a su vez poder aumentar el estado de su "abuelo" App.
// PROPS: Item recibe todos los campos que muestra en pantalla: nombre, descripcion, stock y el métodos heredados para su uso.
// Maqueta de Item:
//    h3
//    p
//    h5 > span    (este span debe mostrar la cantidad si es mayor a 0 "agotado" si llega a 0)
//    button       (este boton debe permitir comprar, pero si la cantidad es menor a 0 debe estar deshabilitado y decir "Sin stock")

export default function Item({ unProducto, total, setTotal }) {
  const comprar = () => {
    if (unProducto.stock > 0) {
      unProducto.stock = unProducto.stock - 1;
      setTotal({
        stock: total.stock + 1,
      });
    }
  };
  return (
    <div className="producto">
      <h3>{unProducto.producto.nombre}</h3>
      <div className="imgAjuste">
        <img src={unProducto.producto.img} alt="img" className="imgProducto" />
      </div>
      <p>{unProducto.producto.descripcion}</p>
      <h5>
        {"En stock: "}
        {unProducto.stock === 0 ? <span>Agotado</span> : unProducto.stock}
      </h5>
      <button onClick={comprar} disabled={unProducto.stock === 0}>
        {unProducto.stock === 0 ? "Sin Stock" : "Comprar"}
      </button>
    </div>
  );
}
