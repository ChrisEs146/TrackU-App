import ReactPaginate from "react-paginate";
import "./pagination.css";

const Pagination = ({ itemsPerPage, totalItems, setCurrentPage }) => {
  const totalPages = Math.ceil(totalItems / itemsPerPage);

  const handlePageChange = ({ selected }) => {
    const newOffset = (selected * itemsPerPage) % totalItems;
    setCurrentPage(newOffset);
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
