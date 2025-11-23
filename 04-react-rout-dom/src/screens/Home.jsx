import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Card from '../components/Card';

const Home = () => {
    const {id} = useParams()
    console.log(id);

    const [data, setData] = useState();
    
    useEffect(()=>{
        axios('https://fakestoreapi.com/products')
        .then((res)=>{
            // console.log(res); 
            setData(res.data)
        })
        .catch((err)=>{
            console.log(err);
            
        })
    },[])

    // console.log(data);
    

  return (
    <>
    <div>SingliPage {id}</div>

{data ? data.map((item) => {
  return (<Card 
      key={item.id}
      title={item.title}
      src={item.image}
      price={item.price}
      id={item.id}
      />);
}) : <h1>loading...</h1>}


    {/* <Card title="the school" price="$50"/> */}
    </>
  )
}

export default Home