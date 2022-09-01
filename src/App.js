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
    name: 'bananaChops',
    category: 'dinner',
    price: 25.99,
    img: require('./assets/bananaChops.jpg'),
    
  },
  {
    id: '5',
    name: 'burger',
    category: 'dinner',
    price: 25.99,
    img: require('./assets/burger.jpg'),
    
  },
  {
    id: '6',
    name: 'cruncky',
    category: 'lunch',
    price: 25.99,
    img: require('./assets/cruncky.jpg'),
    
  },
  {
    id: '7',
    name: 'cookies',
    category: 'breakfast',
    price: 25.99,
    img: require('./assets/cookies.jpg'),
    
  },
  {
    id: '8',
    name: 'yorky',
    category: 'lunch',
    price: 25.99,
    img: require('./assets/yorky.jpg'),
    
  },
  {
    id: '9',
    name: 'salad',
    category: 'dinner',
    price: 25.99,
    img: require('./assets/salad.jpg'),
    
  },
  {
    id: '10',
    name: 'toast',
    category: 'breakfast',
    price: 25.99,
    img: require('./assets/toast.jpg'),
    
  }

];


const allCategories = ['All',...new Set(menu.map((item) => item.category)) ];
console.log(allCategories)



function App() {
 const [menuList, setMenuList]  = useState(menu);
 const [categories, setCategories] = useState(allCategories);

 const filterItems = (category) => {
  if(category === 'All') {
    setMenuList(menu);
    return;
  }
  const newItems = menu.filter((item) => item.category === category);
  setMenuList(newItems);
 }








  return (
   <section className='section'>
    <Header />
    <Categories categories={categories}  filterItems={filterItems} />
    <MenuList menuItems={menuList} />

   </section>
  );
}

export default App;
