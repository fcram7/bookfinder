/* eslint-disable react-hooks/exhaustive-deps */
import { Button, Grid, Stack, Typography } from '@mui/material';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useContext, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

import Api from '../../network/api';
import { BookDetailContext } from '../../contexts/bookSearchContext';

const DetailSection = () => {
  const detailTextGap = {
    marginBottom: "1rem",
  };

  const bookDetailContext = useContext(BookDetailContext);
  const { id } = useParams();

  const bookButtonClickHandler = (link) => {
    window.open(link, "_blank");
  }

  const stripHtmlTags = (str) => {
    if ((str === null) || (str === ''))
      return false;
    else
      str = str.toString();
    return str.replace(/<[^>]*>/g, ' ');
  }

  useEffect(() => {
    const fetchBookDetailData = async (id) => {
      bookDetailContext.setIsLoading(true);
      
      try {
        const bookDetailData = await Api.getBookById(id);
        if (bookDetailData) {
          bookDetailContext.setBookDetail(bookDetailData);
        }
      } catch (error) {
        console.error(error)
      }

      bookDetailContext.setIsLoading(false);
    };

    fetchBookDetailData(id)
  }, [id]);

  if(bookDetailContext.isLoading) {
    return <p>Loading...</p>
  }

  return (
    <>
      <Helmet>
        <title>{`${bookDetailContext.bookDetail && bookDetailContext.bookDetail.volumeInfo && bookDetailContext.bookDetail.volumeInfo.title} | BookLook`}</title>
        <meta name="description" content="Have a look on the book details!"/>
        <link rel="canonical" href="/bookDetail/:id" />
      </Helmet>
      <section className="book-detail-section section">
        <div className="book-detail-section-container container">
          <div className="book-detail-section-content">
            <Grid container gap={6}>
              <Grid item>
                {bookDetailContext.bookDetail &&
                  bookDetailContext.bookDetail.volumeInfo &&
                  bookDetailContext.bookDetail.volumeInfo.imageLinks &&
                  (
                    <img
                      src={bookDetailContext.bookDetail.volumeInfo?.imageLinks.medium}
                    />
                  )
                }
              </Grid>
              <Grid item xs={6}>
                {bookDetailContext.bookDetail &&  
                  (
                    <>
                      <Typography sx={detailTextGap} color="#515052" variant="h5" className="book-card">
                        {bookDetailContext.bookDetail.volumeInfo.title}
                      </Typography>
                      <Typography color="#515052" variant="body1" className="book-card">
                        Author(s): 
                      </Typography>
                      <Typography color="#515052" variant="h6" className="book-card">
                        {bookDetailContext.bookDetail.volumeInfo.authors?.join(", ")}
                      </Typography>
                      <Typography color="#515052" variant="body1" className="book-card">
                        Publisher: 
                      </Typography>
                      <Typography sx={detailTextGap} color="#515052" variant="h6" className="book-card">
                        {bookDetailContext.bookDetail.volumeInfo.publisher}
                      </Typography>
                      <Typography color="#515052" variant="body1" className="book-card">
                        Categories: 
                      </Typography>
                      <Typography sx={detailTextGap} color="#515052" variant="h6" className="book-card">
                        {bookDetailContext.bookDetail.volumeInfo.categories?.join(" | ")}
                      </Typography>
                      <Typography color="#515052" variant="body1" className="book-card">
                        Description: 
                      </Typography>
                      <Typography sx={detailTextGap} color="#515052" variant="h6" className="book-card">
                        {stripHtmlTags(bookDetailContext.bookDetail.volumeInfo.description)}
                      </Typography>
                      <Typography color="#515052" variant="body1" className="book-card">
                        Total pages: 
                      </Typography>
                      <Typography sx={detailTextGap} color="#515052" variant="h6" className="book-card">
                        {bookDetailContext.bookDetail.volumeInfo.pageCount}
                      </Typography>
                      <Typography color="#515052" variant="body1" className="book-card">
                        Price:
                      </Typography>
                      <Typography sx={detailTextGap} color="#515052" variant="h6" className="book-card">
                        IDR {bookDetailContext.bookDetail.saleInfo.listPrice?.amount}
                      </Typography>
                      <Stack 
                        spacing={2}
                        sx={{
                          width: '30%'
                        }}
                      >
                        <Button
                          variant="contained"
                          startIcon={<LocalGroceryStoreIcon />}
                          style={{
                            color: '#F1F2EE',
                            backgroundColor: '#1E555C'
                          }}
                          onClick={() => bookButtonClickHandler(bookDetailContext.bookDetail.saleInfo.buyLink)}
                        >
                          <Typography
                            sx={{
                              textTransform: 'capitalize'
                            }}
                          >
                            Buy This Book
                          </Typography>
                        </Button>
                        <Button
                          variant="outlined"
                          startIcon={<OpenInNewIcon />}
                          style={{
                            color: '#1E555C',
                            borderColor: '#1E555C'
                          }}
                          onClick={() => bookButtonClickHandler(bookDetailContext.bookDetail.accessInfo.webReaderLink)}
                        >
                          <Typography
                            sx={{
                              textTransform: 'capitalize'
                            }}
                          >
                            Check Book Sample
                          </Typography>
                        </Button>
                      </Stack>
                    </>
                  )
                }
              </Grid>
            </Grid>
          </div>
        </div>
      </section>
    </>
  );
}

export default DetailSection;