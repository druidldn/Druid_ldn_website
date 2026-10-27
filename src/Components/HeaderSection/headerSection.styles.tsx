import { Link } from 'react-router-dom';
import styled from 'styled-components'


export const StyledIcons = styled.nav({
  all: 'unset', 
//   display: 'flex',
  justifyContent: 'space-between',
  alignItems: 'center',
  width: '100%',
  display: 'grid',
  gridTemplateColumns: '1fr 4fr 1fr',
//  borderBottom: '1px solid rgb(217, 189, 119)',
 });

export const StyledImage = styled.img({
  maxHeight: '8rem',
  display: 'block',
  // height: 'auto',
  maxWidth: '80%',
marginLeft: 'auto',
marginRight: 'auto',
  "@media (min-width: 1000px)": {
    
    maxHeight: '8rem',
    },
});



export const StyledLink = styled(Link)({
width: '100%',
img: {
    all: 'unset',
    width: '100%',
      height: '8rem',
    // height: '100px',
    //   minHeight: '100px',
      display: 'block',
      // height: 'auto',
    //   maxWidth: '100%',
  },
});
