import axios from 'axios';
import React, { useEffect, useState } from 'react';

import { Product } from '../utility/Product';
import { Cartt } from '../utility/Cartt';

export const Cart = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [bill, setBill] = useState<Cartt[]>([]);

  useEffect(() => {
    axios.get('http://localhost:5002/dbcart')
      .then(response => {
        setProducts(response.data);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);

  const removeProduct = (productId: number) => {
    axios.delete(`http://localhost:5002/dbcart/${productId}`)
      .then(() => {
        setProducts(prevProducts => prevProducts?.filter(product => product.id !== productId));
      })
      .catch(error => console.log(error));
  };

  const checkout = () => {
    setBill(products);

    // ... you can perform further actions related to the checkout process
  };

  useEffect(() => {
    if (bill.length > 0) {
      axios.post('http://localhost:5003/bill', bill)
        .then(response => {
          console.log('Product added to bill:', response.data);
        })
        .catch(error => {
          console.error('Error adding product to bill:', error);
        });
    }
  }, [bill]);
  return (
    <div>
    <table className="table table-striped">
    <thead>
       <tr>
           <th>Name</th>
            <th>Price</th>
            <th>Action</th>
        </tr>
   </thead>
   <tbody>
     {products?.map(product => (

      <tr key={product.id}>
         <td>{product.name}</td>
         <td>{product.price}</td>
         <td>
         
          <button onClick={() => removeProduct(product.id)}>Remove</button>
           
         </td>
      </tr>
    ))}
    </tbody> 
    
 </table>
 <h6>
  <button onClick={checkout}> Proceed to checkout</button>
 </h6>
</div>
  )
}