import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const SingliPage = () => {
    const {id} = useParams()
    console.log(id);

    const [data, setData] = useState();
    
    useEffect(()=>{
        axios.get('https://fakestoreapi.com/users')
        .then((res)=>{
            console.log(res); 
            setData(res)
        })
        .catch((err)=>{
            console.log(err);
            console.log(err);
            console.log(err);
            console.log(err);
            console.log(err);
            
        })
    },[])

  return (
    <>
    <div>SingliPage {id}</div>
    

    </>
  )
}

export default SingliPage