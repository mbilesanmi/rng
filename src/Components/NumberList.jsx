import React from 'react';
import ReactPaginate from 'react-paginate';

const NumberList = ({
  handlePageClick, handleSortClick, numbers, order,
  pagination, sort
}) => {
  const paginate = <ReactPaginate
    previousLabel='Previous'
    nextLabel='Next'
    breakLabel={<a href="">...</a>}
    breakClassName='break-me'
    pageCount={pagination.totalPages
      ? pagination.totalPages : 0}
    marginPagesDisplayed={3}
    pageRangeDisplayed={pagination.totalPages > 9 ? 10
      : pagination.totalPages}
    onPageChange={handlePageClick}
    containerClassName='pagination justify-content-center'
    pageClassName='page-item'
    pageLinkClassName='page-link'
    nextClassName='page-item next-button'
    previousClassName='page-item'
    previousLinkClassName='page-link'
    nextLinkClassName='page-link'
    disabledClassName='disabled'
    activeClassName={'active'} />;
  
  return (
    <div>
      <h3>Generated Phone Numbers</h3>
      <table className="table table-striped table-hover">
        <thead className="thead-dark">
          <tr>
            <th id="id" name="id" onClick={handleSortClick} style={{ cursor:'pointer' }}>
              ID { sort === 'id'
                ? <i className={( order === 'asc'
                ? "fas fa-sort-up"
                : "fas fa-sort-down"
                )}></i>
              : '' }
            </th>
            <th name="phoneNo" onClick={handleSortClick} style={{ cursor:'pointer' }}>
              Phone Number { sort === 'phoneNo'
                ? <i className={( order === 'asc'
                ? "fas fa-sort-up"
                : "fas fa-sort-down"
                )}></i>
              : '' }
            </th>
          </tr>
        </thead>
        <tbody>
          {
            numbers.map(num =>
              <tr key={num.id}>
                <td>{num.id}</td>
                <td>{num.phoneNo}</td>
              </tr>
            )
          }
        </tbody>
      </table>

      {pagination.totalPages > 0 && paginate}
    </div>
  );
};

export default NumberList;
