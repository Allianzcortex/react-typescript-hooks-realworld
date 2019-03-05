package com.laraforum.service.impl;

import com.laraforum.model.Favorite;
import com.laraforum.repository.FavoriteRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class FavoriteServiceImpl {

    @Autowired
    private FavoriteRepository favoriteRepository;

    public void deleteByArticleIdAndUserId(int articleId, int userId) {
        favoriteRepository.deleteByArticleIdAndUserId(articleId, userId);
    }

    public void save(Favorite favorite) {
        favoriteRepository.save(favorite);
    }

}
