import styled from 'styled-components'

export const StyledTitle = styled.div({
    fontSize: '2rem',
    textAlign: 'center',
    "@media (min-width: 1000px)": {
      fontSize: '2.5rem',
      marginBottom: '1rem',
      fontWeight: '500'
    },
});


export const StyledList = styled.nav({
  marginTop: '1rem',
    display: 'flex',
    flexWrap: 'wrap',
    marginLeft: 'auto',
    marginRight: 'auto',
      justifyContent: 'space-between',
        listStyle: 'none',
        maxWidth: '80%',
  "@media (max-width: 1032px)": {
    marginTop: '0rem',
  },
});


export const StyledButton = styled.button({
  // border: '1px solid transparent',
  borderRadius: '0.25rem',   
  all: 'unset', 
  cursor: 'pointer',
  textDecoration: 'none',
  display: 'inline-block',    
  fontFamily: '"Typewriter", sans-serif',
  fontStyle: "normal",
  fontWeight: 400,
  color:'rgb(217, 189, 119)',
  fontSize: "1.1rem",
  lineHeight: "1.1",
  letterSpacing: "0",
  marginRight: '10px',
  paddingLeft: '0.2rem',
  paddingRight: '0.2rem',
  // borderRight: '1px solid rgb(217, 189, 119)',
  // "@media (max-width: 1032px)": {
  //   borderRight: 'none',
  // },



  "&::before": {
    content: "''",
    display: "inline-block",
    // border: "2px solid #333",
    borderRadius: "2px",
    background: "#fff",
    transition: "background 0.2s, border-color 0.2s",
    marginRight: "1rem",
    width: "15px",
    height: "15px",
    "@media (min-width: 1000px)": {
    height: "25px",
    width: "25px",

    },
  },

  "&:focus::before, &:focus-visible::before": {
    background: "rgb(217, 189, 119)",
    borderColor: "rgb(217, 189, 119)",
  },

    "@media (min-width: 1000px)": {
        paddingLeft: '1rem',
        paddingRight: '1rem',
      fontFamily: '"Typewriter", sans-serif',
      fontStyle: "normal",
      fontWeight: 400,
      color: 'rgb(217, 189, 119)',
      fontSize: "2rem",
      lineHeight: "1.3",
      letterSpacing: "0",
    },
});
