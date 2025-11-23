import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({src, title, price, id}) => {

  const Navigate = useNavigate()

  function SingliProductPage (){
    Navigate(`/SingliPage/${id}`)
  }
  return (
    <> 
    <div>
        <img src={src} alt="" width={200}/>
        <h1>{title}</h1>
        <h3>Price: {price}</h3>
        <button onClick={SingliProductPage}>Click</button>
    </div>
    </>
  )
}

export default Card