package com.laraforum.repository;

import com.laraforum.model.Comment;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.List;

public interface CommentRepository extends CrudRepository<Comment, Integer> {

    void deleteById(int id);


}
