// Write all the code here
import { useParams } from "react-router-dom";
import {fullOrderData} from "./fullOrderData";



const OrderDetails = () => {

  const {id}  = useParams();


  const selectedOrder = fullOrderData.find(order => order.orderId === id)
  

  console.log(Object.values(selectedOrder.data.orderedItems).map(item => item.name));

  return (
    <>
      <div className="orderDetails">
        <main>
          {(selectedOrder) && (
            <>
              <h1> Order Details </h1>
              <div>
                <h1>shipping</h1>
                <p>Address {selectedOrder.data.shipping.address}</p>
              </div>
              <div>
                <h1>contact</h1>
                <p>Name {selectedOrder.data.contact.name}</p>
                <p>Phone {selectedOrder.data.contact.phone}</p>
              </div>
              <div>
                <h1>status</h1>
                <p>Order Status {selectedOrder.data.status.status}</p>
                <p>Placed at {selectedOrder.data.status.placedDate}</p>
                <p>Delivered at {selectedOrder.data.status.deliveredDate}</p>
              </div>
              <div>
                <h1>payment</h1>
                <p>Payment Method {selectedOrder.data.payment.paymentMethod}</p>
                <p>Payment Reference{selectedOrder.data.payment.paymentReference}</p>
                <p>Paid at {selectedOrder.data.payment.paymentDate}</p>
              </div>
              <div>
                <h1>amount</h1>
                <p>Items Total {selectedOrder.data.amount.itemQty}</p>
                <p>Shipping Charges {selectedOrder.data.amount.shippingFee}</p>
                <p>Tax {selectedOrder.data.amount.tax}</p>
                <p>Total Amount {selectedOrder.data.amount.amount}</p>
              </div>
            </>
          )}

          <article>
            <h1>ordered items</h1>
            {Object.values(selectedOrder.data.orderedItems).map((item) => (
              <>
                <div>
                  <h4>{item.name} </h4>
                  <h4>
                    {item.quantity} x {item.price}
                  </h4>
                </div>
              </>
            ))}
            <div>
              <h4>Sub Total</h4>
              <h4>{selectedOrder.data.amount.subTotal}</h4>
            </div>
          </article>
        </main>
      </div>
    </>
  );
};

export default OrderDetails;
