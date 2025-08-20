import React from "react";
import { styles } from "../../styles";
import { home } from "../../assets/index";

const Home: React.FC = () => {
  return (
    <section className="relative w-full h-screen mx-auto">
      <div
        className="absolute inset-0"
        style={{
          backgroundImage: `url(${home})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      />
      <div className="absolute inset-0 bg-black opacity-70" />

      <div
        className={`absolute inset-0 top-[120px] max-w-7xl mx-auto ${styles.paddingX} flex flex-row items-start gap-5`}
      >
        {/* Left side violet gradient line */}
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="w-1 sm:h-80 h-40 violet-gradient" />
        </div>
        {/* Home Content*/}
        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#6941c0]">Kavita</span>
          </h1>
          <p
            className={`${styles.heroSubText} mt-2 text-white-100 sm:text-base text-sm`}
          >
            A passionate <span className="text-[#56359e]">MERN Stack</span> and{" "}
            <span className="text-[#56359e]">Full-Stack Developer</span>{" "}
            <br className="sm:block hidden" />
            who loves building scalable web apps
            <br className="sm:block hidden" />
            and modern user experiences.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Home;
