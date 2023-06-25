import React from 'react';
import './OrderSummary.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight, faDeleteLeft } from '@fortawesome/free-solid-svg-icons';
const OrderSummary = ({cart}) => {
    let total=0;
    let shipping=0;
  let quantity=0;
    for(const product of cart){
      quantity=quantity+product.quantity;
        total=total+product.price*product.quantity;
        shipping=shipping+product.shipping;
    }
    const tax=(total*0.1).toFixed(2);
    let grandTotal=total+shipping+parseFloat(tax);
    return (
        <div className='cart'>
           <div>
           <h1>Order Summary</h1>
            {/* <p>Selected Item:{cart.length}</p> */}
            <p>Selected Item:{quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Total Shipping Charge:${shipping}</p>
            <p>Tax:${tax}</p>
            <h3>Grand Total:${grandTotal.toFixed(2)}</h3>
           </div>
           <div>
            <button className="clearBtn">
              Clear Cart
              <FontAwesomeIcon icon={faDeleteLeft}></FontAwesomeIcon>
            </button>
            <button className="reviewBtn">
              Review Order
              <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
            </button>
           </div>
        </div>
    );
};

export default OrderSummary;