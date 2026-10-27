// import React, { useState } from "react";
import ProductComponent from '../../Components/ProductComponent/ProductComponent';
import { StyledBox } from './Builds.styles';
import { useState } from 'react';
import HeaderSection from '../../Components/HeaderSection/headerSection';
import NarBar from '../../Components/NavBar/navBar';
import { FilterSection } from '../../Components/FilterSection/filterSection';
import Footer from '../../Components/Footer/Footer';

// IMAGES
import ArthurImage1 from '../../assets/images/JamesArthur/JamesArthur01.jpg'
import ArthurImage2 from '../../assets/images/JamesArthur/JamesArthur3.jpg'
import ArthurImageLogo from '../../assets/images/JamesArthur/jameslogo.jpg'

import Vashi1 from '../../assets/images/Vashi/1.jpg'
import Vashi2 from '../../assets/images/Vashi/2(1).jpg'
import Vashi3 from '../../assets/images/Vashi/3(1).jpg'
import VashiLogo from '../../assets/images/Vashi/vasiLogo.jpeg'

import FkaCee1 from '../../assets/images/fkaCee/Screenshot 2022-04-28 at 12.59.36.jpg'
import FkaCee2 from '../../assets/images/fkaCee/maxresdefault.jpg'

import TionWayne1 from '../../assets/images/TionWayne/TION WAYNE LARGE IMAGE.jpeg'
import TionWayne2 from '../../assets/images/TionWayne/tion-wayne.jpeg'

import Zilch1 from '../../assets/images/Zilch/zilch2.jpg'
import Zilch2 from '../../assets/images/Zilch/zilch4.jpg'

import Metromony1 from '../../assets/images/Metronomy/metronomy1.jpg'
import Metromony2 from '../../assets/images/Metronomy/metronomy3.jpg'
import Metromony3 from '../../assets/images/Metronomy/metronomy4.jpg'
import MetromonyLogo from '../../assets/images/Metronomy/metronomyLogo.jpg'

import Metromony5 from '../../assets/images/Metronomy/Screenshot 2022-05-10 at 13.26.32.jpg'
import Metromony6 from '../../assets/images/Metronomy/IMG_6880.jpg'

import YoungFka1 from '../../assets/images/YoungFka/image1.jpeg'
import YoungFka2 from '../../assets/images/YoungFka/image2.jpg'
import YoungFka3 from '../../assets/images/YoungFka/image3.jpg'

import Versace1 from '../../assets/images/Versace/versace1.jpeg'
import Versace2 from '../../assets/images/Versace/versace2.jpeg'
import VersaceLogo from '../../assets/images/Versace/versaceLogo.jpg'

import Gshock1 from '../../assets/images/Gshock/g-shock-central-cee.avif'
import Gshock2 from '../../assets/images/Gshock/gshock-cree-2.jpg'
import GshockLogo from '../../assets/images/Gshock/gshockLogo.png'

import Xbox1 from '../../assets/images/Xbox/gameImage.jpg'
import Xbox2 from '../../assets/images/Xbox/gameimage02.jpg'
import XboxLogo from '../../assets/images/Xbox/xboxLogo2.png'

import Lamp1 from '../../assets/images/Storhouse/Screenshot 2025-07-22 at 11.44.04.jpg'
import Lamp2 from '../../assets/images/Storhouse/lampImage1.webp'
import Lamp3 from '../../assets/images/Storhouse/lampImage2.jpg'
import LampLogo from '../../assets/images/Storhouse/lwtheeaterLogo.svg'

  // { id: 1, 
  //   category: "Shop", 
  //   company: 'Apple', 
  //   details: 'iLorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.', 
  //   content: <ImageGrid images={[image1, image2]} /> 
  // },
