import { Box, Grid, TextField, Button, Typography } from '@mui/material';
import { useContext } from 'react';
import PropTypes from 'prop-types';

import { BookSearchContext } from '../../contexts/bookSearchContext';
import Api from '../../network/api';
import BookList from './components/BookList';
// import BookListPagination from './components/BookListPagination';

const SearchBook = () => {
  const bookContext = useContext(BookSearchContext);
  const handleSubmit = async (e) => {
    e.preventDefault();

    try{
      const searchResult = await Api.getSearchedBook(bookContext.bookSearch);
      bookContext.setBookSearchResult(searchResult.data.items);
    } catch (error) {
      console.error("Failed to catch books: ", error)
    }


    bookContext.setWaitingForSearch(false);
  };

  // const handlePageChange = (event, page) => {
  //   const from = (page - 1) * bookContext.pageSize;
  //   const to = (page - 1) * bookContext.pageSize + bookContext.pageSize;
  //   bookContext.setPagination({
  //     ...bookContext.pagination,
  //     from: from,
  //     to: to,
  //   });
  // }

  return (
    <>
      <section className="search-book-section section">
        <div className="search-book-content">
          <Grid
            container
            direction="column"
            alignItems="center"
            spacing={2}
          >
            <Grid item>
              <h1 className="search-title">Search Book</h1>
            </Grid>
            <form onSubmit={handleSubmit}>
              <Grid item>
                <Box
                  width={700}
                  marginBottom={1}
                >
                  <TextField
                    id="search-book"
                    label="Insert the book's author, title, or publisher"
                    variant="outlined"
                    sx={{
                      width: '100%'
                    }}
                    onChange={bookContext.bookSearchChangeHandler}
                  />
                </Box>
                <Button
                  variant="contained"
                  sx={{
                    color: '#F1F2EE',
                    backgroundColor: '#1E555C'
                  }}
                  type="submit"
                >
                  <Typography
                    className="search-button"
                    variant="body1" 
                    sx={{
                      textTransform: 'capitalize',
                    }}
                  >
                    Search
                  </Typography>
                </Button>
              </Grid>
            </form>
          </Grid>
        </div>
      </section>

      <h1 className="section-title">Search Result</h1>
      <section className={!bookContext.waitingForSearch ? "book-list-section" : "book-list-section section"}>
        <div className="book-list-content">
          {!bookContext.waitingForSearch ?
            <>
              <BookList bookList={bookContext.bookSearchResult}/>
              
              {/* <BookListPagination
                page={bookContext.page}
                handlePageChange={handlePageChange}
                setBookSearchResult={(b) => bookContext.setBookSearchResult(b)}
              /> */}
            </>
            :
            <h2>Waiting for search...</h2>
          }
        </div>
      </section>
    </>
  );
};

SearchBook.propTypes = {
  pageSize: PropTypes.number
}

export default SearchBook;