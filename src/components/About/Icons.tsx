import React from "react";
import { FaGithub, FaLinkedin, FaTwitter } from "react-icons/fa";
import { SiGmail, SiLeetcode } from "react-icons/si";
import { GrDocumentText } from "react-icons/gr";

const Icons: React.FC = () => {
  return (
    <div className="flex gap-6">
      {/* LinkedIn */}
      <a
        href="https://www.linkedin.com/in/kavita-soren-663181217/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-800 text-white text-2xl 
                   hover:bg-blue-600 hover:scale-110 hover:shadow-lg hover:shadow-blue-400/50 
                   transition-all duration-300"
      >
        <FaLinkedin />
      </a>

      {/* Gmail */}
      <a
        href="mailto:kavitasoren2000@gmail.com"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-800 text-white text-2xl 
                   hover:bg-red-500 hover:scale-110 hover:shadow-lg hover:shadow-red-400/50 
                   transition-all duration-300"
      >
        <SiGmail />
      </a>

      {/* Twitter */}
      <a
        href="https://x.com/soren_kavita"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-800 text-white text-2xl 
                   hover:bg-sky-500 hover:scale-110 hover:shadow-lg hover:shadow-sky-400/50 
                   transition-all duration-300"
      >
        <FaTwitter />
      </a>

      {/* Resume */}
      <a
        href="https://drive.google.com/drive/u/0/folders/1-1j6-PHSpBqkXoXi9DfkWrXqMDMsjO4G"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-800 text-white text-2xl 
                   hover:bg-green-500 hover:scale-110 hover:shadow-lg hover:shadow-green-400/50 
                   transition-all duration-300"
      >
        <GrDocumentText />
      </a>

      {/* GitHub */}
      <a
        href="https://github.com/kavitasoren02"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-800 text-white text-2xl 
                   hover:bg-black hover:scale-110 hover:shadow-lg hover:shadow-gray-500/50 
                   transition-all duration-300"
      >
        <FaGithub />
      </a>

      <a
        href="https://leetcode.com/u/kavitasoren/"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 flex items-center justify-center rounded-full bg-gray-800 text-white text-2xl 
             hover:bg-orange-500 hover:scale-110 hover:shadow-lg hover:shadow-orange-400/50 
             transition-all duration-300"
      >
        <SiLeetcode />
      </a>
    </div>
  );
};

export default Icons;
