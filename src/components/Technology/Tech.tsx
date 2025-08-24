import React from "react";

import BallCanvas from "./Ball";
import SectionWrapper from "../../hoc/SectionWrapper";
import { techLink, type TechLink } from "../../constants";

const isAndroid = /Android|Adr/i.test(navigator.userAgent);

const filteredTechLinks = isAndroid ? techLink.slice(0, 7) : techLink;

const Tech: React.FC = () => {
  return (
    <div className="flex flex-row flex-wrap justify-center gap-10">
      {filteredTechLinks.map((tech: TechLink) => (
        <div className="w-28 h-28" key={tech.name}>
          <BallCanvas icon={tech.icon} />
        </div>
      ))}
    </div>
  );
};

export default SectionWrapper(Tech, "");
