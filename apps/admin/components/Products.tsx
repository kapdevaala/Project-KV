"use client";

import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

const Products = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await fetch(
          "https://project-kv.onrender.com/api/v1/product/all"
        );
        const data = await response.json();
        console.log(data);
        if (data.success == true) {
          setProducts(data.data);
        } else {
          throw new Error(data.message || "Failed to fetch products");
        }
      } catch (err) {
        // @ts-expect-error
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchProducts();
  }, []);

  if (loading) {
    return <div className="spinner"></div>;
  }

  if (error) {
    return (
      <p className="text-center text-red-500 border-2 border-black">
        Error While Fetching the Products
      </p>
    );
  }

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 p-4 border-2 border-black">
      {products.map((product) => (
        // @ts-expect-error
        <ProductCard key={product._id} product={product} />
      ))}
    </div>
  );
};

export default Products;
