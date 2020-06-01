package com.larablog.service;

import com.larablog.model.Article;
import com.larablog.model.User;
import com.larablog.model.dto.ArticleWhenCreated;
import org.springframework.data.domain.Page;

import java.util.List;
import java.util.Optional;

public interface ArticleService {

    // search by page
    Page<Article> pageFrontArticle(Integer page, Integer limit, List<String> sort);

    
}
