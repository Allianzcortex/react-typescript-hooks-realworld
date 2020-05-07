package com.laraforum.service;

import com.laraforum.model.Favorite;

public interface FavoriteService {

    void deleteByArticleIdAndUserId(int articleId, int userId);

    void save(Favorite favorite);
}
