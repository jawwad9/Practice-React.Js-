import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card';


const SingliPage = () => {

      const params = useParams();

      const [data, setData] = useState(null)

      useEffect(()=>{

         axios.get(`https://fakestoreapi.com/products/${params.id}`)
        .then((res)=>{
          console.log(res);
          setData(res.data)
        }).catch((err)=>{
          console.log(err);
        })
      },[])

  return (
    <>
      <div>SingliPage{params.id}</div>

      {data ?   <Card 
      src={data.image}
      title={data.title}
      price={data.price}
      showBtn = {false}/>  
      
      : <h1>Loding...</h1>}
    </>
  )
}

export default SingliPage