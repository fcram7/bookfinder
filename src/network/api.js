import ApiEndpoints from '../globals/api-endpoints';
import axios from 'axios';

const Api = {
  async getSearchedBook(books) {
    try {
      const searchBook = await axios.get(ApiEndpoints.SEARCH(books));
  
      return searchBook;
    } catch (error) {
      console.error(error);
    }
  },

  async getBookById(bookId) {
    try {
      const getBookById = await axios.get(ApiEndpoints.GET_BOOK_BY_ID(bookId));
  
      return getBookById.data;
    } catch (error) {
      console.error(error);
    }
  }
};

export default Api;