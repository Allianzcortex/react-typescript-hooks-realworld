import React, { Dispatch, SetStateAction, SyntheticEvent } from "react";
import { Icon, Pagination as SemanticPagination } from "semantic-ui-react";
import { PER_PAGE_COUNT } from "../../utils";

interface IProps {
  count: number; // all count
  currentPage: number;
  setCurrentPage: Dispatch<SetStateAction<number>>;
}

interface IData {
  activePage: string;
  [key: string]: string;
}

export const Pagination = ({ count, currentPage, setCurrentPage }: IProps) => {
  const totalPages =
    count % PER_PAGE_COUNT == 0
      ? count / PER_PAGE_COUNT
      : count / PER_PAGE_COUNT + 1;

  const handlePageChange = (event: SyntheticEvent, data: object) => {
    // TODO check whether we can handle it better (no need to use Number to force conversion)
    // why we cannot claim activePage string
    setCurrentPage(Number((data as IData).activePage));
  };

  return (
    <SemanticPagination
      activePage={currentPage}
      totalPages={totalPages}
      onPageChange={handlePageChange}
    />
  );
};
