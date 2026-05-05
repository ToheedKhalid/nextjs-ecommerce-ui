const ContactPage = () => {
  return (
    <section className="bg-gray-50 min-h-screen py-16 px-6 md:px-12 lg:px-24">

      <div className="max-w-5xl mx-auto">

        {/* Heading */}
        <div className="text-center mb-10">
          <h1 className="text-4xl font-bold text-gray-900">
            Contact Us
          </h1>
          <p className="text-gray-600 mt-3">
            Have a question or want to work with us? Send us a message.
          </p>
        </div>

        {/* Grid */}
        <div className="grid md:grid-cols-2 gap-10 bg-white p-8 rounded-2xl shadow-lg">

          {/* Form */}
          <form className="flex flex-col gap-4">

            <input
              type="text"
              placeholder="Your Name"
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="email"
              placeholder="Your Email"
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />

            <input
              type="text"
              placeholder="Subject"
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            />

            <textarea
              rows="5"
              placeholder="Your Message"
              className="border border-gray-300 p-3 rounded-lg focus:outline-none focus:ring-2 focus:ring-black"
            ></textarea>

            <button
              type="submit"
              className="bg-black text-white py-3 rounded-lg hover:bg-gray-800 transition"
            >
              Send Message
            </button>

          </form>

          {/* Info */}
          <div className="flex flex-col justify-center gap-6">

            <div>
              <h3 className="text-xl font-semibold">Email</h3>
              <p className="text-gray-600">support@yourcompany.com</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Phone</h3>
              <p className="text-gray-600">+92 300 1234567</p>
            </div>

            <div>
              <h3 className="text-xl font-semibold">Address</h3>
              <p className="text-gray-600">
                Lahore, Pakistan
              </p>
            </div>

          </div>

        </div>

      </div>

    </section>
  );
};

export default ContactPage;