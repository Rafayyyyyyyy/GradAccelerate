// eslint-disable-next-line no-unused-vars
import React from "react";
import BannerPng from "../../assets/banner.png";
import { motion } from "framer-motion";

const Banner2 = () => {
  return (
    <section>
      <div className="container py-14 md:py-24 grid grid-cols-1 md:grid-cols-2 gap-8 space-y-6 md:space-y-0">
        {/* Banner Text */}
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          className="flex flex-col justify-center"
        >
          <div className="text-center md:text-left space-y-4 lg:max-w-[450px]">
            <h1 className="text-4xl font-bold !leading-snug">
              Join Us Now & Make Your Future in Tech
            </h1>
            <p className="text-dark2">
              Unlock your potential with GAP's fully funded 16-week online
              program, offering intensive training in Full-stack Development,
              UX/UI Design, AI/ML, Product Management, Digital Marketing and
              more. With 25-35 hours of weekly learning and hands-on projects,
              you'll gain real-world experience to tackle tech challenges. Open
              to those with at least 16 years of education and a passion for
              technology!
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdns38Rori3J7fLAI99Vyp0NQ9HgFk45iLwDkuqBN49KmXbSQ/viewform"
              target="_blank"
              className="primary-btn !mt-8"
            >
              Join Now
            </a>
          </div>
        </motion.div>
        {/* Banner Image */}
        <div className="flex justify-center items-center">
          <motion.img
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            src={BannerPng}
            alt=""
            className="w-[350px] md:max-w-[450px] object-cover drop-shadow"
          />
        </div>
      </div>
    </section>
  );
};

export default Banner2;
