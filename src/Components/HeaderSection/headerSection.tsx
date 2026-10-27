import DruidLogo from '../../assets/logos/Principal_Onyx.svg'
import NavIcon from '../../assets/logos/ElementThree_Lime.svg'
import { StyledIcons, StyledLink, StyledImage } from './headerSection.styles'

export default function HeaderSection() {
  return (
    <>
        <StyledIcons>
            <StyledLink to="/" ><img src={NavIcon} alt='Druid home' /></StyledLink>
              <StyledImage  src={DruidLogo} alt='Druid' />
            <StyledLink to="/"><img src={NavIcon} alt='Druid home' /></StyledLink>
        </StyledIcons>

    </>
  )
}