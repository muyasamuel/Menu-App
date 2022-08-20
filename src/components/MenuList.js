import React from 'react'

function MenuList({menuItems}) {

    
  return (
    <div>
        {menuItems.map((menuItem) => {
            const { id,price, name } = menuItem;
            return (
                <article key={id}>
                    <h1>{name}</h1>
                    <p>{price}</p>

                </article>
            )
        
        })}
        
     
        
    </div>
  )
}

export default MenuList