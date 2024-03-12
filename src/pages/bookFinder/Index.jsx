import { BookSearchContext } from '../../contexts/bookSearchContext';
import SearchBook from './SearchBook';

import useInput from '../../hooks/useInput';
import { useState } from 'react';
import { Helmet } from 'react-helmet-async';

const BookFinder = () => {
  const pageSize = 10;

  const [bookSearch, bookSearchChangeHandler] = useInput("");

  const [bookSearchResult, setBookSearchResult] = useState([]);
  const [waitingForSearch, setWaitingForSearch] = useState(true);
  const [page, setPage] = useState(1);
  const [dataPerPage, setDataPerPage] = useState(10);
  const [pagination, setPagination] = useState({
    count: 0,
    from: 0,
    to: pageSize,
  });
  return ( 
    <>
      <Helmet>
        <title>Book Finder | BookLook</title>
        <meta name="description" content="Browse any book that you like!"/>
        <link rel="canonical" href="/bookFinder" />
      </Helmet>
      <BookSearchContext.Provider value={{
        bookSearch,
        bookSearchChangeHandler,
        bookSearchResult,
        waitingForSearch,
        page,
        dataPerPage,
        pagination,
        setBookSearchResult,
        setWaitingForSearch,
        setPage,
        setDataPerPage,
        setPagination,
        pageSize
      }}>
        <SearchBook />
      </BookSearchContext.Provider>
    </>
   );
}
 
export default BookFinder;