import { useContext } from "react";
import { CartContext } from "../../context/cart";
import { Link } from "react-router-dom";



export const CartItem = ({ id, value, title, img, increment, decrement }) => (
  <div className="cartItem" key={id}>
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

const Carts = () => {
  const {
    cartItems,
    setCartItems,
    addToCart,
    removeFromCart,
    getCartTotal,
    getSubTotal,
    getItemTotal
  } = useContext(CartContext);
 
  return (
    <section className="cart">
      <main>
        <article>
          {cartItems.map((item, index) => (
            <CartItem
              key={index}
              id={index}
              title={item.title}
              img={item.burgerImage}
              value={item.quantity}
              increment={() => addToCart(item)}
              decrement={() => removeFromCart(item)}
            />
          ))}
          {cartItems.length > 0 ? (
            <>
              <div>
                <h4>Sub Total</h4>
                <p>₹{getSubTotal()}</p>
              </div>
              <div>
                <h4>Amount</h4>
                <p>₹360</p>
              </div>
              <div>
                <h4>Shipping Charges</h4>
                <p>₹200</p>
              </div>
              <div>
                <h4>Total</h4>
                <p>₹{getCartTotal()}</p>
              </div>
          <Link to="/shipping"><button className="resetCartBtn" onClick={getItemTotal(0)}>Checkout</button></Link> 
          </>) 
          : (
            <h1>Your cart is empty</h1>
          )}
        </article>
      </main>
    </section>
  );
};

export default Carts;
