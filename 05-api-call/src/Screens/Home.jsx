import axios from 'axios'
import React, { useEffect, useState } from 'react'

const Home = () => {

  const [product, setProduct] = useState()

useEffect(()=>{

  const data = axios("")
  .than((res)=>{
    console.log(res);
    
  }).chat((err)=>{
    console.log(err);
    
  })
},[])
  return (
    <div>Home ihugfdftyguhijoipouyitrytrsaesrdtfyguiuoip;uohgfjhdgcjhkjkj</div>
  )
}

export default Home