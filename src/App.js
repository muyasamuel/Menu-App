import React, { useState } from 'react';

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
    category: 'lunch',
    price: 25.99,
    img: require('./assets/fish.jpg'),
    
  },
  {
    id: '3',
    name: 'hanel',
    category: 'lunch',
    price: 25.99,
    img: require('./assets/hanel.jpg'),
    
  },
  {
    id: '4',
    name: 'hanel',
    category: 'dinner',
    price: 25.99,
    img: require('./assets/bananaChops.jpg'),
    
  },
  {
    id: '5',
    name: 'hanel',
    category: 'dinner',
    price: 25.99,
    img: require('./assets/burger.jpg'),
    
  },
  {
    id: '6',
    name: 'hanel',
    category: 'lunch',
    price: 25.99,
    img: require('./assets/cruncky.jpg'),
    
  },
  {
    id: '7',
    name: 'hanel',
    category: 'breakfast',
    price: 25.99,
    img: require('./assets/cookies.jpg'),
    
  },
  {
    id: '8',
    name: 'hanel',
    category: 'lunch',
    price: 25.99,
    img: require('./assets/yorky.jpg'),
    
  },
  {
    id: '9',
    name: 'hanel',
    category: 'dinner',
    price: 25.99,
    img: require('./assets/salad.jpg'),
    
  },
  {
    id: '10',
    name: 'hanel',
    category: 'breakfast',
    price: 25.99,
    img: require('./assets/toast.jpg'),
    
  }

];

function App() {
 const [menuList, setMenuList]  = useState(menu);
 
  return (
   <section>
    <h1>Menu</h1>

   </section>
  );
}

export default App;
