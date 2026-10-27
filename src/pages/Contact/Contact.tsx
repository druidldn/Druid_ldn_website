import { ContactContainer, StyledContactText, StyledContactTitle, StyledContainer } from './Contact.styles'
import HeaderSection from '../../Components/HeaderSection/headerSection'
import NarBar from '../../Components/NavBar/navBar'
import Footer from '../../Components/Footer/Footer'
// import { ContactForm } from '../../Components/Form/ContactForm' // form component not recovered; it was disabled on the live site


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
          <ContactContainer>
            <StyledContainer>
           
              <StyledContactTitle>
                Feel free to reach out to us for a consultation or quote.
              </StyledContactTitle>
              <StyledContactText>
              <StyledContactText>
                Helpful Details: 
                <ul>

                  <li>Everything start with an idea</li>
                  <li>Time line and deadlines</li>
                  <li>Design if possible but we can mock up on request</li>
                  <li>Budget and material choice</li>
                </ul>
              </StyledContactText>
                Email: Druid.ldn@gmail.com
              </StyledContactText>
              <StyledContactText>
                Phone Number: 07534717738
              </StyledContactText>
               <StyledContactTitle>
      
                              Apologies recent server issues caused initial quotes not to be received, Please reach out if you have not heard back. Many thanks

              </StyledContactTitle>
            </StyledContainer>
              {/* <ContactForm /> */}
          </ContactContainer>
        <Footer />
    </>
  ) 
}