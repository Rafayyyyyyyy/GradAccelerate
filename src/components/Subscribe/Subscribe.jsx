import React from "react";
import { FaBell } from "react-icons/fa";
import BgImage from "../../assets/bg.png";
import { motion } from "framer-motion";

const bgStyle = {
  backgroundImage: `url(${BgImage})`,
  backgroundRepeat: "no-repeat",
  backgroundSize: "cover",
  backgroundPosition: "center",
};

const Subscribe = () => {
  return (
    <section className="bg-[#f7f7f7]">
      <motion.div
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        style={bgStyle}
        className="container py-24 md:py-48"
      >
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, ease: "easeInOut" }}
          className="flex flex-col justify-center"
        >
          <div className="text-center space-y-4 lg:max-w-[430px] mx-auto">
            <h1 className="text-4xl font-bold !leading-snug">
              50K+ Students are learning from us
            </h1>
            <p>
              🏎️ Ready to accelerate your career and learn from top industry
              leaders? This is your chance! Fast-track your success with GAP and
              grab one of 5 exclusive scholarships worth Rs. 180,000. Plus,
              you'll gain access to a powerful network and lifelong friends.
              Don't miss out—your future is waiting! 🚀
            </p>
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdns38Rori3J7fLAI99Vyp0NQ9HgFk45iLwDkuqBN49KmXbSQ/viewform"
              target="_blank"
              rel="noopener noreferrer"
              className="primary-btn !mt-8 inline-flex items-center gap-4 group"
            >
              Register Now
              <FaBell className="group-hover:animate-bounce group-hover:text-lg duration-200" />
            </a>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Subscribe;
