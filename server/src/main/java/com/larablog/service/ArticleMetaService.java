package com.larablog.service;

import com.larablog.model.ArticleMeta;

import java.util.List;
import java.util.Map;
import java.util.Set;

public interface ArticleMetaService {

    Map<Integer, List<ArticleMeta>> getMetaIdMiddleListMap();

    Set<Integer> getMetaIdsByArticleId(Integer articleId);

    Set<Integer> getArticleIdsByMetaId(Integer metaId);
}
