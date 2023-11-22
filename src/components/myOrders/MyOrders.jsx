import { Link } from "react-router-dom";
import { AiOutlineEye } from "react-icons/ai";
import {fullOrderData} from "./fullOrderData";


const MyOrders = () => {
  const arr = [1, 2, 3, 4];
 
  return (
    <section className="tableClass">
      <main>
        <table>
          <thead>
            <tr>
              <th>Order Id</th>
              <th>Status</th>
              <th>Item Qty</th>
              <th>Amount</th>
              <th>Payment Method</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
              {fullOrderData.map(item => (
              <>
                <tr key={item.orderId}>
                  <td>{item.orderId}</td>
                  <td>{item.data.status.status}</td>
                  <td>{item.data.amount.itemQty}</td>
                  <td>{item.data.amount.amount}</td>
                  <td>COD</td>
                  <td><Link to={`/order/${item.orderId}`}><AiOutlineEye /></Link></td>
                </tr>
              </>
              ))}
          </tbody>
        </table>
                
      </main>
    </section>
  );
};

export default MyOrders;
