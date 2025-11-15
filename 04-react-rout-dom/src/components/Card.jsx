import React from 'react'

const Card = ({src, title, price,}) => {
  return (
    <div>
        <img src={src} alt="" />
        <h1>{title}</h1>
        <h3>Price: {price}</h3>
        <button>Click</button>
    </div>
  )
}

export default Card