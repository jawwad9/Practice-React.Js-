import React from 'react'

const Card = ({src, title, price, id}) => {
  return (
    <> 
    <div>
        <img src={src} alt="" width={200}/>
        <h1>{title}</h1>
        <h3>Price: {price}</h3>
        <button>Click</button>
    </div>
    </>
  )
}

export default Card