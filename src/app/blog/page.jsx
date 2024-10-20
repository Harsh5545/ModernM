import Head from "next/head";

export default function WorkshopPage() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen">
      <Head>
        <title>Dining Etiquette Workshop</title>
        <meta
          name="description"
          content="Join our amazing dining etiquette workshop!"
        />
      </Head>

    

      {/* Hero Section */}
      <section
        className="relative w-full h-[60vh] bg-cover bg-center "
        style={{ backgroundImage: "url('/path-to-your-image.jpg')" }}
      >
        <div className="flex flex-col items-center justify-center h-full bg-black bg-opacity-50">
          <h2 className="text-4xl text-white font-bold mb-4">
            Dining Etiquette Workshop!
          </h2>
          <p className="text-lg text-white mb-8">
            Learn essential dining etiquette skills and impress your friends!
          </p>
          <a
            href="#register"
            className=" text-white bg-purple-600 px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Register Now
          </a>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-56 bg-gray-200 w-full">
        <h3 className="text-3xl font-bold text-start  mb-4">Workshop Overview</h3>
        <p className="max-w-2xl text-start mx-auto mb-8">
          In this workshop, you will learn:
        </p>
        <ul className="max-w-2xl mx-auto list-disc list-inside mb-8">
          <li>Proper table settings and utensils</li>
          <li>How to handle different dining situations</li>
          <li>Networking skills and etiquette</li>
          <li>Understanding cultural differences in dining</li>
        </ul>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="py-20 px-56 w-full">
        <h3 className="text-3xl font-bold text-start mb-4">Workshop Schedule</h3>
        <ul className="max-w-2xl mx-auto space-y-4">
          <li className="bg-white shadow rounded-lg p-4">
            Day 1: Introduction to Dining Etiquette
          </li>
          <li className="bg-white shadow rounded-lg p-4">
            Day 2: Practical Exercises
          </li>
          <li className="bg-white shadow rounded-lg p-4">
            Day 3: Networking Lunch
          </li>
        </ul>
      </section>

      {/* Register Section */}
      <section id="register" className="py-20 px-56 bg-gray-200 w-full">
        <h3 className="text-3xl font-bold mb-4">Register Now</h3>
        <form className="max-w-md mx-auto mb-4">
          <input
            type="text"
            placeholder="Your Name"
            className="block w-full p-3 mb-4 border rounded"
            required
          />
          <input
            type="email"
            placeholder="Your Email"
            className="block w-full p-3 mb-4 border rounded"
            required
          />
          <div className="mt-8 text-center">
            {/* <h4 className="text-xl font-bold">
              Price: <span className="text-green-500">199</span>
            </h4> */}
            <p className="text-red-500">
              Price will increase in the next 24 hours!
            </p>
            <p className="text-gray-600">Workshop Date: January 15, 2024</p>
          </div>
          <button
            type="submit"
            className="bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition"
          >
            Submit
          </button>
        </form>
      </section>

      <footer className="bg-white w-full py-4">
        <p className="text-center text-gray-600">
          © {new Date().getFullYear()} Workshop Title. All rights reserved.
        </p>
      </footer>
    </div>
  );
}
