import { Grid } from '@mui/material';
import PropTypes from 'prop-types';

const TechnologiesCard = ({ technologyIcon, technologyName }) => {
  return ( 
    <Grid 
      item
      container xs={4}
      justifyContent="center"
      alignItems="center"
      className="technology"
    >
      <Grid 
        item
        sx={{
          height: '85%',
          border: 'solid',
          borderColor: '#1E555C',
          padding: '0.5rem'
        }}
      >
        {technologyIcon}
      </Grid>
      <Grid 
        item
        sx={{
          paddingLeft: '1rem',
          paddingRight: '2rem',
          paddingBlock: '0.25rem',
          height: '85%',
          backgroundColor: '#1E555C',
        }}
      >
        <h2>{technologyName}</h2>
      </Grid>
    </Grid>
  );
}

TechnologiesCard.propTypes = {
  technologyIcon: PropTypes.element,
  technologyName: PropTypes.string,
}

export default TechnologiesCard;