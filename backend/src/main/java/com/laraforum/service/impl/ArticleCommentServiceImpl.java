package com.laraforum.service.impl;

import com.laraforum.model.ArticleComment;
import com.laraforum.repository.ArticleCommentRepository;
import com.laraforum.service.ArticleCommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class ArticleCommentServiceImpl implements ArticleCommentService {

    @Autowired
    private ArticleCommentRepository articleCommentRepository;

    @Override
    public void save(ArticleComment articleComment) {
        articleCommentRepository.save(articleComment);
    }

    @Override
    public void delete(int commendId) {
        articleCommentRepository.deleteByCommendID(commendId);
    }

    @Override
    public List<ArticleComment> findByArticleId(int articleId) {
        return articleCommentRepository.findByArticleID(articleId);
    }

    @Override
    public List<Integer> findBatchCommmentsId(int articleId) {
        return articleCommentRepository.findBatchCommmentsId(articleId);
    }
}
