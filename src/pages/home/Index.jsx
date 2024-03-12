import { Helmet } from 'react-helmet-async';
import Features from './Features';
import Hero from './Hero';
import TechnologiesUsed from './TechnologiesUsed';

const Home = () => {
  return ( 
    <>
      <Helmet>
        <title>Home | BookLook</title>
        <meta name="description" content="BookLook Home Page"/>
        <link rel="canonical" href="/" />
      </Helmet>
      <Hero />
      <Features />
      <TechnologiesUsed />
    </>
   );
}
 
export default Home;