import React from 'react';
import { SectionWrapper, StyledTitle, SkillsGrid, SkillItem } from './SkillSection.styles';

type WhatWeDoProps = {
  skills: string[];
  columns?: number;
};


const WhatWeDo: React.FC<WhatWeDoProps> = ({ skills, columns = 3 }) => {
  const itemsPerColumn = Math.ceil(skills.length / columns);
  const columnsArray = Array.from({ length: columns }, (_, colIndex) =>
    skills.slice(colIndex * itemsPerColumn, (colIndex + 1) * itemsPerColumn)
  );

  return (
    <SectionWrapper>
      <StyledTitle>
        <span>.</span>Set Design Expertise and Trades<span>.</span>
      </StyledTitle>
      <SkillsGrid columns={columns}>
        {columnsArray.map((colSkills, i) => (
          <ul key={i}>
            {colSkills.map((skill, j) => (
              <SkillItem key={j}>{skill}</SkillItem>
            ))}
          </ul>
        ))}
      </SkillsGrid>
    </SectionWrapper>
  );
};

export default WhatWeDo;