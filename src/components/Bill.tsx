import axios from 'axios';
import React,{useState,useEffect} from 'react'
import { Cartt } from '../utility/Cartt';

import { Product } from '../utility/Product';
interface Bill {
  bill: Cartt[][];
}

function Bill() {
  const [products, setProducts] = useState<Cartt[][]>([]);
  useEffect(() => {
    axios.get('http://localhost:5003/bill')
      .then(response => {products?.map(product=>(setProducts(response.data)))
        setProducts([response.data]);
      })
      .catch(error => {
        console.error('Error fetching products:', error);
      });
  }, []);
  const [mybill,setTotalBill]=useState(0);
  console.log(products)
//   useEffect(() => {

//    // Calculate the total bill whenever the products in the cart change

//    const calculatedTotal = products.reduce((sum, product) => sum + Number(product.bill[0][0].price),0);
   
//   setTotalBill(calculatedTotal);
//     console.log(calculatedTotal)

//  }, [products]);

  
  
 return (
  <div>
    <h2>Bill</h2>
    {products.map((itemList, index) => (
      <div key={index}>
        <h3>Item List {index + 1}</h3>
        <ul>
          {itemList.map((item, itemIndex) => (
            <li key={itemIndex}>
              Name: {item.name}
              
            </li>
          ))}
        </ul>
      </div>
    ))}
  </div>
);
}

export default Bill