import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import Card from "../commons/Card";
import Header from "../commons/Header";
import { getProducts } from "../redux/products";

const Grid = () => {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);

  const products = useSelector((state) => state.cars.allProducts);
  const makes = useSelector((state) => state.cars.make);

  return (
    <div>
      <Header />
      <div className="px-10 py-10 bg-gray-100 grid gap-10 lg:grid-cols-3 xl:grid-cols-4 sm:grid-cols-2 ">
        {makes !== undefined
          ? makes?.map((cars, i) => (
              <div key={i}>
                <Card cars={cars} />
              </div>
            ))
          : products?.map((cars, i) => (
              <div key={i}>
                <Card cars={cars} />
              </div>
            ))}
      </div>
    </div>
  );
};

export default Grid;
