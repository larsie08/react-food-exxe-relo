import React, { useContext } from 'react';
import ReactPaginate from 'react-paginate';

import { AppContext } from '../../App';

import styles from './Pagination.module.scss';

const Pagination = () => {
  const { setCurrentPage } = useContext(AppContext);

  return (
    <ReactPaginate
      className={styles.root}
      breakLabel="..."
      nextLabel=">"
      previousLabel="<"
      onPageChange={(event) => setCurrentPage(event.selected + 1)}
      pageRangeDisplayed={4}
      pageCount={3}
      renderOnZeroPageCount={null}
    />
  );
};

export default Pagination;
