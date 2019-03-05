package com.laraforum.service.impl;

import com.laraforum.model.Comment;
import com.laraforum.repository.CommentRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class CommentServiceImpl {
    @Autowired
    private CommentRepository commentRepository;

    public void save(Comment comment) {
        commentRepository.save(comment);
    }

    public void delete(int commendID) {
        commentRepository.deleteById(commendID);
    }

    public Optional<Comment> findById(int commentID) {
        return commentRepository.findById(commentID);
    }
}
