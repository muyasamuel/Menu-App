import React from 'react'
import classes from './MenuList.module.css'

function MenuList({menuItems}) {

    
  return (
    <div  className={classes.wrapper}>
        {menuItems.map((menuItem) => {
            const { id,price, name, img } = menuItem;
            return (
                
               <article key={id} >
                    <img src={img} alt=' meal ' className={classes.image}/>
                    <h1>{name}</h1>
                    <p>{price}</p>

                </article>
              
            )



                
                
        
        })}
        
     
        
    </div>
  )
}

export default MenuList