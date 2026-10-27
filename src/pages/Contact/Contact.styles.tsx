import styled from 'styled-components'

export const StyledContactTitle = styled.nav({
  marginTop: '5rem',
  fontSize: '2rem',
  marginBottom: '2rem',
});

export const StyledContactText = styled.nav({
  fontSize: '1.5rem',
  marginBottom: '2rem',
});

export const StyledContainer = styled.nav({
  marginLeft: '5%',
  paddingRight: '1rem',
  height: '100vh',
  width: '50%',
  "@media (max-width: 1000px)": {
    height: 'auto'
  },
});

export const ContactContainer = styled.nav({
display: 'flex',
    "@media (max-width: 1000px)": {
      display: 'block',
    },
});
