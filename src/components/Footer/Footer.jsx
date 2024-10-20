// eslint-disable-next-line no-unused-vars
import React from "react";
import { motion } from "framer-motion";

const Footer = () => {
  return (
    <footer className="py-28 bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        className="container"
      >
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-14 md:gap-4">
          {/* first section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">
              <span style={{ color: "#f3b32c" }}>Graduate </span>
              <span style={{ color: "#d7425f" }}>Accelerate Program</span>
            </h1>
            <p className="text-dark2">
              Graduate Accelerate Program (GAP) offers a 12-16 week online
              training to boost your tech career in Full-Stack Development,
              AI/ML, UX/UI Design, Product Management, Business Analytics, and
              Digital Marketing. Gain hands-on experience, mentorship, career
              placement support, scholarships, and global exposure for success.
            </p>
          </div>
          {/* second section */}
          <div className="grid grid-cols-2 gap-10">
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Courses</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200 whitespace-nowrap">
                    Full Stack Development
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Digital Marketing
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200 whitespace-nowrap">
                    AI / Machine Learning
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200 whitespace-nowrap">
                    Business Analyst
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200 whitespace-nowrap">
                    Product Management
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    UX/UI Designing
                  </li>
                </ul>
              </div>
            </div>
            <div className="space-y-4">
              <h1 className="text-2xl font-bold">Links</h1>
              <div className="text-dark2">
                <ul className="space-y-2 text-lg">
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Home
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Services
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    About
                  </li>
                  <li className="cursor-pointer hover:text-secondary duration-200">
                    Contact
                  </li>
                </ul>
              </div>
            </div>
          </div>
          {/* third section */}
          <div className="space-y-4 max-w-[300px]">
            <h1 className="text-2xl font-bold">Get In Touch</h1>
            <div className="flex items-center">
              <input
                type="text"
                placeholder="Enter your email"
                className="p-3 rounded-s-xl bg-white w-full py-4 focus:ring-0 focus:outline-none placeholder:text-dark2"
              />
              <button className="bg-custom-red text-white font-semibold py-4 px-6 rounded-e-xl">
                Go
              </button>
            </div>
          </div>
        </div>
      </motion.div>
    </footer>
  );
};

export default Footer;
