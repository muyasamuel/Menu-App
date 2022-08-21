import React, { useState } from 'react';
import MenuList from './components/MenuList';
import Header from './components/Header';
import Categories from './components/Categories';

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
 const [categories, setCategories] = useState([]);

 const filterItems = (category) => {
  if(category === 'All') {
    setMenuList(menu)
  }
  const newItems = menuList.filter((item) => item.category === category);
  setMenuList(newItems);
 }








  return (
   <section className='section'>
    <Header />
    <Categories filterItems={filterItems} />
    <MenuList menuItems={menuList} />

   </section>
  );
}

export default App;
