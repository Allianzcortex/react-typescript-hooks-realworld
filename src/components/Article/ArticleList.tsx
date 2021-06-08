import React, {
    useEffect,
    useState,
  } from "react";
import { useArticleService } from "../../hooks";

export const ArticleList=()=>{
    // what should be props then ?

    const articleService = useArticleService()

    useEffect(()=>{
        const retrieve=async ()=>{
            const res =await articleService.getArticles(1)
            console.log(res)
        }
        retrieve()
    },[])

    return (<div>xx</div>)
    
}