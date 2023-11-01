import React from "react";

function ProductCard({ props }) {
  return (
    <div className="card">
      <article className="card-body">
        <h5 className="card-title">{props.title}</h5>
        <div className="img-container"><img src={props.image} alt='' /></div>
        <p className="card-text">Descripción: {props.description}</p>
        <h5 className="price">Precio: ${props.price}</h5>
        <p>Rating: {props.rating.rate} Conteo: {props.rating.count}</p>
        <p className={props.category}>Categoría: {props.category}</p>
      </article >
    </div >
  );
}

export default ProductCard;