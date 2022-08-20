
import './App.css';

const menu = [
  {
    id: '1',
    name: 'egg',
    category: 'breakfast',
    price: 25.99,
    img: require('./assets/egg.jpg'),

  }, 
  {
    id: '2',
    name: 'fish',
    category: 'breakfast',
    price: 25.99,
    img: require('./assets/fish.jpg'),
    
  },
  {
    id: '3',
    name: 'hanel',
    category: 'breakfast',
    price: 25.99,
    img: require('./assets/hanel.jpg'),
    
  }

];

function App() {
  return (
   <section>
    <h1>Menu</h1>

   </section>
  );
}

export default App;
