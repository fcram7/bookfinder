import { Card, CardContent, CardMedia, Grid, Typography } from '@mui/material';

import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

const BookCard = ({ id, image, title, author, publisher, publishedDate }) => {
  return ( 
    <>
      <Card 
        sx={{
          display: 'flex',
          width: '100%'
        }}
      >
        <CardMedia
          component="img"
          sx={{
            width: '100%'
          }}
          alt={title}
          image={image}
          title={title}
        />
        <CardContent>
          <Grid
            container
            direction="row"
            spacing={2}
          >
            <Grid item>
              <Link to={`/bookdetail/${id}`}>
                <Typography color="#515052" variant="h6" className="book-card">
                  {title}
                </Typography>
              </Link>
            </Grid>
            <Grid item>
              <Typography variant="body1" className="book-card">
                Penulis: {author}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" className="book-card">
                Penerbit: {publisher}
              </Typography>
            </Grid>
            <Grid item>
              <Typography variant="body2" className="book-card">
                Tanggal terbit: {publishedDate}
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </Card>
    </>
  );
}

BookCard.propTypes = {
  id: PropTypes.string,
  title: PropTypes.string,
  author: PropTypes.string,
  publisher: PropTypes.string,
  publishedDate: PropTypes.string,
  image: PropTypes.string,
};

export default BookCard;