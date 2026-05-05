
"use client";
import React, { useState } from "react";

const Banner = () => {
  const [showForm, setShowForm] = useState(false);

  return (
    <div
      className="bg-cover bg-center h-screen w-full relative flex items-center justify-center"
      style={{
        backgroundImage:
          "url('https://images.unsplash.com/photo-1449844908441-8829872d2607?w=1200&auto=format&fit=crop&q=60')",
      }}
    >
      {/* Dark overlay */}
      <div className="bg-black/40 absolute inset-0"></div>

      {/* Content */}
      <div className="relative z-10 text-center max-w-3xl px-5">
        <h1 className="text-2xl md:text-4xl font-bold text-white leading-snug">
          A modern home building under a clear sky,<br />
          architecture and design.
        </h1>

        <p className="text-white mt-4 text-sm md:text-base opacity-90">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>

        {/* Button */}
        <button
          onClick={() => setShowForm(true)}
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded mt-6"
        >
          Learn More
        </button>
      </div>

      {/* 🟢 FORM OVERLAY */}
      {showForm && (
        <div className="absolute inset-0 flex items-center justify-center bg-black/60 z-20 px-4">

          <div className="bg-white w-full max-w-md p-6 rounded-xl shadow-lg relative animate-fadeIn">

            {/* ❌ Close */}
            <button
              onClick={() => setShowForm(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black text-xl"
            >
              ✕
            </button>

            <h2 className="text-2xl font-bold mb-4 text-center">
              Contact Form
            </h2>

            <form className="flex flex-col gap-3">
              <input
                type="text"
                placeholder="Name"
                className="border p-2 rounded"
              />

              <input
                type="email"
                placeholder="Email"
                className="border p-2 rounded"
              />

              <textarea
                placeholder="Message"
                className="border p-2 rounded"
              />

              <button
                type="submit"
                className="bg-black text-white py-2 rounded hover:bg-gray-800"
              >
                Submit
              </button>
            </form>

          </div>
        </div>
      )}
    </div>
  );
};

export default Banner;