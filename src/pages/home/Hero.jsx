import { Box, Button, Typography } from '@mui/material';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
  const navigate = useNavigate();
  const onLookForBooksClickHandler = () => {
    navigate("/bookfinder");
  };

  return (
    <section className="hero-section section">
      <div className="hero-section-content flex">
        <Box
          width={700}
          py={4}
        >
          <h1 className="hero-text">
            Looking for books? BookLook got your back!
            Find and read easily!
          </h1>
        </Box>
        <Box>
          <Button
            style={{
              color: '#F1F2EE',
              backgroundColor: '#1E555C'
            }}
            variant="contained"
            onClick={onLookForBooksClickHandler}
          >
            <SearchOutlinedIcon />
            <Typography 
              variant="body1" 
              className="hero-button"
              sx={{
                textTransform: 'capitalize',
                marginLeft: '0.25rem'
              }}
            >
              Look for books
            </Typography>
          </Button>
        </Box>
      </div>
    </section>
   );
}
 
export default Hero;