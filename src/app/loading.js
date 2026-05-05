const Loading = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-white">

      {/* Spinner */}
      <div className="w-12 h-12 border-4 border-gray-300 border-t-black rounded-full animate-spin"></div>

      {/* Text */}
      <p className="mt-4 text-gray-600 text-lg">
        Loading, please wait...
      </p>

    </div>
  );
};

export default Loading;