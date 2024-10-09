
"use client"

import axios from 'axios'
import { useParams } from 'next/navigation'
import React , {useEffect, useState} from 'react'


const singleProduct = () => {

  const [singleData, setSingleData] = useState<any>([]);

  const {id} = useParams()
  useEffect(() => {
    axios(`https://dummyjson.com/products/${id}`)
      .then(res => {
        console.log(res.data);
        setSingleData(res.data);
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div>{}</div>
  )
}

export default singleProduct