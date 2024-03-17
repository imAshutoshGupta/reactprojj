import './App.css';
import Cardlist from './Cardlist';
import Search from './Search';
import productsData from './products.json'
import './card.css'
import { useState } from 'react';

function App() {
  const [products, setProducts] = useState(productsData)
  const searchProduct = (productName) => {
    console.log(productName)
    let x = productsData.filter(product=>
      product.title.toLowerCase().includes(productName.toLowerCase()))
    setProducts(x)
  }
  
  return ( <>
  <Search onSearch={searchProduct}/>
  <div className='card'>
  <Cardlist products={products}/>
  </div>
  </>
  )
}
                                        
export default App;
