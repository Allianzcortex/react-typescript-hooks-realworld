package com.laraforum.service.impl;

import com.laraforum.model.ArticleComment;
import com.laraforum.repository.ArticleCommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class ArticleCommentServiceImpl {

    @Autowired
    private ArticleCommentRepository articleCommentRepository;

    public void save(ArticleComment articleComment) {
        articleCommentRepository.save(articleComment);
    }
}
