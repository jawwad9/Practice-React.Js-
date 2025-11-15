import React from 'react'
import { useParams } from 'react-router-dom'

const SingliPage = () => {
    const {id} = useParams()


  return (
    <div>SingliPage {id}</div>
  )
}

export default SingliPage