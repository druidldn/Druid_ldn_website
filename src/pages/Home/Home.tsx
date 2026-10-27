import MainImage from '../../assets/images/IMG_4644.jpg'
import { StyledMainImage, StyledNavDesktop, StyledNavMobile, StyledTextBody } from './Home.styles';
import LogoGrid from '../../Components/LogoGrid/LogoGrid';
import WhatWeDo from '../../Components/SkillSection/SkillSection';
import HeaderSection from '../../Components/HeaderSection/headerSection';
import NarBar from '../../Components/NavBar/navBar';
import Footer from '../../Components/Footer/Footer';

import JamesLogo from '../../assets/images/JamesArthur/jameslogo.jpg'
import VasiLogo from '../../assets/images/Vashi/vasiLogo.jpeg'
import Metronomy from '../../assets/images/Metronomy/metronomyLogo.jpg'
import GshockLogo from '../../assets/images/Gshock/gshockLogo.png'
import VarsarciLogo from '../../assets/images/Versace/versaceLogo.jpg'
import XboxLogo from '../../assets/images/Xbox/xboxLogo2.png'
import LWTheaterLogo from '../../assets/images/Storhouse/lwtheeaterLogo.svg'



const logos = [
  { src: Metronomy, alt: 'Metronomy' },
  { src: GshockLogo, alt: 'G-Shock' },
  { src: XboxLogo, alt: 'Xbox' },
  { src: LWTheaterLogo, alt: 'Storehouse Theatre' },
  { src: JamesLogo, alt: 'James Arthur' },
  { src: VarsarciLogo, alt: 'Versace' },
  { src: VasiLogo, alt: 'Vashi' },
];

const skills = [
  "Carpentry for Stage and Screen",
  "Prop Making and Fabrication",
  "Set Construction for Film, TV and Theatre",
  "MIG and TIG Welding",
  "CNC Routing and Cutting",
  "Painting and Faux Finishes",
  "Sculpting and 3D Texturing",
  "Set Dressing and Finishing",
  "Metalwork for Stage and Film",
  "Plastics and Vacuum Forming",
  "Model Making and Miniature Sets",
  "3D Modelling for Set Design",
  "Technical Drawing and Drafting",
  "Rigging and Structural Support",
  "Backdrops and Large-Scale Printing",
  "Polystyrene Carving",
  "Woodworking and Joinery",
  "Spray Painting and Surface Treatments",
  "On-site Set Installation",
  "Design Support and Concept Visuals"
];


export default function Home() {
  return (
    <>
       <HeaderSection />
       <StyledNavMobile>
          <NarBar
            links={[
              { to: '/', label: 'Home' },
              { to: '/builds', label: 'Builds' },
              // { to: '/hire', label: 'Hire' },
              { to: '/about', label: 'About' },
              { to: '/contact', label: 'Contact' },
            ]}
          />
       </StyledNavMobile>
        <StyledMainImage>
          <img src={MainImage} alt='The Druid team building a set in the workshop' fetchPriority="high" />

                    {/* <picture>
            <link rel='preload' as='image' href='../../assets/images/testworkshop.jpg' imageSizes="100vw" />
          </picture> */}
        </StyledMainImage>
        <StyledNavDesktop>
          <NarBar
            links={[
              { to: '/', label: 'Home' },
              { to: '/builds', label: 'Builds' },
              // { to: '/hire', label: 'Hire' },
              { to: '/about', label: 'About' },
              { to: '/contact', label: 'Contact' },
            ]}
          />
        </StyledNavDesktop>
          <StyledTextBody>Apologies recent server issues caused initial quotes not to be received, Please reach out if you have not heard back. Many thanks</StyledTextBody>
          <StyledTextBody>At our London-based workshop, Oscar and Charlie lead a highly skilled team specialising in professional set construction, scenic carpentry, prop making, and custom fabrication for film, television, theatre, and commercial installations.</StyledTextBody>
          <StyledTextBody>We offer end-to-end design and build services — from CNC routing, welding, and woodworking to scenic painting, set dressing, and on-site installation. Whether working on large-scale productions or bespoke commissions, we bring precision, creativity, and decades of hands-on experience to every project.</StyledTextBody>
          <StyledTextBody>Our workshop combines traditional craftsmanship with modern techniques, delivering reliable and visually striking results for clients across the UK’s creative industries.</StyledTextBody>
        <WhatWeDo skills={skills} />
        <LogoGrid logos={logos} />
        <Footer />
    </>
  )
}