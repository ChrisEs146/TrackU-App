/**
 * Calculates the page count, and pagination offset based on the
 * data and the current page.
 * @param {*} data
 * @param {Number} resultsPerPage
 * @param {Number} currentPage
 * @returns PageCount, page and slice of projects
 */
const usePaginate = (data, resultsPerPage, currentPage) => {
  const pageCount = Math.ceil(data?.length / resultsPerPage);
  const page = currentPage === pageCount ? currentPage - 1 : currentPage;
  const offSet = page * resultsPerPage;
  const items = data?.slice(offSet, offSet + resultsPerPage);
  return [pageCount, page, items];
};

export default usePaginate;
