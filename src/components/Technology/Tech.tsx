import React from 'react';

import BallCanvas from './Ball';
import SectionWrapper  from '../../hoc/SectionWrapper';
import { techLink, type TechLink } from '../../constants';

const Tech: React.FC = () => {
  return (
    <div className='flex flex-row flex-wrap justify-center gap-10'>
        {techLink.map((tech: TechLink) => (
            <div className='w-28 h-28' key={tech.icon}>
                <BallCanvas icon={tech.icon} />
                </div>
        ))}
      
    </div>
  )
}

export default SectionWrapper(Tech, '');
