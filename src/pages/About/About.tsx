import { Grid, StyledGrid, StyledTextBody, TextContainer } from './About.styles';
import TeamCard from '../../Components/TeamCard/teamCard';
import WhatWeDo from '../../Components/SkillSection/SkillSection';
import ElenaImage from '../../assets/profilePics/OscarImage.jpg'
import MithilaImage from '../../assets/profilePics/chalieIamge2.jpg'
import HeaderSection from '../../Components/HeaderSection/headerSection';
import NarBar from '../../Components/NavBar/navBar';
import Footer from '../../Components/Footer/Footer';

const team = [
    {
      image: ElenaImage,
      name: 'Oscar Coakley',
      title: 'CEO, Head of Metal work',
    },
    {
      image: MithilaImage,
      name: 'Charlie Golden',
      title: 'CEO, Head of Wood Working',
    },

];

const skills = [
  "Custom Set Design and Construction for Film, TV and Theatre",
  "Professional Prop Making and Fabrication",
  "Stage, Studio and Location Set Builds",
  "Carpentry and Woodwork for Stage and Screen",
  "Metal Fabrication, MIG and TIG Welding",
  "CNC Routing, Cutting and Digital Fabrication",
  "Scenic Painting, Faux Finishes and Surface Effects",
  "Sculpture, Carving and 3D Texturing",
  "Set Dressing, Styling and Final Finishes",
  "Metalwork for Film, Television and Live Events",
  "Plastics Fabrication and Vacuum Forming",
  "Model Making, Miniatures and Scale Sets",
  "3D Modelling and Visualisation for Set Design",
  "Technical Drawings, CAD and Drafting",
  "Rigging, Structural Builds and Installation",
  "Backdrops, Scenic Elements and Large-Scale Printing",
  "Polystyrene and Foam Carving",
  "Spray Painting and Specialist Surface Treatments",
  "On-Site Set Installation and Strike",
  "Creative Design Support and Concept Development"
];


export default function Contact() {
  return (
    <>
        <HeaderSection />
        <NarBar
          links={[
            { to: '/', label: 'Home' },
            { to: '/builds', label: 'Builds' },
            // { to: '/hire', label: 'Hire' },
            { to: '/about', label: 'About' },
            { to: '/contact', label: 'Contact' },
          ]}
        />
      {/* <StyledTitle>London based Set Designer</StyledTitle> */}
      <TextContainer>
        <StyledTextBody>At our London-based workshop, Oscar and Charlie lead a highly skilled team specialising in professional set construction, scenic carpentry, prop making, and custom fabrication for film, television, theatre, and commercial installations.</StyledTextBody>
        <StyledTextBody>We offer end-to-end design and build services — from CNC routing, welding, and woodworking to scenic painting, set dressing, and on-site installation. Whether working on large-scale productions or bespoke commissions, we bring precision, creativity, and decades of hands-on experience to every project.</StyledTextBody>
        <StyledTextBody>Our workshop combines traditional craftsmanship with modern techniques, delivering reliable and visually striking results for clients across the UK’s creative industries.</StyledTextBody>
      </TextContainer>
      <StyledGrid>
          <Grid>
            {team.map((member) => (
              <TeamCard key={member.name} {...member} />
            ))}
          </Grid>
      </StyledGrid>
      <WhatWeDo skills={skills} />
       <Footer />
    </>
  )
    
}