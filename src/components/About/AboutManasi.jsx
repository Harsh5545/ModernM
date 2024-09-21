import Image from "next/image";
import React from "react";

export const AboutManasi = () => {
  return (
    <div className="flex justify-evenly dark:bg-[rgb(0,0,31)] w-full items-center gap-5 py-24">
      <div className="flex w-[90%] items-center flex-col justify-evenly h-full md:flex-row">
        <div className="flex flex-1 items-center justify-center w-full md:w-[30%]">
          <Image
            src="/assets/ManasiKadamPic.png"
            height={800}
            width={800}
            alt="modern Mannerism"
            className="image bg-cover"
          />
        </div>
        <div className="flex-col flex-1 flex items-end justify-end gap-5 md:w-[70%]">
          <div className="content px-2 md:w-[90%] w-full flex flex-col gap-6">
            <div className="header flex pb-10 flex-col items-center gap-2 justify-center">
              <h2 className="text-black text-xl md:text-4xl font-semibold dark:text-white">
                ABOUT US
              </h2>
              <hr className="h-1 bg-[#933469] w-16" />
            </div>

            <p className="md:text-lg text-base">
              Manasi Kadam, a seasoned professional with a multifaceted career in
              Image & Etiquette Consulting, Content Strategy, Travel Consulting,
              and Client Relationship Management. Manasi's journey is a vibrant
              tapestry of diverse experiences, marked by a deep passion for
              fostering meaningful connections and enhancing the overall customer
              experience. She brings a unique blend of creativity, adaptability,
              and leadership to every role she undertakes.
            </p>
            <p className="md:text-lg text-base">
              Manasi’s educational background includes M.I.C.E Management (Travel
              and Tourism) from Kuoni Academy. Beyond formal education, she has
              pursued additional courses to enhance her expertise. She is a
              certified Image Consultant and Soft Skills Trainer, having completed
              programs at Classes of Professional Studies by Dr. Shivani Sharma
              and Presence Institute of Image Consulting. Additionally, she has
              explored Neuro Linguistic Programming with NetEdu Academy under
              Coach Lokesh Lakhotia, showcasing her commitment to continuous
              personal and professional development.
            </p>
            <p className="md:text-lg text-base">
              At Modern Mannerism, Manasi is dedicated to providing top-tier image
              consulting services, from personal branding and communication skills
              to fine dining and corporate etiquette. Her mission is to empower
              clients with the knowledge and confidence needed to succeed in their
              personal and professional lives.
            </p>
            <p className="md:text-lg text-base">
              Join Manasi at Modern Mannerism, and let’s work together to refine
              your image, enhance your etiquette, and unlock your full potential.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
