package com.laraforum.service;

import com.laraforum.model.Comment;

import java.util.Optional;

public interface CommentService {

    void save(Comment comment);

    void delete(int commendID);

    Optional<Comment> findById(int commentID);
}
