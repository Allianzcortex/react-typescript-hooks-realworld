package com.laraforum.repository;

import com.laraforum.model.ArticleComment;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface ArticleCommentRepository extends CrudRepository<ArticleComment, Integer> {
    void deleteByCommendID(int id);

    List<ArticleComment> findByArticleID(int articleID);
}
