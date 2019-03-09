package com.laraforum.service;

import com.laraforum.model.Article;
import com.laraforum.model.User;
import com.laraforum.model.dao.ArticleWhenCreated;

import java.util.List;
import java.util.Optional;

public interface ArticleService {

    Article createArticle(User user, ArticleWhenCreated article);

    Article findBySlug(String slug);

    Optional<List<Article>> findByTagAnduAndUserNameAndFavorite(String tag, int authorId, int favorited);
}
