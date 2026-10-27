import styled from 'styled-components'

export const StyledTitle = styled.nav({
    fontSize: '2rem',
    textAlign: 'center',
      display: 'none',
    "@media (min-width: 1000px)": {
      display: 'contents',
      fontSize: '2.5rem',
      marginBottom: '1rem',
      fontWeight: '500'
    },
});

export const StyledBox = styled.nav({
    marginLeft: 'auto',
    marginRight: 'auto',
    // width: '40rem',
    // border: '1px solid',
    padding: '1rem 2rem',
         borderRadius: '4px',
  display: 'flex',
    // "@media (min-width: 765px)": {
    // marginBottom: '2rem',
    // },
});
