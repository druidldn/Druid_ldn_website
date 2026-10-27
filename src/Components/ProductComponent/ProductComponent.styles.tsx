import styled from 'styled-components'


export const StyledIcons = styled.nav({
  display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',

  img: {
    height: '40px',
  },
});


export const StyledCard = styled.div<{ hasdetails?: any }>(props => ({
  display: 'grid',
  gridTemplateColumns: '10rem auto auto',
  gridTemplateAreas: props.hasdetails ? `"section1 section2 section3" "section4 section4 section4"` : `"section1 section2" "none section4"`,
  marginLeft: '5%',
  marginRight: '5%',
  paddingTop: '4rem',
  paddingBottom: '4rem',
  gap: '1rem',

    // borderTop: '1px solid rgb(217, 189, 119)',
  borderTop: '1px solid rgb(217, 189, 119)',
  '@media (max-width: 1000px)': {
    // borderTop: 'none',
    margin: '10px 10px 10px 10px',
    paddingBottom: '1rem',
    paddingTop : '1rem',
    gridTemplateColumns: 'auto',
    gridTemplateAreas: `
      "section1"
      "section2"
      "section3"
      "section4"
    `,
  },
}));

  export const StyledTitle = styled.section({
    fontSize: '2rem',
    gridArea: 'section1',
    maxHeight: '3rem',
    // flex: '1',
      marginBottom: '5rem',

    // alignSelf: 'flex-start',
    img: {
      height: '100px',
      // width: '100px',
    }
  });
  
  export const StyledDetails = styled.section({
    fontSize: '1.5rem',
  gridArea: 'section2',
  // flex: '2',
  // width: '20rem',
  marginLeft: '2rem',  
  "@media (max-width: 1000px)": {
    fontSize: '1.2rem',
      marginLeft: '0rem',
    },
  });
  
  export const StyledDimensions = styled.section({

  gridArea: 'section3',
  // flex: '2',
  // width: '20rem',
  marginLeft: '5rem',
  
  "@media (max-width: 1000px)": {
      marginLeft: '0rem',
    },
  });
  
  export const StyledCost = styled.section({

  gridArea: 'section3',
  // flex: '2',
  // width: '20rem',
  marginTop: '3rem',
  marginLeft: '5rem',
  
  "@media (max-width: 1000px)": {
      marginLeft: '0rem',
    },
  });
  
  export const StyledContent = styled.section({
    gridArea: 'section4',
    marginTop: '2rem',
    marginLeft: '14rem',
    // alignSelf: 'flex-start',

    
    "@media (max-width: 1000px)": {
        marginLeft: '0rem',
      },
});

//   export const StyledContent = styled.div({
//     // gridArea: 'section4',
//     // marginTop: '2rem',
//     // marginLeft: '14rem',
//     // alignSelf: 'flex-start',
//     // display: 'flex',


    
//     // "@media (max-width: 1000px)": {
//     //     marginLeft: '0rem',
//     //   },
// });

  export const StyledImage = styled.div({
  height: '300px',
  width: '100%',        // fills parent container’s width
  objectFit: 'cover',   // crops nicely
  borderRadius: '8px',
    // objectFit: 'cover',
    // alignSelf: 'flex-start',

    
    // "@media (max-width: 1000px)": {
    //     marginLeft: '0rem',
    //   },
});

export const BottomRow = styled.div({
  // gridColumn: "1 / -1",  
  gridArea: 'section4',   
  display: "flex",
  gap: "2rem",
  // alignItems: "flex-end",
  marginTop: "2rem",
  // flexWrap: "wrap",
  overflow: "auto",         
  whiteSpace: 'nowrap',
  paddingBottom: "2px",
  justifyContent: 'space-between',
  marginLeft: '2rem',
  scrollbarColor: ' rgb(217, 189, 119) rgb(31, 50, 37)',
  // maxWidth: '50%',
      "@media (max-width: 1000px)": {
        marginLeft: '0rem',
      },
});

export const RowImg = styled.img(() => ({
  maxHeight: `300px`,           
  width: "auto",              
  display: "block",
  borderRadius: "6px",
  '@media (min-width: 691px) and (max-width: 1222px)': {
    maxHeight: '300px',
  },

  '@media (max-width: 690px)': {
    maxHeight: 'none',
    width: '90%',
  },

}));

export const LightboxOverlay = styled.div({
  position: 'fixed',
  inset: 0,
  background: 'rgba(0,0,0,0.7)',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  zIndex: 9999,
});

export const LightboxImg = styled.img({
  maxWidth: '92vw',
  maxHeight: '92vh',
  borderRadius: '10px',
  boxShadow: '0 12px 48px rgba(0,0,0,0.5)',
  display: 'block',
});

export const CloseBtn = styled.button({
  position: 'fixed',
  top: '16px',
  right: '16px',
  border: 'none',
  background: 'rgba(0,0,0,0.55)',
  color: '#fff',
  borderRadius: '999px',
  width: '40px',
  height: '40px',
  fontSize: '22px',
  lineHeight: 1,
  cursor: 'pointer',
  zIndex: 10000,
});