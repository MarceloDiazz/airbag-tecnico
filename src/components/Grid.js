import React, { useEffect } from 'react';
import { useDispatch, useSelector } from "react-redux";
import Card from '../commons/Card';
import { getProducts } from '../redux/products';

const Grid = () => {
  const dispatch = useDispatch();
  useEffect(()=>{
    dispatch(getProducts())
  },[dispatch])

  const products= useSelector((state)=> state.cars.allProducts)

  console.log("PRODUCTS",products);

  return(
    <div class="px-10 py-20 bg-gray-100 grid gap-10 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 " >
      {products?.map((cars)=>(
        <Card cars={cars} />
      ))}
    </div>
    
  )
};

export default Grid;
