package com.larablog.repository;

import com.larablog.model.Article;
import com.larablog.model.enums.ArticleStatus;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.JpaSpecificationExecutor;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface ArticleRepository extends JpaRepository<Article, Integer>, JpaSpecificationExecutor<Article> {

    /** This is how we do it previously : naming query
    @Query("select a from Article a join a.tagList t" +
            " where t.tagName= :name ")
     Now we use specifications instead
    **/
    Optional<Article> findByIdAndStatus(Integer id, ArticleStatus status);

    /** Filter by article status(published or draft)
     *
     * @param status
     * @param sort
     * @return A list of articles
     */
    List<Article> findAllByStatus(ArticleStatus status, Sort sort);

    List<Article> findAllByStatusNot(ArticleStatus notStatus,Sort sort);

    Page<Article> findAllByStatus(ArticleStatus status, Pageable pageable);

    int countByStatusNot(ArticleStatus notStatus);

}
