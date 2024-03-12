import { Grid, Typography } from '@mui/material';
import PropTypes from 'prop-types';

const FeaturesGrid = ({ imgSource, gridDirection, feature, featureDescription }) => {
  return ( 
    <div className="features-grid">
      <Grid container item direction={gridDirection} alignItems="center">
        <Grid item xs={6}>
          <img className="feature-img" src={imgSource} alt="Search Feature"/>
        </Grid>
        <Grid 
          item 
          xs={6}
          sx={{
            height: '100%',
            paddingInline: '1rem',
            paddingBlock: '16rem',
            backgroundColor: '#1E555C',
          }}
        >
          <Typography
            variant="h1"
            sx={{
              color: '#F1F2EE',
              marginBlock: '1rem',
            }}
            className="feature-title"
          >
            {feature}
          </Typography>
          <Typography
            variant="body1"
            sx={{
              color: '#F1F2EE'
            }}
            className="feature-description"
          >
            {featureDescription}
          </Typography>
        </Grid>
      </Grid>
    </div>
  );
}

FeaturesGrid.propTypes = {
  imgSource: PropTypes.string,
  gridDirection: PropTypes.string,
  feature: PropTypes.string,
  featureDescription: PropTypes.string,
}

export default FeaturesGrid;