import React from 'react'

function Categories({ categories , filterItems}) {
  return (
    <div>
      {categories.map((category, index) => <button key={index} onClick={() => filterItems(category)}>{category }</button>)}
     
    </div>
  )
}

export default Categories