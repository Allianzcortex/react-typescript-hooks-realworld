package com.laraforum.service.impl;

import com.laraforum.model.Favorite;
import com.laraforum.repository.FavoriteRepository;
import com.laraforum.service.FavoriteService;
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
