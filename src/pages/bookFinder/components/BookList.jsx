import { Grid } from '@mui/material';
import PropTypes from 'prop-types';
import BookCard from './BookCard';


const BookList = ({ bookList }) => {
  return ( 
    <Grid 
      container 
      spacing={2}
      sx={{
        marginTop: '1rem',
        marginBottom: '3rem',
        marginInline: '1.5rem',
        width: '96%'
      }}
    >
      {bookList && bookList.map((book) => (
        <Grid item xs={3} key={book.id}>
          <BookCard
            id={book.id}
            image={book.volumeInfo.imageLinks?.thumbnail || 'default_image_url'}
            title={book.volumeInfo.title}
            author={book.volumeInfo.authors?.join(', ')}
            publisher={book.volumeInfo.publisher}
            publishedDate={book.volumeInfo.publishedDate}
          />
        </Grid>
      ))}
    </Grid>
  );
}

BookList.propTypes = {
  bookList: PropTypes.array,
}

export default BookList;