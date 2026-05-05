
import Image from "next/image";

const AboutSection = () => {
  return (
    <section className="bg-white py-16 px-6 md:px-12 lg:px-24">
      
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 items-center">

        {/* Left Content */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold text-gray-900">
            About Us
          </h2>

          <p className="mt-4 text-gray-600 leading-relaxed">
            We are a modern digital company focused on building scalable,
            high-performance web applications using Next.js and Laravel.
            Our goal is to deliver clean UI, strong backend systems, and
            real-world production-ready solutions.
          </p>

          <p className="mt-4 text-gray-600 leading-relaxed">
            From startups to enterprise solutions, we help businesses grow
            with modern technology and efficient development practices.
          </p>

          <button className="mt-6 px-6 py-3 bg-black text-white rounded-lg hover:bg-gray-800 transition">
            Learn More
          </button>
        </div>

        {/* Right Image */}
        <div className="flex justify-center">
          <Image
            src="/images/about/product2.png"
            alt="About Us"
            width={1200}
            height={800}
            className="w-full max-w-xl h-auto rounded-3xl shadow-2xl"
          />
        </div>

      </div>
    </section>
  );
};

export default AboutSection;