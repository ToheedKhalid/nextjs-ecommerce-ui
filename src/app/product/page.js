"use client";
import axios from "axios";
import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";

const ProductSection = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const getProducts = () => {
    axios
      .get("https://dummyjson.com/products?limit=30")
      .then((res) => {
        setProducts(res.data.products);
        setLoading(false);
      })
      .catch((error) => {
        console.error("Failed to load products", error);
        setError("Failed to load products. Please try again.");
        setLoading(false);
      });
  };

  useEffect(() => {
    getProducts();
  }, []);

  // ── Loading State ──
  if (loading) {
    return (
      <section className="bg-lime-50 py-16 px-6 md:px-12 lg:px-24">
        <h2 className="text-3xl font-bold text-center text-gray-900">Latest Products</h2>
        <p className="text-center text-gray-600 mt-2">Explore our most popular products</p>
        <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {[...Array(8)].map((_, i) => (
            <div key={i} className="bg-white rounded-xl shadow-md overflow-hidden animate-pulse">
              <div className="h-48 bg-gray-200 w-full" />
              <div className="p-4 flex flex-col gap-3">
                <div className="h-4 bg-gray-200 rounded w-3/4" />
                <div className="h-3 bg-gray-200 rounded w-full" />
                <div className="h-3 bg-gray-200 rounded w-2/3" />
                <div className="h-8 bg-gray-200 rounded w-full mt-2" />
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }

  // ── Error State ──
  if (error) {
    return (
      <section className="bg-lime-50 py-16 px-6 text-center">
        <p className="text-red-500 font-medium">{error}</p>
        <button
          onClick={getProducts}
          className="mt-4 px-6 py-2 bg-black text-white rounded-lg hover:bg-gray-800 transition"
        >
          Retry
        </button>
      </section>
    );
  }

  // ── Main ──
  return (
    <section className="bg-lime-50 py-16 px-6 md:px-12 lg:px-24">

      <h2 className="text-3xl font-bold text-center text-gray-900">
        Latest Products
      </h2>

      <p className="text-center text-gray-600 mt-2">
        Explore our most popular products
      </p>

      <div className="max-w-7xl mx-auto mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {products.map((item) => (
          <div
            key={item.id}
            className="bg-white rounded-xl shadow-md hover:shadow-xl transition overflow-hidden flex flex-col"
          >
            {/* Image */}
            <Image
              src={item.thumbnail}
              alt={item.title}
              width={400}
              height={192}
              className="h-48 w-full object-cover"
            />

            {/* Content */}
            <div className="p-4 flex flex-col flex-1">

              <h3 className="text-lg font-semibold text-gray-800 line-clamp-1">
                {item.title}
              </h3>

              <p className="text-sm text-gray-600 mt-2 line-clamp-2 flex-1">
                {item.description}
              </p>

              {/* Price + Rating */}
              <div className="flex items-center justify-between mt-3">
                <span className="text-lg font-bold text-gray-900">
                  ${item.price}
                </span>
                <span className="text-sm text-yellow-500 font-medium">
                  ★ {item.rating}
                </span>
              </div>

              {/* Button */}
              <Link
                href={`/product/${item.id}`}
                className="mt-4 w-full bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition text-center text-sm font-medium"
              >
                View Details
              </Link>

            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ProductSection;