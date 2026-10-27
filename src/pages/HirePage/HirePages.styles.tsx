import styled from 'styled-components'


export const StyledTitle = styled.nav({
    fontSize: '2rem',
    textAlign: 'center',
    "@media (min-width: 765px)": {
      fontSize: '3rem',
    },
});


export const StyledBox = styled.nav({
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: '2rem',
    // width: '40rem',
    // border: '1px solid',
    padding: '1rem 2rem',
     borderRadius: '4px',
    "@media (min-width: 765px)": {
        width: 'fit-content',
    },
});


// export const StyledFilterArea = styled.div({
//     borderRadius: '8px',
//   display: 'flex',
//   justifyContent: 'none',
  
//   marginBottom: '1rem',
//   marginTop: '1rem',
//   "@media (min-width: 1000px)": {
//     justifyContent: 'center',
//     },
// });


export const StyledText = styled.div({
    alignContent: 'space-around',
    display: 'inline-block',    
    fontFamily: '"Typewriter", sans-serif',
    fontStyle: "normal",
    fontWeight: 400,
    color: "rgba(0, 0, 0, 0.75)",
    fontSize: "1.1rem",
    lineHeight: "1.1",
    letterSpacing: "0",
    marginRight: '1rem',
    "@media (min-width: 1000px)": {
      alignContent: 'end',
      fontFamily: '"Typewriter", sans-serif',
      fontStyle: "normal",
      fontWeight: 400,
      color: "rgba(0, 0, 0, 0.75)",
      fontSize: "2rem",
      lineHeight: "1.3",
      letterSpacing: "0",
    },
});

export const StyledButton = styled.button({
    all: 'unset', 
    cursor: 'pointer',
  textDecoration: 'none',
  display: 'inline-block',    
  fontFamily: '"Typewriter", sans-serif',
  fontStyle: "normal",
  fontWeight: 400,
  color: "rgba(0, 0, 0, 0.75)",
  fontSize: "1.1rem",
  lineHeight: "1.1",
  letterSpacing: "0",
  marginRight: '10px',
  paddingLeft: '0.2rem',
  paddingRight: '0.2rem',
  '&:hover': {
      background: 'lightGrey',
    },
    '&:focus': {
        backgroundColor: 'lightGrey',
    },
    "@media (min-width: 1000px)": {
        paddingLeft: '1rem',
        paddingRight: '1rem',
      fontFamily: '"Typewriter", sans-serif',
      fontStyle: "normal",
      fontWeight: 400,
      color: "rgba(0, 0, 0, 0.75)",
      fontSize: "2rem",
      lineHeight: "1.3",
      letterSpacing: "0",
    },
  });

export const StyledSpacer = styled.div({
  // cursor: `url(${MiddleFinger}), pointer`,
  display: 'inline-block',    
  fontFamily: '"Typewriter", sans-serif',
  fontStyle: "normal",
  fontWeight: 400,
  color: "rgba(0, 0, 0, 0.75)",
  fontSize: "2rem",
  lineHeight: "1.1",
  letterSpacing: "0",
  marginRight: '10px',
  "@media (min-width: 1000px)": {

      fontFamily: '"Typewriter", sans-serif',
      fontStyle: "normal",
      fontWeight: 400,
      color: "rgba(0, 0, 0, 0.75)",
      fontSize: "2rem",
      lineHeight: "1.3",
      letterSpacing: "0",
    },
  });
