package com.laraforum.repository;

import com.laraforum.model.Article;
import com.laraforum.model.Tag;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ArticleRepository extends CrudRepository<Article, Integer> {

    @Query("select a from Article a join a.tagList t where 'angularjs'=t.tagName ")
        // @Query("select a.tagList from Article a where 'angularjs'= a.tagList.tagName ")
        // https://stackoverflow.com/questions/48515309/naming-query-parameters-in-spring-repository
        // not ?1 or ?2
    Optional<List<Article>> findByTag(@Param("name") String name);

    Article findBySlug(String slug);


}
