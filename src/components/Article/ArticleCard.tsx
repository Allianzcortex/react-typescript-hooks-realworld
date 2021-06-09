import React, {
    useEffect,
    useState,
  } from "react";
import { IArticle } from "../../models/types";


interface IProps  {
    article:IArticle
}

export const ArticleCard=({article}:IProps)=>{
    return <div>
        {article.title}
        ---
        {article.author.username}
    </div>

}