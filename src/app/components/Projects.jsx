// src/components/Projects.jsx
import Image from "next/image";
import Unify_img from "@/public/imgs/unify_img.png";
import AltF4_img from "@/public/imgs/AltF4_img.png";

export default function Projects() {
  const projects = [
    {
      title: "Unify",
      desc: "A Social Media Platform",
      img: Unify_img, // Updated path
    },
    {
      title: "AltF4",
      desc: "An online learning website",
      img: AltF4_img, // Updated path
    },
  ];

  return (
    <section
      id="projects"
      style={{ minHeight: "calc(100vh - 56px)" }}
      className="py-20 bg-gray-900 flex flex-col justify-center"
    >
      <h2 className="text-4xl font-bold text-center text-white mb-12">
        My Projects
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative group overflow-hidden rounded-lg shadow-xl"
          >
            <Image
              src={project.img}
              alt={project.title}
              width={1000}
              height={1000}
              className="w-full h-64 object-center transform group-hover:scale-110 transition duration-500"
            />
            <div className="absolute inset-0 bg-black bg-opacity-60 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
              <div className="text-white text-center">
                <h3 className="text-2xl font-semibold">{project.title}</h3>
                <p>{project.desc}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
