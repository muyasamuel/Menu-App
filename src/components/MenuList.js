import React from 'react'
import classes from './MenuList.module.css'

function MenuList({menuItems}) {

    
  return (
    <div  className={classes.wrapper}>
        {menuItems.map((menuItem) => {
            const { id,price, name, img } = menuItem;
            return (
                
               <article key={id} className={classes.imageDiv} >
                    <img src={img} alt=' meal ' className={classes.image}/>
                    <div className={classes.content}>
                       <h1 className={classes.title}> {name}</h1>
                       <p className={classes.price}> ${price}</p>
                    </div>
                   

                </article>
              
            )



                
                
        
        })}
        
     
        
    </div>
  )
}

export default MenuList