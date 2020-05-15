package com.larablog.service;

import com.larablog.model.Comment;

import java.util.Optional;

public interface CommentService {

    void save(Comment comment);

    void delete(int commendID);

    Optional<Comment> findById(int commentID);
}
