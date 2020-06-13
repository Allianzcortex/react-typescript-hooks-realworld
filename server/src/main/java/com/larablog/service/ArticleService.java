package com.larablog.service;

import com.larablog.model.Article;
import com.larablog.model.dto.Archive;
import com.larablog.model.query.ArticleQuery;
import org.springframework.data.domain.Page;

import java.util.List;

public interface ArticleService {

    // search by page
    Page<Article> pageFrontArticle(Integer page, Integer limit, List<String> sort);

    // get article by id, mainly in blog frontend
    Article getFrontArticle(Integer id);

    Page<Article> pageAdminArticle(Integer page, Integer limit, ArticleQuery query);

    // get article by id, for backend
    Article getAdminArticle(Integer id);

    Integer save(Article article);

    void delete(Integer id);

    long count();

    List<Archive> getArchives();
}
