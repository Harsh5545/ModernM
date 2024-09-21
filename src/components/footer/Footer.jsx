// import styles from "./footer.module.css";

import Image from "next/image";

const Footer = () => {
  return (

  <>
    <footer className="dark:bg-[#00001F] border-t-8 bg-white text-black dark:text-white py-8">
      <div className="container mx-auto px-3">
        <div className="flex flex-wrap justify-between">
        
          <div className="w-full flex flex-col gap-2 items-center text-center  md:w-1/4 mb-6 md:mb-0">
             <Image
              src="/assets/logo.png"
              width={100}
              height={100}
                href="/"
              className="md:max-w-[6rem] cursor-pointer max-w-[6rem]"
              alt="ModernMannerism logo"
            />

            <p>
              We provide top-notch image consulting, table etiquette, and personality development services to help you shine in your personal and professional life.
            </p>
            
          </div>
          <div className="w-full flex flex-col gap-2 items-center text-center  md:w-1/4 mb-6 md:mb-0">
            <span className="text-lg font-bold mb-2">Quick Links</span>
            <ul>
              <li className="mb-2"><a href="/service" className="hover:underline">Services</a></li>
              <li className="mb-2"><a href="/about" className="hover:underline">About Us</a></li>
              <li className="mb-2"><a href="/blog" className="hover:underline">Blog</a></li>
              <li className="mb-2"><a href="/contact" className="hover:underline">Contact</a></li>
            </ul>
          </div>
          <div className="w-full flex flex-col gap-2 items-center md:w-1/4 mb-6 md:mb-0">
            <h className="text-lg text-center  font-bold mb-2">Contact Us</h>
            <ul>
              <li className="mb-3">Email: modernmannerism@gmail.com </li>
              <li className="mb-3">Phone: +123 456 7890</li>
              <li className="mb-3">Address: Thane, India</li>
            </ul>
          </div>
          <div className="w-full text-center  md:w-1/4 mb-6 md:mb-0">
            <span className="text-lg  text-center  font-bold mb-2">Follow Us</span>
            <div className="flex space-x-4">
              <a href="#" className="hover:text-gray-400"><i className="fab fa-facebook-f"></i></a>
              <a href="#" className="hover:text-gray-400"><i className="fab fa-twitter"></i></a>
              <a href="#" className="hover:text-gray-400"><i className="fab fa-instagram"></i></a>
              <a href="#" className="hover:text-gray-400"><i className="fab fa-linkedin-in"></i></a>
            </div>
          </div>
        </div>
      </div>
      <h6 className="text-center mt-10">
        &copy; 2024 ModernMannerism | Designed by HarshadKajale
      </h6>
    </footer></>
  );
};





export default Footer;