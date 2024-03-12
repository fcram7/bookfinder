import SearchFeature from '/search-books.png';
import ReadFeature from '/read-books.png';
import BuyBookFeature from '/buy-books.png';
import FeaturesGrid from './components/FeaturesGrid';
import { Grid } from '@mui/material';

const Features = () => {
  return ( 
    <section className="features-section section">
      <div className="features-section-title">
        <h1 className="section-title">
          What Can You Do With BookLook
        </h1>
      </div>

      <div className="features-content">
        <Grid container rowGap={0}>
          <FeaturesGrid
            imgSource={SearchFeature}
            gridDirection="row"
            feature="Search Book"
            featureDescription="Look for the book you like from its title, author, or publisher"
          />
          <FeaturesGrid
            imgSource={ReadFeature}
            gridDirection="row-reverse"
            feature="Check the book"
            featureDescription="Have a first look on the book you like. Not just the summary, but it's sample as well!"
          />
          <FeaturesGrid
            imgSource={BuyBookFeature}
            gridDirection="row"
            feature="Buy the book"
            featureDescription="Buy the book directly from Google Books if you find the book is worth to buy!"
          />
        </Grid>
      </div>
    </section>
   );
}
 
export default Features;