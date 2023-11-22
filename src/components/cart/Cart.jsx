import React, { useState } from "react";
import { Link } from "react-router-dom";
import burger1 from "../../assets/burger1.png";
import burger2 from "../../assets/burger2.png";
// import burger3 here
import burger3 from "../../assets/burger3.png";
import IdGenerator from "../../utilities/IdGenerator";

const CartItem = ({ value, title, img, increment, decrement}) => (
  <div className="cartItem">
    <div>
      <h4>{title}</h4>
      <img src={img} alt="Item" />
    </div>

    <div>
      <button onClick={decrement}>-</button>
      <input type="number" readOnly value={value} />
      <button onClick={increment}>+</button>
    </div>
  </div>
);

const Cart = () => {


  const increment = () => {
    
  }
  const decrement = () => {

  }

  return (
    <section className="cart">
      <main>
        <article>
        <CartItem
          title="Cheese Burger"
          img={burger1}
          value={1}
          increment={() => increment(1)}
          decrement={() => decrement(1)}
          // Add the function for decrementing the order by 1
        />
        <CartItem
          title="Veg Cheese Burger"
          img={burger2}
          value={1}
          increment={() => increment(2)}
          decrement={() => decrement(4)}
          // Add the function for decrementing the order by 2
        />

        {/* Fill up the code for Cheese Burger similarly */}
        <CartItem
          title="CheeseBurger with French Fries "
          img={burger3}
          value={1}
          increment={increment}
          // Add the function for decrementing the order by 2
        />
          <div>
            <h4>Sub Total</h4>
            <p>₹{2000}</p>
          </div>
          <div>
            <h4>Tax</h4>
            <p>₹{2000 * 0.18}</p>
          </div>
          <div>
            <h4>Shipping Charges</h4>
            <p>₹{200}</p>
          </div>{" "}
          <div>
            <h4>Total</h4>
            <p>₹0</p>
          </div>
          <Link to="/shipping">Checkout</Link>
        </article>
      </main>
    </section>
  );
};

export default Cart;
