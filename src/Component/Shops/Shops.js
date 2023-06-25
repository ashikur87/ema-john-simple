import React from "react";
import "./Shops.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
const Shops = ({product,AddToCart}) => {
  const { name, img, seller, price, ratings } = product;
  // const { AddToCart } = props;

  return (
    <div className="carts">
      <img className="image" src={img} alt="" />
      <div className="text">
        <p className="name">{name}</p>
        <p>price:${price}</p>
        <p>Manufacturer:{seller}</p>
        <p>Ratings:{ratings}star</p>
      </div>
      <div className="btn-cart">
        <button onClick={()=>AddToCart(product)} className="btn">
          Add To Cart
          <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Shops;
