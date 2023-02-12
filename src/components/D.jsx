import React from 'react'
import { useParams } from "react-router-dom";

const D = () => {

  const params = useParams()
  return (
    <div>{params.letra}</div>
  )
}

export default D