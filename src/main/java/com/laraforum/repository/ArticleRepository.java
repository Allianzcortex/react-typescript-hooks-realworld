package com.laraforum.repository;

import com.laraforum.model.Article;
import com.laraforum.model.Tag;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ArticleRepository extends CrudRepository<Article, Integer> {

//    @Query("select a.tags from Article a where tag a.tagList")
    public List<Article> findByTag(Tag tag);


}
