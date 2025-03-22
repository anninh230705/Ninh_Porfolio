"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import download_icon from "@/public/icons/download-to-storage-drive.png";

const resumeLink =
  "https://drive.google.com/uc?export=download&id=1UBNY3tQTWP6Q88t5zHPE-crWmnbXdruw";
const sectionClasses =
  "relative min-h-screen bg-gradient-to-br from-indigo-600 to-pink-500 flex flex-col items-center justify-center";
const buttonClasses =
  "mt-8 px-6 py-3 bg-white text-indigo-600 rounded-full font-semibold shadow-lg hover:bg-opacity-90 transition duration-300 flex justify-self-center items-center gap-2";

const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={sectionClasses}
    >
      <div className="absolute text-center text-white px-4">
        <motion.h1
          initial={{ scale: 0.8 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-5xl md:text-7xl font-extrabold cursor-default"
        >
          Nguyen An Ninh
        </motion.h1>
        <p className="text-lg md:text-xl mt-4">
          Final-year student at FPT Polytechnic College - Can Tho campus.
        </p>
        <motion.div
          whileHover={{ scale: 1.05, cursor: "pointer" }}
          whileTap={{ scale: 0.95 }}
          whileFocus={{ scale: 1.05 }}
          className={buttonClasses}
        >
          <a
            href={resumeLink}
            download
            className="w-full flex items-center gap-2"
          >
            <Image
              src={download_icon}
              alt="Download Resume Icon"
              width={24}
              height={24}
            />
            DOWNLOAD RESUME
          </a>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Hero;
