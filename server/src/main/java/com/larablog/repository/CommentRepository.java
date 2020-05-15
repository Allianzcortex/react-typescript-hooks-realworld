package com.larablog.repository;

import com.larablog.model.Comment;
import org.springframework.data.repository.CrudRepository;

public interface CommentRepository extends CrudRepository<Comment, Integer> {

    void deleteById(int id);


}
