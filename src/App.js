import './App.css';
import Cardlist from './Cardlist';
import Search from './Search';
import productsData from './products.json'
import './card.css'

function App() {
  return ( <>
  <Search/>
  <div className='card'>
  <Cardlist products={productsData}/>
  </div>
  </>
  )
}

export default App;
