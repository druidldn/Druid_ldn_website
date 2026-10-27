import styled from 'styled-components'


export const SectionWrapper = styled.section({
  backgroundColor: 'rgb(31, 50, 37)',
  padding: '2rem 2rem',
  textAlign: 'center',
});

export const StyledTitle = styled.h1({
  fontSize: '2.5rem',
  marginBottom: '3rem',
  fontWeight: '700',
  color: 'rgb(217, 189, 119)',

  span: {
    color: '#ff7a00', 
  },
});

export const SkillsGrid = styled.div<{ columns: number }>(({ columns }) => ({
  display: 'grid',
  gridTemplateColumns: `repeat(${columns}, 1fr)`,
  gap: '2rem',
  // maxWidth: '80%',
  margin: '0 auto',
  textAlign: 'left',

  '@media (max-width: 768px)': {
    gridTemplateColumns: '1fr',
  },
}));

export const SkillItem = styled.li({
  listStyle: 'none',
  fontSize: '1.2rem',
  fontWeight: '600',
  marginBottom: '0.75rem',
  display: 'flex',
  alignItems: 'center',
  color: 'rgb(217, 189, 119)',

  '&::before': {
    content: '"•"',
    color: '#ff7a00', 
    marginRight: '0.75rem',
    fontSize: '1.5rem',
    lineHeight: '1',
  },
});