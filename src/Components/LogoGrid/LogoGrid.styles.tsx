import styled from 'styled-components'

export const StyledTitle = styled.div({
  textAlign: 'center',
  fontSize: '1.5rem',
  marginTop: '2rem',
  "@media (max-width: 600px)": {
        fontSize: '2rem',
    },
});

export const GridContainer = styled.div({
        borderTop: '1px solid rgb(217, 189, 119)',

      marginTop: '1rem',
      marginBottom: '1rem',
    display: 'grid',
        gridTemplateColumns: 'repeat(auto-fit, minmax(100px, 1fr))',
    padding: '1rem',
    maxWidth: '90%',
    marginRight: 'auto',
    marginLeft: 'auto',
    "@media (min-width: 600px)": {
    marginTop: '1rem',
    marginBottom: '3rem',
      gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
    },
});

export const LogoItem = styled.div({
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  // padding: '2rem',
  paddingTop: '2rem',
  paddingBottom: '2rem',
  img: {
    marginLeft: '3rem',
    marginRight: '3rem',
    maxHeight: '35px',
    objectFit: 'contain',
      "@media (min-width: 600px)": {
        maxHeight: '100px',
        maxWidth: '200px',
    },
  },
});