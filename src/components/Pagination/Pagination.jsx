import ReactPaginate from "react-paginate";
import { addToLocalStorage } from "../../Utils/Functions";
import "./pagination.css";

/**
 * Renders a pagination component.
 * @param {Function} setCurrentPage  Function to update the current page
 * @param {Number} currentPage  Current page value
 * @param {string} componentKey  Key to add value to the local storage
 * @param {Number} pageCount  Number of pages
 * @returns Pagination component
 */
const Pagination = ({ setCurrentPage, currentPage, componentKey, pageCount }) => {
  /**
   * Handles page change in the pagination component by setting
   * the currentPage to a new offset value.
   * @param {Number} Selected Selected page in the pagination component
   */
  const handlePageChange = ({ selected }) => {
    setCurrentPage(selected);
    addToLocalStorage(`${componentKey}Page`, selected, false);
  };

  return (
    <ReactPaginate
      previousLabel="Prev"
      nextLabel="Next"
      breakLabel="..."
      pageRangeDisplayed={3}
      pageCount={pageCount}
      onPageChange={handlePageChange}
      forcePage={currentPage}
      marginPagesDisplayed={0}
      containerClassName={"pagination__container"}
      previousClassName={"pagination__prev-link"}
      nextClassName={"pagination__next-link"}
      activeClassName={"pagination__active"}
      disabledClassName={"pagination__disabled-link"}
      pageClassName={"pagination__page-number"}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
