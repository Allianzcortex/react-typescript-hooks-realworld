import React from "react";
import {
  fireEvent,
  render,
  waitFor,
} from "@testing-library/react";
import "@testing-library/jest-dom/extend-expect";
import { Pagination } from "../Pagination";
import { PER_PAGE_COUNT } from "../../../utils";

describe("test pagination", () => {
  const setState = jest.fn();
  const initialPage = 1;
  const pageCount = 18; // 18 / 10 = 1.8, 2 pages

  it("render tagList successfully", async () => {
    const { getByText } = render(
      <Pagination
        count={pageCount}
        currentPage={initialPage}
        setCurrentPage={setState}
      />
    );

    await waitFor(() => {
      // extra page number should not exist
      expect(getByText(Math.floor(initialPage / PER_PAGE_COUNT) + 2)).not
        .toBeInTheDocument;
      
      // fire event and see whether page number is changed
      fireEvent.click(getByText(initialPage + 1));
      expect(setState).toBeCalledWith(initialPage + 1);
    });
  });
});
