import DruidLogo from '../../assets/logos/Principal_Onyx.svg'
import NavIcon from '../../assets/logos/ElementThree_Lime.svg'
import { StyledIcons, StyledLink, StyledImage } from './headerSection.styles'

export default function HeaderSection() {
  return (
    <>
        <StyledIcons>
            <StyledLink to="/" ><img src={NavIcon} alt='Lgog' /></StyledLink>
              <StyledImage  src={DruidLogo} alt='Lgog' />
            <StyledLink to="/"><img src={NavIcon} alt='Lgog' /></StyledLink>
        </StyledIcons>

    </>
  )
}