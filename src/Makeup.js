import React, { useState, useEffect } from "react";
import axios from "axios";

export default function Makeup() {
  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick`
      );
    //   console.log(res);
      setdatabase(res);
    }
    getData();
  }, []);

  const [database, setdatabase] = useState([]);

  console.log(database.data[0]);

  return (
    <>
      <div className="text-4xl">Makeup</div>
      {/* <div>{database.data[0].brand}</div>
      <div><img src={database.data[0].api_featured_image} alt="" /></div> */}


<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={database.data[0].api_featured_image}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{database.data[0].category}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{database.data[0].name}</h2>
          <p className="mt-1">${database.data[0].price}</p>
        </div>
      </div>
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={database.data[1].api_featured_image}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{database.data[0].category}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{database.data[1].name}</h2>
          <p className="mt-1">${database.data[1].price}</p>
        </div>
      </div>      
      <div className="lg:w-1/4 md:w-1/2 p-4 w-full">
        <a className="block relative h-48 rounded overflow-hidden">
          <img alt="ecommerce" className="object-cover object-center w-full h-full block" src={database.data[2].api_featured_image}/>
        </a>
        <div className="mt-4">
          <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">{database.data[0].category}</h3>
          <h2 className="text-gray-900 title-font text-lg font-medium">{database.data[2].name}</h2>
          <p className="mt-1">${database.data[2].price}</p>
        </div>
      </div>
    </div>
  </div>
</section>
    </>
  );
}
