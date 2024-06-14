import React from 'react';
import Image from "next/image";

function ServicesComponent() {
  const courses = [
    {
id:1,
      image: "/assets/course3.jpg",
      title: "Personality Enhancement Programme",
      description: "Unlock your full potential with our Personality Enhancement Programme.",
      isBestSelling: false,
    },
    {
        id:2,
      image: "/assets/course2.jpg",
      title: "Business Etiquette & Corporate Image Programme",
      description: "Master the art of business etiquette and elevate your corporate image.",
      isBestSelling: true,
    },
    {
        id:3,
      image: "/assets/course1.jpg",
      title: "Children’s Etiquette Programme",
      description: "Teach your children essential etiquette skills in a fun and engaging way.",
      isBestSelling: false,
    },
  ];

  return (
    <div className='flex flex-col'>
      <div className="w-full dark:bg-[#00001F] h-full flex flex-col justify-center items-center">
        <div>
          <h1 className="py-10 text-4xl flex flex-col gap-2 font-bold">
            Services <hr className="bg-[#933469] h-1" />
          </h1>
        </div>
        <div className="flex flex-col justify-center items-center gap-10 py-16 w-full md:flex-row md:space-y-0 md:space-x-4">
          {courses.map((course, index) => (
            <div
              key={course.id}
              className="relative w-[90%] md:w-[25%] bg-[#708090] bg-opacity-25 dark:bg-[#122031] rounded-3xl text-black md:p-4 p-2 text-center flex flex-col items-center justify-center gap-3 dark:hover:bg-[#000] shadow-2xl hover:shadow-lg hover:shadow-[#8c9c88] dark:hover:shadow-[#708090] transition-shadow"
              style={{ height: '600px' }} // Fixed height for all cards
            >
              <div className="bg-[#003b6d] flex justify-center items-center rounded-2xl overflow-hidden">
                <Image
                  alt={course.title}
                  className="object-cover"
                  height={200}
                  src={course.image}
                  width={400}
                />
              </div>
              <div className="flex flex-col gap-4">
                <p className="font-semibold text-lg md:text-xl dark:text-white">{course.title}</p>
                <p className="dark:text-white">{course.description}</p>
              </div>
              <button className="bg-[#933469] text-center text-white dark:text-white font-extrabold p-2 px-6 rounded-xl hover:bg-[#d664b6] transition-colors">
                See more
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default ServicesComponent;
