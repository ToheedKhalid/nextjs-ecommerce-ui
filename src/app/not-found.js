"use client";

import Link from "next/link";

const NotFound = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-200 px-6 text-center">

      <h1 className="text-8xl md:text-9xl font-extrabold text-gray-900 tracking-widest">
        404
      </h1>

      <div className="w-24 h-1 bg-black rounded-full my-4"></div>

      <h2 className="text-2xl md:text-3xl font-semibold text-gray-800">
        Oops! Page Not Found
      </h2>

      <p className="mt-3 text-gray-600 max-w-md">
        The page you're looking for doesn't exist or has been moved.
        Please check the URL or go back to the homepage.
      </p>

      <div className="mt-6 flex gap-4 flex-wrap justify-center">

        <Link
          href="/"
          className="px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition shadow-md"
        >
          Go Home
        </Link>

        <button
          onClick={() => window.history.back()}
          className="px-6 py-3 border border-black text-black rounded-lg hover:bg-black hover:text-white transition"
        >
          Go Back
        </button>

      </div>
    </div>
  );
};

export default NotFound;