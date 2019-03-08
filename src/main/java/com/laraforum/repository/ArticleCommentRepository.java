package com.laraforum.repository;

import com.laraforum.model.ArticleComment;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface ArticleCommentRepository extends CrudRepository<ArticleComment, Integer> {
    void deleteByCommendID(int id);

    List<ArticleComment> findByArticleID(int articleID);

    @Query(value = "select comment_id from article_comment where article_id= :articleId", nativeQuery = true)
    List<Integer> findBatchCommmentsId(@Param("articleId") int articleId);

}
