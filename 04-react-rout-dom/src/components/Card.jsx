import React from 'react'
import { useNavigate } from 'react-router-dom'

const Card = ({src, title, price, id, showBtn = true}) => {

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
        {showBtn ? <button onClick={SingliProductPage}>Click</button>  : null}
    </div>
    </>
  )
}

export default Card