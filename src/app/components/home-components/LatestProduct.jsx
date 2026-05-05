"use client";
import React, { useEffect, useState } from "react";
import ProductCart from "../common/ProductCart.jsx";
import axios from "axios";
import Link from "next/link";

const LatestProduct = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get("https://dummyjson.com/products?limit=8");
        setProducts(response.data.products);
        setLoading(false);
      } catch (err) {
        console.error("Failed to fetch products", err);
        setError("Failed to load products. Please try again.");
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return (
      <section className="py-10 bg-lime-50">
        <h1 className="text-3xl font-bold text-center">Latest Products</h1>
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-4">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden animate-pulse">
              <div className="relative w-full h-56 bg-gray-200"></div>
              <div className="p-4 flex flex-col gap-3">
                <div className="h-6 bg-gray-200 rounded w-3/4"></div>
                <div className="h-4 bg-gray-200 rounded w-full"></div>
                <div className="h-4 bg-gray-200 rounded w-2/3"></div>
                <div className="h-8 bg-gray-200 rounded w-full mt-2"></div>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  if (error) {
    return (
      <section className="py-10 bg-lime-50">
        <h1 className="text-3xl font-bold text-center">Latest Products</h1>
        <div className="max-w-7xl mx-auto mt-10 px-4 text-center">
          <p className="text-red-500 font-medium">{error}</p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-10 bg-lime-50">
      <h1 className="text-3xl font-bold text-center">
        Latest Products
      </h1>

      <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-10 px-4">
        {products.map((item) => (
          <ProductCart
            key={item.id}
            id={item.id}
            title={item.title}
            desc={item.description}
            img={item.thumbnail}
          />
        ))}
      </div>

      <div className="text-center mt-8">
        <Link
          href="/product"
          className="inline-block bg-black text-white px-6 py-3 rounded-lg hover:bg-gray-800 transition"
        >
          View More Products
        </Link>
      </div>
    </section>
  );
};

export default LatestProduct;