package com.larablog.repository;

import com.larablog.model.ArticleMeta;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.List;

public interface ArticleMetaRepository extends JpaRepository<ArticleMeta, Integer> {
    List<ArticleMeta> findAllByArticleId(Integer articleId);

    List<ArticleMeta> findAllByMetaId(Integer metaId);

    int deleteAllByArticleId(Integer articleId);

    int deleteAllByMetaId(Integer metaId);

    int deleteByArticleIdAndMetaId(Integer articleId, Integer metaId);
}