const items = [
  { id: 1, 
    category: "Music", 
    name: 'James Arthur',
    company: ArthurImageLogo, 
    details: 'Super last-minute turnaround on this one. We turned one room of a community centre in Hoxton into a clinical, isolated box for James Arthur’s music video. Crazy tight load-in, and a really clever rigging and lighting set-up on this job!', 
    content: [ArthurImage1, ArthurImage2]
  },
  { id: 2, 
    category: "Shop", 
    name: 'Vashi',
    company: VashiLogo, 
    details: 'This was a fun job for the amazing jewellery brand Vashi. We created the large rings, plus other props and objects for multiple set-ups throughout the shoot.', 
    content: [Vashi1, Vashi2, Vashi3]
  },
  { id: 10, 
    category: "Shop", 
    name: 'G-Shock',
    company: GshockLogo, 
    details: 'For G-SHOCK’s campaign introducing Central Cee as their new ambassador, we built a sleek, metallic city office set that captured the brand’s urban resilience and edge. The environment featured sharp lines, reflective surfaces, and industrial textures — creating a futuristic workspace that echoed both Central Cee’s London roots and G-SHOCK’s bold identity.', 
    content: [Gshock1, Gshock2]
  },
  { id: 11, 
    category: "Shop", 
    name: 'Xbox',
    company: XboxLogo, 
    details: 'For the launch of Xbox’s Avowed, we built a full-scale, fungi-covered installation known as the ‘Bloomboard’ — a haunting physical recreation of an infected character from the game. Real oyster, Lion’s Mane, and Pioppini mushrooms were grown on the sculpture, transforming visibly over time to illustrate the spread of the Dreamscourge — a magical plague central to the game’s story.', 
    content: [Xbox1, Xbox2]
  },
  { id: 12, 
    category: "Theater", 
    name: 'Storehouse Theatre',
    company: LampLogo, 
    details: 'We designed and hand-built 150 bespoke lamps for the Storehouse Theatre, using paper wrapped around custom metal frames. Each piece was crafted to create a warm, atmospheric glow while complementing the space’s architectural character.', 
    content: [Lamp1, Lamp2, Lamp3]
  },
  { id: 6, 
    category: "Music", 
    name: 'Metronomy',
    company: MetromonyLogo, 
    details: 'The first of two great fun builds for Metronomy: a simple plane interior with some wicked camera tricks, great cotton-wool clouds, and some incredible skydiving antics from the band members, all doing their own stunts.', 
    content: [Metromony1, Metromony2, Metromony3]
  },
  { id: 7, 
    category: "Music", 
    name: 'Metronomy',
    company: MetromonyLogo, 
    details: 'The second of two great fun builds for Metronomy. The video was just four rooms with very different aesthetics, all set up and then cleverly stacked and organised in post to look as it does in the finished product.', 
    content: [Metromony5, Metromony6]
  },
  { id: 9, 
    category: "Music", 
    name: 'Versace',
    company: VersaceLogo, 
    details: 'A fully tiled bathroom, built in a back room inside a boxing club, for a short film by Versace. A very late finish and a memorable de-rig on this one…', 
    content: [Versace1, Versace2]
  },
  { id: 3, 
    category: "Music", 
    name: 'FKA twigs & Central Cee',
    details: 'This job mainly consisted of building the large steps in the video and incorporating the rotating platform, then helping the art team with getting everything set up.', 
    content: [FkaCee1, FkaCee2]
  },
  { id: 4, 
    category: "Music", 
    name: 'Tion Wayne',
    details: 'For this job we were presented with a rented set that we had to try and piece together, it was very well used and was falling apart in places. We had to brace and strengthen, restain and completely replace some missing pieces to get it to a usable place. And then we moved on to making a huge stack of cash (for the video, sadly).', 
    content: [TionWayne1, TionWayne2]
  },
  { id: 5, 
    category: "Music", 
    name: 'Zilch',
    details: 'This wasn’t an easy one at all! But with a few long nights, lots of filler, bendy ply and some serious swearing, we got the job done. We were very happy to see the back of this stupid UFO thing?!?!', 
    content: [Zilch1, Zilch2]
  },
  { id: 8, 
    category: "Music", 
    name: 'Yung Lean & FKA twigs',
    details: 'Another really fun job, this one: making fully working chandeliers to mount on a great old classic car. A great video and a great song to top it off.', 
    content: [YoungFka1, YoungFka2, YoungFka3]
  },
  
  // Add more as needed
];



export default function Builds() {
  const [activeFilter, setActiveFilter] = useState<string>("ALL");
  
  const filteredSections = activeFilter === "ALL" ? items : items.filter(section => section.category === activeFilter);
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
                <StyledBox>
          
                  <FilterSection   filters={[
                      { label: 'All', value: 'ALL' },
                      { label: 'Shop', value: 'Shop' },
                      { label: 'Theatre', value: 'Theater' },
                      { label: 'Music Video', value: 'Music' },
                      { label: 'Adverts', value: 'Adverts' },
                    ]}
                    setActiveFilter={setActiveFilter}
                  />
                </StyledBox>

      <ProductComponent items={filteredSections}   />
      <Footer />
    </>
  );
}