import { Pagination } from '@mui/material';
import PropTypes from 'prop-types';

import { useContext, useEffect } from 'react';
import service from '../../../services/service';
import { BookSearchContext } from '../../../contexts/bookSearchContext';

const BookListPagination = ({
  setBookSearchResult,
  page,
  handlePageChange
}) => {
  const bookContext = useContext(BookSearchContext);

  useEffect(() => {
    const fetchService = async () => {
      const serviceData = await service.getData({
        bookList: bookContext.bookSearchResult,
        from: bookContext.pagination.from,
        to: bookContext.pagination.to,
      });

      bookContext.setPagination({
        ...bookContext.pagination,
        count: serviceData.count,
      })

      setBookSearchResult(serviceData.data);

      console.log(serviceData);
    }

    fetchService();
  }, [bookContext.pagination.from, bookContext.pagination.to])

  return ( 
    <div className="search-book-result-pagination flex">
      <Pagination
        count={Math.ceil(bookContext.pagination.count / bookContext.pageSize)}
        page={page}
        variant="outlined" 
        color="primary"
        onChange={handlePageChange}
      />
    </div>
  );
}

BookListPagination.propTypes = {
  setBookSearchResult: PropTypes.func,
  page: PropTypes.number,
  bookList: PropTypes.array,
  handlePageChange: PropTypes.func,
}

export default BookListPagination;