import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import { useArticleService } from "../../hooks";
import { IArticle } from "../../models/types";
import { ArticleCard } from "./ArticleCard";
import { Pagination } from "../Home/Pagination";

interface IProps{
  articleList:IArticle[],
  count:number,
  currentPage:number,
  setCurrentPage:Dispatch<SetStateAction<number>>,
}

export const ArticleList = ({
  articleList,count,currentPage,setCurrentPage
}:IProps) => {
  // what should be props then ?

  return (
    <div>
      {articleList.map((x) => {
        return <ArticleCard article={x} />;
      })}
      <Pagination
        count={count}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};
