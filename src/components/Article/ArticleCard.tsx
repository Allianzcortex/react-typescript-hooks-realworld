import React, {
    useEffect,
    useState,
  } from "react";
import { Link } from "react-router-dom";
import { useArticleService } from "../../hooks";
import { IArticle } from "../../models/types";


interface IProps  {
    article:IArticle
}

// TODO need to add article link
export const ArticleCard=({article}:IProps)=>{

    return (<div>

        <Link to={`article/${article.slug}`} 
        >{article.title}</Link> &nbsp;

        {article.author.username}
    </div>)

}