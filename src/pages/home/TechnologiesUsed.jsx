import { Grid } from '@mui/material';
import { FaReact } from "react-icons/fa";
import { SiMui } from "react-icons/si";

import { FaGoogle } from "react-icons/fa";
import TechnologiesCard from './components/TechnologiesCard';

const TechnologiesUsed = () => {
  return ( 
    <section className="technologies-used-section section">
      <div className="technologies-used-section-title">
        <h1 className="section-title">
          Technologies Used In This App
        </h1>
      </div>

      <div className="technologies-used-content">
        <Grid container>
          <TechnologiesCard
            technologyIcon={
              <FaReact
                size={56}
                color="#1E555C"
              />
            }
            technologyName="React"
          />
          <TechnologiesCard 
            technologyIcon={
              <SiMui
                size={56}
                color="#1E555C"
              />
            }
            technologyName="Material UI"
          />
          <TechnologiesCard 
            technologyIcon={
              <FaGoogle
                size={56}
                color="#1E555C"
              />
            }
            technologyName="Google"
          />
        </Grid>
      </div>
    </section>
  );
}
 
export default TechnologiesUsed;