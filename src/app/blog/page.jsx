"use client"

import Image from "next/image";
import { useState } from "react";

// export const metadata = {
//   title: "Contact",
//   description:
//     "Elevate your social grace with our specialized etiquette courses. From dining decorum to professional protocol, our classes provide practical insights and hands-on learning experiences to ensure you navigate any social setting with finesse.",
//   keywords: ["social", "grace", "professional", "dining", "classes", "learning"],
//   alternates: {
//     canonical: "https://modernmannerism.com/contact",
//   },
// };

const BlogPage = () => {
  const [theme, setTheme] = useState("light");

  return (
    <div className="pt-[100px] md:pt-[120px] "
     
    >
      {/* Form Container */}
<div  className={`relative rounded-lg shadow-lg flex md:mx-10 mx-2 items-center justify-center min-h-screen bg-cover bg-center bg-no-repeat ${
        theme === "dark" ? "dark" : ""
      }`}
      style={{ backgroundImage: 'url("/assets/Contact-us-pink.jpg")' }}>
      <div className=" flex w-full max-w-lg">
    <div className="flex-1 flex flex-col items-stretch"> <h1 className="text-center text-4xl text">Our Team will reach out to you!</h1>

<p>I agree to receive marketing materials from Modern Mannerism.</p></div>

        <form className="flex flex-1 flex-col gap-4">
          <input
            type="text"
            placeholder="Name and Surname"
            className="w-full p-4 rounded-md bg-gray-100 dark:bg-[#0C1522] dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#933469]"
          />
          <input
            type="email"
            placeholder="Email Address"
            className="w-full p-4 rounded-md bg-gray-100 dark:bg-[#0C1522] dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#933469]"
          />
          <input
            type="tel"
            placeholder="Phone Number (Optional)"
            className="w-full p-4 rounded-md bg-gray-100 dark:bg-[#0C1522] dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#933469]"
          />

          {/* Course Selection Dropdown */}
          <select
            className="w-full p-4 rounded-md bg-gray-100 dark:bg-[#0C1522] dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#933469]"
            defaultValue=""
          >
            <option value="" disabled>Select a Course</option>
            <option value="personal-branding">Personal Branding</option>
            <option value="communication-skills">Communication Skills</option>
            <option value="corporate-etiquette">Corporate Etiquette</option>
            <option value="fine-dining-manners">Fine Dining Manners</option>
          </select>

          <textarea
            placeholder="Message"
            rows="5"
            className="w-full p-4 rounded-md bg-gray-100 dark:bg-[#0C1522] dark:text-white border border-gray-300 dark:border-gray-600 focus:outline-none focus:ring-2 focus:ring-[#933469]"
          ></textarea>
          
          <button
            type="submit"
            className="w-full py-3 text-white bg-[#933469] hover:bg-[#721a53] rounded-md transition-colors duration-300"
          >
            Send
          </button>
        </form>
      </div>
    </div>
</div>
  );
};

export default BlogPage;
