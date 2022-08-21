import React from 'react'

function Categories({filterItems}) {
  return (
    <div>
      <button onClick={() => filterItems('lunch')}> Lunch</button>
    </div>
  )
}

export default Categories