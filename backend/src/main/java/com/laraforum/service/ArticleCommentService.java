package com.laraforum.service;

import com.laraforum.model.ArticleComment;

import java.util.List;

public interface ArticleCommentService {

    void save(ArticleComment articleComment);

    void delete(int commendId);

    List<ArticleComment> findByArticleId(int articleId);

    List<Integer> findBatchCommmentsId(int articleId);
}
