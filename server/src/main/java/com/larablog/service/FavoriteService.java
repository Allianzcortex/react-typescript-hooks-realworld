package com.larablog.service;

import com.larablog.model.Favorite;

public interface FavoriteService {

    void deleteByArticleIdAndUserId(int articleId, int userId);

    void save(Favorite favorite);
}
