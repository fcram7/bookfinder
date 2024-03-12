import Config from './config';

const ApiEndpoints = {
  SEARCH: (book) => `${Config.BASE_URL}volumes?q=${encodeURIComponent(book)}&key=${Config.KEY}&maxResults=20`,
  GET_BOOK_BY_ID: (bookId) => `${Config.BASE_URL}volumes/${encodeURIComponent(bookId)}?key=${Config.KEY}`,
}

export default ApiEndpoints;