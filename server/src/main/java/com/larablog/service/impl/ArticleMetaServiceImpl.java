package com.larablog.service.impl;

import com.larablog.model.ArticleMeta;
import com.larablog.repository.ArticleMetaRepository;
import com.larablog.service.ArticleMetaService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Map;
import java.util.Set;
import java.util.stream.Collectors;

@Service
@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class ArticleMetaServiceImpl implements ArticleMetaService {

    private final ArticleMetaRepository articleMetaRepository;

    @Autowired
    public ArticleMetaServiceImpl(ArticleMetaRepository articleMetaRepository) {
        this.articleMetaRepository = articleMetaRepository;
    }

    @Override
    public Map<Integer, List<ArticleMeta>> getMetaIdMiddleListMap() {
        List<ArticleMeta> middles = articleMetaRepository.findAll();
        return middles.stream().collect(Collectors.groupingBy(ArticleMeta::getMetaId));

    );

//    Set<Integer> getMetaIdsByArticleId(Integer articleId);
//
//    Set<Integer> getArticleIdsByMetaId(Integer metaId);
    }
