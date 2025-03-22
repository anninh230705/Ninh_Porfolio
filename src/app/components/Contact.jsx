"use client";

import Image from "next/image";
import gmail_Icon from "@/public/imgs/gmail.png";
import phone_Icon from "@/public/imgs/phone.png";
import loction_Icon from "@/public/imgs/location.png";
import linkedin_Icon from "@/public/imgs/linkedin.png";
import facebook_Icon from "@/public/imgs/facebook.png";
import github_Icon from "@/public/imgs/github.png";

export default function Contact() {
  const handleMailClick = () => {
    if (typeof window !== "undefined") {
      window.open("mailto:ninhdev237@gmail.com", "_blank");
    }
  };

  const handleLocationClick = () => {
    if (typeof window !== "undefined") {
      window.open(
        "https://www.google.com/maps?q=Bình+Thủy,+Cần+Thơ,+Việt+Nam",
        "_blank"
      );
    }
  };

  return (
    <section
      id="contact"
      className="bg-gray-100 min-h-[calc(100vh-56px)] flex flex-col justify-center py-10 px-5"
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-6 text-blue-600">Contact</h2>
        <p className="text-gray-700 mb-8 text-lg">
          Connect with me via the information below. I'm always ready to support
          and cooperate!
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Thẻ thông tin */}
          <div
            className="bg-white shadow-md rounded-lg p-6 text-center cursor-pointer transform
            transition-transform duration-300 hover:scale-105 flex flex-col justify-center"
            onClick={handleMailClick}
            title="Send mail to: ninhdev237@gmail.com"
          >
            <div
              className="flex items-center justify-center bg-blue-100 p-4 rounded-full mx-auto mb-4
            w-16 h-16"
            >
              <Image src={gmail_Icon} width={32} height={32} alt="Gmail" />
            </div>
            <p className="font-bold text-lg text-gray-800">Gmail</p>
          </div>
          <div
            className="bg-white shadow-md rounded-lg p-6 text-center transform transition-transform
          duration-300 hover:scale-105 flex flex-col justify-center"
          >
            <div className="bg-blue-100 p-4 rounded-full mb-4 flex justify-between items-center">
              <Image
                src={phone_Icon}
                width={32}
                height={32}
                alt="Mobile phone"
              />
              <div className="w-full">
                <p>(+84) 393-384-404</p>
              </div>
            </div>
            <p className="font-bold text-lg text-gray-800">Mobile</p>
          </div>
          <div
            className="bg-white shadow-md rounded-lg p-6 text-center cursor-pointer transform
            transition-transform duration-300 hover:scale-105 flex flex-col justify-center"
            onClick={handleLocationClick}
            title="View location on Google Maps"
          >
            <div
              className="flex items-center justify-center bg-blue-100 p-4 rounded-full mx-auto mb-4
            w-16 h-16"
            >
              <Image src={loction_Icon} width={32} height={32} alt="Location" />
            </div>
            <p className="font-bold text-lg text-gray-800">Location</p>
          </div>
          <div
            className="bg-white shadow-md rounded-lg p-6 text-center transform transition-transform
          duration-300 hover:scale-105"
          >
            <div className="bg-blue-100 p-4 rounded-full mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M8 16l-4-4m0 0l4-4m-4 4h16"
                />
              </svg>
            </div>
            <p className="font-bold text-lg text-gray-800">LinkedIn</p>
            <p>
              <a
                href="https://linkedin.com/in/ninh"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                linkedin.com/in/ninh
              </a>
            </p>
          </div>
          <div
            className="bg-white shadow-md rounded-lg p-6 text-center transform transition-transform
          duration-300 hover:scale-105"
          >
            <div className="bg-blue-100 p-4 rounded-full mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M10 20l-6-6m0 0l6-6m-6 6h16"
                />
              </svg>
            </div>
            <p className="font-bold text-lg text-gray-800">Facebook</p>
            <p>
              <a
                href="https://facebook.com/ninh"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                facebook.com/ninh
              </a>
            </p>
          </div>
          <div
            className="bg-white shadow-md rounded-lg p-6 text-center transform transition-transform
          duration-300 hover:scale-105"
          >
            <div className="bg-blue-100 p-4 rounded-full mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 20l9-5-9-5-9 5 9 5z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 12l9-5-9-5-9 5z"
                />
              </svg>
            </div>
            <p className="font-bold text-lg text-gray-800">GitHub</p>
            <p>
              <a
                href="https://github.com/ninh"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                github.com/ninh
              </a>
            </p>
          </div>
          <div
            className="bg-white shadow-md rounded-lg p-6 text-center transform transition-transform
          duration-300 hover:scale-105"
          >
            <div className="bg-blue-100 p-4 rounded-full mx-auto mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6 text-blue-600"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 4a6 6 0 110 12 6 6 0 010-12z"
                />
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M14.5 9.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0z"
                />
              </svg>
            </div>
            <p className="font-bold text-lg text-gray-800">Instagram</p>
            <p>
              <a
                href="https://instagram.com/ninh"
                className="text-blue-600 hover:underline"
                target="_blank"
                rel="noopener noreferrer"
              >
                instagram.com/ninh
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
