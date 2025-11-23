import React from 'react'
import { useParams } from 'react-router-dom'

const SingliPage = () => {
  
      const params = useParams();

  return (
    <div>SingliPage{params.id}</div>
  )
}

export default SingliPage