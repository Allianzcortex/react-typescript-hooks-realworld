package com.larablog.service.impl;

import com.larablog.model.Favorite;
import com.larablog.repository.FavoriteRepository;
import com.larablog.service.FavoriteService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FavoriteServiceImpl implements FavoriteService {

    @Autowired
    private FavoriteRepository favoriteRepository;

    @Override
    public void deleteByArticleIdAndUserId(int articleId, int userId) {
        favoriteRepository.deleteByArticleIdAndUserId(articleId, userId);
    }

    @Override
    public void save(Favorite favorite) {
        favoriteRepository.save(favorite);
    }

}
