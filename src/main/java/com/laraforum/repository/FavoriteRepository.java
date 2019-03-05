package com.laraforum.repository;


import com.laraforum.model.Favorite;
import org.springframework.data.repository.CrudRepository;

public interface FavoriteRepository extends CrudRepository<Favorite, Integer> {

    void deleteByArticleIdAndUserId(int articleId, int userId);


}
