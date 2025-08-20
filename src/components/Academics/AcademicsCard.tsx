import React from 'react';
import{  VerticalTimelineElement} from "react-vertical-timeline-component";
import { type AcademicsLink } from '../../constants/index';
import "react-vertical-timeline-component/style.min.css";

interface AcademicsCardProps {
  academics: AcademicsLink;
}

const AcademicsCard: React.FC<AcademicsCardProps> = ({ academics }) => {
  return (
    <VerticalTimelineElement
      contentStyle={{ background: "#1d1836", color: "#fff" }}
      contentArrowStyle={{ borderRight: "7px solid #232631" }}
      date={academics.year}
      iconStyle={{ background: academics.iconBg }}
      icon={
        <div className="flex justify-center items-center w-full h-full">
          {academics.icon && (
            <img
              src={academics.icon}
              alt={academics.title}
              className="w-[60%] h-[60%] object-contain"
            />
          )}
        </div>
      }
    >
      <div>
        <h3 className="text-white text-[20px] font-bold">{academics.title}</h3>
        <p className="text-secondary text-[14px] font-semibold">{academics.institution}</p>

        <ul className="mt-5 list-disc ml-5 space-y-2">
          {academics.points.map((point, index) => (
            <li key={`academic-point-${index}`} className="text-white-100 text-[14px] pl-1 tracking-wider">
              {point}
            </li>
          ))}
        </ul>
      </div>
    </VerticalTimelineElement>
  );
};

export default AcademicsCard;
