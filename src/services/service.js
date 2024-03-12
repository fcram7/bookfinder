const service = {
  getData: async ({ bookList, from, to }) => {

    const data = bookList.slice(from, to);

    return {
      count: bookList.length,
      data: data,
    }
  },
};

export default service;