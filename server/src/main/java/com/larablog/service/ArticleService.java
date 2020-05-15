package com.larablog.service;

import com.larablog.model.Article;
import com.larablog.model.User;
import com.larablog.model.dto.ArticleWhenCreated;

import java.util.List;
import java.util.Optional;

public interface ArticleService {

    Article createArticle(User user, ArticleWhenCreated article);

    Article findBySlug(String slug);

    Optional<List<Article>> findByTagAnduAndUserNameAndFavorite(String tag, int authorId, int favorited);
}
