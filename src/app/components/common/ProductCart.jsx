import Image from "next/image";
import Link from "next/link";

const ProductCart = ({ id, title, desc, img }) => {
  return (
    <figure className="bg-white border border-gray-200 rounded-xl shadow-md overflow-hidden hover:shadow-xl transition duration-300">

      {/* Image */}
      <div className="relative w-full h-56">
        <Image
          src={img}
          alt={title}
          fill
          className="object-cover"
        />
      </div>

      {/* Content */}
      <div className="p-4 flex flex-col gap-3">

        <h3 className="text-xl font-semibold text-gray-800">
          {title}
        </h3>

        <p className="text-sm text-gray-600 line-clamp-2">
          {desc}
        </p>

        {/* Link instead of button */}
        <Link
          href={`/product/${id}`}
          className="mt-2 text-center bg-black text-white py-2 rounded-lg hover:bg-gray-800 transition"
        >
          View Details
        </Link>

      </div>
    </figure>
  );
};

export default ProductCart;