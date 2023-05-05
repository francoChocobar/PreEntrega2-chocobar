import { useState, useEffect } from "react";
import ItemList from "./ItemList";
import products from "../../productsMock";

import { useParams } from "react-router-dom";
import { PropagateLoader } from "react-spinners";

const ItemListContainer = () => {
  const [items, setItems] = useState([]);

  const { categoryName } = useParams();

  useEffect(() => {
    const productsFiltered = products.filter(
      (prod) => prod.category === categoryName
    );

    const tarea = new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(categoryName ? productsFiltered : products);
      }, 1000);
    });

    tarea.then((res) => setItems(res)).catch((error) => console.log(error));
  }, [categoryName]);

  return (
    <div>
      {items.length === 0 ? (
        <div style={{ display: "flex", justifyContent: "center" }}>
          <PropagateLoader color="blue" size={40} />
        </div>
      ) : (
        <ItemList items={items} />
      )}

      <h1 style={{ color: items.length > 0 && "blue" }}>Cargando</h1>
    </div>
  );
};

export default ItemListContainer;
