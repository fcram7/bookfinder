import { useState } from 'react';
import { BookDetailContext } from '../../contexts/bookSearchContext';
import DetailSection from './DetailSection';

const BookDetail = () => {
  const [bookDetail, setBookDetail] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  return ( 
    <>
      <BookDetailContext.Provider value={{
        bookDetail,
        isLoading,
        setBookDetail,
        setIsLoading,
      }}>
        <DetailSection/>
      </BookDetailContext.Provider>
    </>
   );
}
 
export default BookDetail;