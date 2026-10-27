import styled from 'styled-components'

export const StyledHeader = styled.header({
    // marginRight: '5%',
    // marginLeft: '5%',
    // marginTop: '2rem',
    // marginBottom: '2rem',
    paddingBottom: '1.2rem',
    paddingTop: '1.1rem',
    borderBottom: '1px solid',
    borderTop: '1px solid',
    // paddingLeft: '5%',
    // paddingRight: '5%',
    // borderTop: '1px solid',
  
    "@media (max-width: 870px)": {
        marginLeft: '5%',
        marginRight: '5%',
        marginTop: '1rem',
        marginBottom: '1rem',
    },

    nav: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        maxWidth: '89%',
        marginLeft: 'auto',
        marginRight: 'auto',
        
        height: '40px',
        a: {
          color: 'rgb(217, 189, 119)',
            fontSize: '4rem',
            fontWeight: '600',
            textDecoration: 'none',
            // borderRadius: '0.5rem',
            '&:hover': {
                // textDecoration: 'underline',
                // borderBottom: '2px solid ',
                // borderLeft: '2px solid ',
                // borderRight: '2px solid ',
                transform: 'scale(1.10)',
            },
            "@media (max-width: 870px)": {
                fontSize: '1.1rem',
                padding: '0px 5px',
                borderRadius: '0.25rem',
                // textDecoration: 'underline',
                '&:hover': {
                    transform: 'scale(1.05)',
                },
            },
    },
  },
});