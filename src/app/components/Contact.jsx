"use client";

import Image from "next/image";
import gmail_Icon from "@/public/imgs/gmail.png";
import phone_Icon from "@/public/imgs/phone.png";
import loction_Icon from "@/public/imgs/location.png";
import linkedin_Icon from "@/public/imgs/linkedin.png";
import facebook_Icon from "@/public/imgs/facebook.png";
import github_Icon from "@/public/imgs/github.png";
import insta_Icon from "@/public/imgs/instagram.png";

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

  const handleLinkedInClick = () => {
    if (typeof window !== "undefined") {
      window.open(
        "https://www.linkedin.com/in/nguyen-an-ninh-393981356/",
        "_blank"
      );
    }
  };

  const handleFacebookClick = () => {
    if (typeof window !== "undefined") {
      window.open("https://www.facebook.com/nguyen.an.ninh.451583/", "_blank");
    }
  };

  const handleGitHubClick = () => {
    if (typeof window !== "undefined") {
      window.open("https://github.com/anninh230705", "_blank");
    }
  };

  const handleInstagramClick = () => {
    if (typeof window !== "undefined") {
      window.open("https://www.instagram.com/no_inh333/ ", "_blank");
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
            <div className="bg-blue-100 p-4 rounded-full mb-4 flex justify-between items-center gap-2">
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
            className="bg-white shadow-md rounded-lg p-6 text-center cursor-pointer transform transition-transform
            duration-300 hover:scale-105 flex flex-col justify-center"
            onClick={handleLinkedInClick}
            title="Visit LinkedIn profile"
          >
            <div
              className="flex items-center justify-center bg-blue-100 p-4 rounded-full mx-auto mb-4
            w-16 h-16"
            >
              <Image
                src={linkedin_Icon}
                width={32}
                height={32}
                alt="LinkedIn"
              />
            </div>
            <p className="font-bold text-lg text-gray-800">LinkedIn</p>
          </div>
          <div
            className="bg-white shadow-md rounded-lg p-6 text-center cursor-pointer transform transition-transform
            duration-300 hover:scale-105 flex flex-col justify-center"
            onClick={handleFacebookClick}
            title="Visit Facebook profile"
          >
            <div
              className="flex items-center justify-center bg-blue-100 p-4 rounded-full mx-auto mb-4
            w-16 h-16"
            >
              <Image
                src={facebook_Icon}
                width={32}
                height={32}
                alt="Facebook"
              />
            </div>
            <p className="font-bold text-lg text-gray-800">Facebook</p>
          </div>
          <div
            className="bg-white shadow-md rounded-lg p-6 text-center cursor-pointer transform transition-transform
            duration-300 hover:scale-105 flex flex-col justify-center"
            onClick={handleGitHubClick}
            title="Visit GitHub profile"
          >
            <div
              className="flex items-center justify-center bg-blue-100 p-4 rounded-full mx-auto mb-4
            w-16 h-16"
            >
              <Image src={github_Icon} width={32} height={32} alt="GitHub" />
            </div>
            <p className="font-bold text-lg text-gray-800">GitHub</p>
          </div>
          <div
            className="bg-white shadow-md rounded-lg p-6 text-center cursor-pointer transform transition-transform
            duration-300 hover:scale-105 flex flex-col justify-center"
            onClick={handleInstagramClick}
            title="Visit Instagram profile"
          >
            <div
              className="flex items-center justify-center bg-blue-100 p-4 rounded-full mx-auto mb-4
            w-16 h-16"
            >
              <Image src={insta_Icon} width={32} height={32} alt="Instagram" />
            </div>
            <p className="font-bold text-lg text-gray-800">Instagram</p>
          </div>
        </div>
      </div>
    </section>
  );
}
