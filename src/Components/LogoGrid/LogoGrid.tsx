import React from 'react';
import { GridContainer, LogoItem } from './LogoGrid.styles';

type Logo = {
  src: string;
  alt?: string;
};

type LogoGridProps = {
  logos: Logo[];
};


const LogoGrid: React.FC<LogoGridProps> = ({ logos }) => {
  return (
    <>
      <GridContainer>
        {logos.map((logo, idx) => (
          <LogoItem key={idx}>
            <img src={logo.src} alt={logo.alt || `Logo ${idx + 1}`} />
          </LogoItem>
        ))}
      </GridContainer>
    </>
  );
};

export default LogoGrid;