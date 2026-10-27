import styled from 'styled-components'


export const StyledMainImage = styled.div({
  img: {
    display: 'block',
    height: 'auto',
    maxWidth: '100%',
    marginLeft: 'auto',
    marginRight: 'auto',
    // marginBottom: '2rem',
    marginTop: '1rem',
    "@media (min-width: 600px)": {
    // marginBottom: '4rem',
    // marginTop: '4rem',
    },
  },
});

export const StyledTextBody = styled.div({
      margin: '2% 5%',
      "@media (min-width: 765px)": {
          fontSize: '1.5rem',
          margin: '2.5% 20%',
      },
});

export const StyledNavMobile = styled.div({
  display: 'visible',
      "@media (min-width: 765px)": {
          display: 'none'
      },
});

export const StyledNavDesktop = styled.div({
          display: 'none',
      "@media (min-width: 765px)": {
      display: 'contents',
      },
});
