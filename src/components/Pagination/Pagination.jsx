import ReactPaginate from "react-paginate";
import { addToLocalStorage } from "../../Utils/Functions";
import "./pagination.css";

/**
 * Renders a pagination component using the required amount of items
 * to be displayed per page, total amount of items in the main array, and
 * a function to update the currentPage.
 * @param {Number} itemsPerPage  Items required to be displayed per page
 * @param {Number} totalItems  Total items in the main array
 * @param {Number} currentPage  Current page value
 * @param {Function} setCurrentPage  Function to update the current page
 * @param {Function} setOffset  Function to update the offset value
 * @param {string} componetKey  Key to add value to the local storage
 * @returns Pagination component
 */
const Pagination = ({
  itemsPerPage,
  totalItems,
  currentPage,
  setCurrentPage,
  setOffSet,
  componentKey,
}) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  /**
   * Handles page change in the pagination component by setting
   * the currentPage to a new offset value.
   * @param {Number} Selected Selected page in the pagination component
   */
  const handlePageChange = ({ selected }) => {
    const newOffset = (selected * itemsPerPage) % totalItems;
    setCurrentPage(selected);
    setOffSet(newOffset);
    addToLocalStorage(`${componentKey}Page`, selected, false);
    addToLocalStorage(`${componentKey}Offset`, newOffset, false);
  };

  return (
    <ReactPaginate
      previousLabel="Prev"
      nextLabel="Next"
      breakLabel="..."
      pageRangeDisplayed={3}
      pageCount={totalPages}
      onPageChange={handlePageChange}
      marginPagesDisplayed={0}
      forcePage={currentPage}
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
