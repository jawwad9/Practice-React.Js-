import React from 'react'



// strat props

const Button = ({name, price, modle}) => {
  return (
    <>
    <h1>{name}</h1>
    <h3>{price}</h3>
    <p>{modle}</p>
    </>
  )
}



// const Button = (props) => {
//   return (
//     <>
//     <h1>{props.name}</h1>
//     <h3>{props.price}</h3>
//     <p>{props.modle}</p>
//     </>
//   )
// }

export default Button