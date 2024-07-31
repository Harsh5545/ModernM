import React from 'react'
import Image from "next/image";
import styles from "./styles.module.css"; // Import the CSS module

const HomeDinning = () => {
  return (
    <div><div
      className="relative w-full flex flex-row justify-evenly"
      style={{
        backgroundImage:
          "linear-gradient(to right, rgba(0,0,0,0.7), rgba(0,0,0,0.1)), url('/assets/image2.jpg')",
        backgroundAttachment: "fixed",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      
        <div className='flex flex-1 md:visible hide'></div>
      {/* Content */}
      <div className="flex flex-1 h-auto  gap-5 flex-col p-5 justify-center items-center  z-10 relative">
        <div className="absolute   inset-0 bg-opacity-50 dark:bg-opacity-70 dark:bg-[#060507] bg-[#b3bdca]"></div>        
<span className="p-1 font-semibold text-xl md:text-4xl w-[100%] md:w-[100%] text-center text-white">
          What My Clients Say
        </span>
        {/* <div
          className={`bg-white w-[95%] md:w-[60%] shadow-2xl shadow-slate-400 dark:shadow-black dark:bg-[#00001F] relative p-6 md:p-16 rounded-xl ${styles.testimonialContainer}`}
          style={{ maxWidth: "100%", overflowX: "hidden" }}
        >
          
        </div> */}
      </div>
    </div></div>
  )
}

export default HomeDinning