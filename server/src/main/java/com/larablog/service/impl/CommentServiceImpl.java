package com.larablog.service.impl;

import com.larablog.model.Comment;
import com.larablog.repository.CommentRepository;
import com.larablog.service.CommentService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CommentServiceImpl implements CommentService{
    @Autowired
    private CommentRepository commentRepository;

    @Override
    public void save(Comment comment) {
        commentRepository.save(comment);
    }

    @Override
    public void delete(int commendID) {
        commentRepository.deleteById(commendID);
    }

    @Override
    public Optional<Comment> findById(int commentID) {
        return commentRepository.findById(commentID);
    }
}
