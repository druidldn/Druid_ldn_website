import styled from "styled-components";

export const FooterContainer = styled.footer({
  fontFamily: '"Typewriter", sans-serif',
  paddingLeft: "20px",
  paddingRight: "20px",
  textAlign: "left",
  lineHeight: "1.35",
  fontSize: "1.3rem",
  fontWeight: 400,
  color: "rgb(217, 189, 119)",
  fontStyle: "normal",
  letterSpacing: "0em",
  borderTop: '1px solid rgb(217, 189, 119)',
  paddingTop: '1rem',
  "@media (min-width: 768px)": {
      display: "grid",
      gridTemplateColumns: "16% 30% 52%", 
    },
  });

export const StyledLogoContainerFooter = styled.img({
  fontFamily: '"Typewriter", sans-serif',
  display: "grid",
    height: '3rem',
    marginBottom: '1rem',
    "@media (min-width: 768px)": {
      height: '5rem',
    },
  });

export const StyledFooterItalics = styled.div({
  fontStyle: 'italic',
  display: "flex",
  justifyContent: 'flex-end',
});

export const StyledFooterBracketed = styled.div({
  fontStyle: 'italic',
  display: "flex",
  justifyContent: 'flex-end',
});

export const StyledContainerFooter = styled.div({
  marginLeft: '0',
  "@media (min-width: 768px)": {
    marginLeft: '0.5rem'
  },
  });
