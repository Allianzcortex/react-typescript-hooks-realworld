package com.laraforum.service.impl;

import com.laraforum.model.ArticleComment;
import com.laraforum.repository.ArticleCommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticleCommentServiceImpl {

    @Autowired
    private ArticleCommentRepository articleCommentRepository;

    public void save(ArticleComment articleComment) {
        articleCommentRepository.save(articleComment);
    }

    public void delete(int commendId) {
        articleCommentRepository.deleteByCommendID(commendId);
    }

    public List<ArticleComment> findByArticleId(int articleId) {
        return articleCommentRepository.findByArticleID(articleId);
    }

    public List<Integer> findBatchCommmentsId(int articleId) {
        return articleCommentRepository.findBatchCommmentsId(articleId);
    }
}
