import React, { useEffect, useState } from "react";
import Shops from "../Shops/Shops";
import { addToDb, getStoredCart } from "../../utilities/fakedb";
import "./Shop.css";
import OrderSummary from "../OrderSummary/OrderSummary";

const Shop = () => {
  const [item, setItem] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setItem(data));
  }, []);
  //get local storage data
  useEffect(() => {
    const storedCart = getStoredCart();
    const savedCart=[];
    // console.log(storedCart)
    for (const id in storedCart) {
      const addedProduct = item.find(product=>product.id===id);
      if(addedProduct){
        const quantity=storedCart[id];
        addedProduct.quantity=quantity;
        savedCart.push(addedProduct);
      }
      setCart(savedCart)
    }
  }, [item]);
  const AddToCart = (product) => {
    // console.log(product);
    let newCart=[];
    const exists=cart.find(products=>products.id===product.id);
    if(!exists){
      product.quantity=1;
      newCart = [...cart, product];
    }
    else{
      const rest=cart.filter(products=>products.id!==product.id);
      exists.quantity=exists.quantity+1;
      newCart=[...rest,exists]
    }
     
    setCart(newCart);
    // eslint-disable-next-line no-unused-expressions
    addToDb(product.id);
  };
  return (
    <div className="shop-container">
      <div className="product">
        {item.map((product) => (
          <Shops
            key={product.id}
            product={product}
            AddToCart={AddToCart}
          ></Shops>
        ))}
      </div>
      <div className="summary">
        <OrderSummary cart={cart} />
      </div>
    </div>
  );
};

export default Shop;
