"use client";
import { motion } from "framer-motion";
import dynamic from "next/dynamic";
import Image from "next/image";
import download_icon from "@/public/icons/download-to-storage-drive.png";

// Constants
const RESUME_LINK =
  "https://drive.google.com/uc?export=download&id=1LW3N6jiKjL5oN6FKT7SsO1w2B14nzvoQ";

// Animation Variants
const sectionVariants = {
  hidden: { opacity: 0, y: 0 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 1, ease: "easeOut" },
  },
};

const titleVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
    transition: { duration: 0.8, delay: 0.2, type: "spring", stiffness: 120 },
  },
};

const textVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: 0.4 },
  },
};

const buttonVariants = {
  rest: { scale: 1, y: 0 },
  hover: {
    scale: 1.05,
    y: -2,
    boxShadow: "0px 8px 20px rgba(0, 0, 0, 0.15)",
    transition: { duration: 0.3 },
  },
  tap: { scale: 0.98, y: 0 },
};

const Parallax = dynamic(
  () => import("react-scroll-parallax").then((mod) => mod.Parallax),
  { ssr: false }
);

const Hero = () => {
  return (
    <motion.section
      variants={sectionVariants}
      initial="hidden"
      animate="visible"
      className="relative min-h-screen flex items-center justify-center overflow-hidden px-4 sm:px-6 lg:px-8 font-sans"
    >
      {typeof window !== "undefined" && (
        <Parallax speed={-20} className="absolute inset-0">
          <div className="h-full w-full bg-gradient-to-br from-gray-800 via-gray-700 to-blue-900 opacity-95" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.1),transparent_70%)]" />
        </Parallax>
      )}

      {/* Content */}
      <div className="relative z-10 text-center text-white max-w-4xl mx-auto">
        {/* Title with Parallax */}
        {typeof window !== "undefined" && (
          <Parallax speed={-15}>
            <motion.h1
              variants={titleVariants}
              className="text-4xl sm:text-5xl md:text-6xl md:min-h-18 lg:text-7xl lg:min-h-21 font-bold tracking-tight 
                bg-clip-text text-transparent bg-gradient-to-r from-white to-gray-300 
                drop-shadow-lg select-none"
            >
              Nguyen An Ninh
            </motion.h1>
          </Parallax>
        )}

        {/* Description with Parallax */}
        {typeof window !== "undefined" && (
          <Parallax speed={-8}>
            <motion.p
              variants={textVariants}
              className="mt-8 sm:mt-10 text-base sm:text-lg md:text-xl font-light text-gray-200 
                max-w-lg sm:max-w-xl md:max-w-2xl mx-auto leading-relaxed opacity-85 select-none"
            >
              Final-year student at FPT Polytechnic College - Can Tho campus.
            </motion.p>
          </Parallax>
        )}

        {/* Button with Parallax */}
        {typeof window !== "undefined" && (
          <Parallax speed={-5}>
            <motion.a
              href={RESUME_LINK}
              download
              rel="noopener noreferrer"
              variants={buttonVariants}
              initial="rest"
              whileHover="hover"
              whileTap="tap"
              className="mt-8 sm:mt-10 inline-flex items-center gap-3 px-6 py-3 sm:px-8 sm:py-4 
                bg-gradient-to-r from-teal-400 via-cyan-500 to-blue-500 text-white rounded-full font-medium 
                hover:from-teal-500 hover:via-cyan-600 hover:to-blue-600 transition-all duration-300 
                shadow-md hover:shadow-lg"
              aria-label="Download Nguyen An Ninh's Resume"
            >
              <Image
                src={download_icon}
                alt="Download Resume Icon"
                width={24}
                height={24}
                className="object-contain"
                priority
              />
              <span className="relative top-[1px] text-sm sm:text-base">
                Download Resume
              </span>
            </motion.a>
          </Parallax>
        )}
      </div>
    </motion.section>
  );
};

export default Hero;
