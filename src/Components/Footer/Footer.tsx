import React from 'react';
import { FooterContainer, StyledContainerFooter, StyledFooterBracketed, StyledFooterItalics, StyledLogoContainerFooter } from './Footer.styles';
import DruidLogo from '../../assets/logos/Principal_Onyx.svg'
import NavIcon from '../../assets/logos/ElementThree_Lime.svg'


export default function Footer() {
    return (
        <FooterContainer>
              <StyledLogoContainerFooter src={NavIcon} alt="" />
            <StyledContainerFooter>
              {/* <div>Druids</div> */}
              <StyledLogoContainerFooter src={DruidLogo} alt="Druid" />
            </StyledContainerFooter>
            <div>
              <StyledFooterItalics>London N1 5SA :Address</StyledFooterItalics>
              <StyledFooterBracketed>Druid.ldn@gmail.com :Email</StyledFooterBracketed>
              <StyledFooterBracketed>07534717738 :Phone</StyledFooterBracketed>
            </div>
      </FooterContainer>
    )
  };
  
