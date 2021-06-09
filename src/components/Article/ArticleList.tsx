import React, { useEffect, useState } from "react";
import { useArticleService } from "../../hooks";
import { IArticle } from "../../models/types";
import { ArticleCard } from "./ArticleCard";
import { Pagination } from "./Pagination";

export const ArticleList = () => {
  // what should be props then ?

  const articleService = useArticleService();
  const [articleList, setArticleList] = useState<IArticle[]>([]);
  const [count, setCount] = useState<number>(0);
  const [currentPage, setCurrentPage] = useState<number>(1);

  useEffect(() => {
    const retrieve = async () => {
      const res = await articleService.getArticles(1);
      console.log(res);
      setArticleList(res.data.articles);
      setCount(res.data.articlesCount)
    };
    retrieve();
  }, []);

//   useEffect(()=>{
//       console.log(currentPage)
//   },[currentPage])

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
