package com.laraforum.repository;

import com.laraforum.model.Article;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ArticleRepository extends CrudRepository<Article, Integer> {

    @Query("select a from Article a join a.tagList t" +
            " where t.tagName= :name ")
        // @Query("select a.tagList from Article a where 'angularjs'= a.tagList.tagName ")
        // https://stackoverflow.com/questions/48515309/naming-query-parameters-in-spring-repository
        // not ?1 or ?2
    Optional<List<Article>> findByTag(@Param("name") String name);

    //    @Query("select a from Article a join a.tagList t join Favorite f on f.userId=a.userId where t.tagName= :tag and f.userId= :favorited and a.userId= :authorId ")
    @Query("select a from Article a  join a.tagList t join Favorite f on f.articleId=a.id where f.userId= :favorited and a.userId= :authorId and t.tagName= :tag ")
    Optional<List<Article>> findByTagAnduAndUserNameAndFavorite(@Param("tag") String tag,
                                                                @Param("authorId") int authorId,
                                                                @Param("favorited") int favorited);


    Article findBySlug(String slug);

    @Query(value = "select * from article where MATCH(body) AGAINST (:keyWord)", nativeQuery = true)
    List<Article> findByKeyWord(@Param("keyWord") String keyWord);


}
