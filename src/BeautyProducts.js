import React, { useState, useEffect } from "react";
import axios from "axios";

export default function BeautyProducts() {
  useEffect(() => {
    async function getData() {
      const res = await axios.get(
        `http://makeup-api.herokuapp.com/api/v1/products.json?brand=covergirl&product_type=lipstick`
      );
      //   console.log(res);
      setdatabase(res.data);
    }
    async function getDataa() {
      const res2 = await axios.get(
        `https://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline`
      );
      console.log(res2.data);
      setdatabase2(res2.data);
    }

    getData();
    getDataa();
  }, []);

  const [database, setdatabase] = useState([]);
  const [database2, setdatabase2] = useState([]);

  //   console.log(database.data[0]);

  return (
    <>
      <div className="text-4xl font-bold text-center  py-20">Beauty Products</div>
      <div className="text-3xl text-center pb-20">CoverGirl Products</div>
      <div className="flex">
        {database.map((items) => {
          return (
            <>
              <div key={items.price} className="container w-1/3">
                <div className="p-4">
                  <a className="relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="mx-auto object-cover object-center h-full"
                      src={items.api_featured_image}
                    />
                  </a>
                  <div className="mt-4 ">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {items.category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {items.name}
                    </h2>
                    {/* ceil used for rounding */}
                    <p className="mt-1">₹{Math.ceil(items.price * 10)}</p>
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>

      <div className="text-3xl mt-24 mb-16 text-center">Maybelline Products</div>
      <div className="grid grid-cols-4 mt-4">
        {database2.map((items) => {
          return (
            <>
              <div key={items.price} className="container ">
                <div className="p-4">
                  <a className="relative h-48 rounded overflow-hidden">
                    <img
                      alt="ecommerce"
                      className="mx-auto object-cover object-center h-full"
                      src={items.api_featured_image}
                    />
                  </a>
                  <div className="mt-4 ">
                    <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
                      {items.category}
                    </h3>
                    <h2 className="text-gray-900 title-font text-lg font-medium">
                      {items.name}
                    </h2>
                    {/* ceil used for rounding */}
                    <p className="mt-1">₹{Math.ceil(items.price * 100)}</p>  
                  </div>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
  );
}
