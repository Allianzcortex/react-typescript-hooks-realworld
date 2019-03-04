package com.laraforum.repository;

import com.laraforum.model.ArticleComment;
import org.springframework.data.repository.CrudRepository;

public interface ArticleCommentRepository extends CrudRepository<ArticleComment, Integer> {

}
