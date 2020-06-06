package com.larablog.service.impl;

import com.larablog.exception.NotFoundException;
import com.larablog.exception.TipException;
import com.larablog.model.Article;
import com.larablog.model.ArticleMeta;
import com.larablog.model.Meta;
import com.larablog.model.dto.ArticleInfo;
import com.larablog.model.dto.MetaInfo;
import com.larablog.model.enums.ArticleStatus;
import com.larablog.repository.ArticleMetaRepository;
import com.larablog.repository.ArticleRepository;
import com.larablog.repository.MetaRepository;
import com.larablog.service.ArticleMetaService;
import com.larablog.service.MetaService;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Sort;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.util.*;
import java.util.stream.Collectors;


@RequiredArgsConstructor(onConstructor_ = @Autowired)
public abstract class AbstractMetaServiceImpl<META extends Meta> implements MetaService<META> {


    /*
    The Intellij IDEA analysis is wrong here. The access must be
    protected so the DI can be used by subclass
     */
    protected ArticleMetaRepository articleMetaRepository;
    protected MetaRepository<META> metaRepository;
    protected ArticleRepository articleRepository;
    protected ArticleMetaService articleMetaService;

    @Autowired
    public AbstractMetaServiceImpl(ArticleMetaRepository articleMetaRepository,
                                   MetaRepository<META> metaRepository,
                                   ArticleRepository articleRepository,
                                   ArticleMetaService articleMetaService) {
        this.articleMetaRepository = articleMetaRepository;
        this.metaRepository = metaRepository;
        this.articleRepository = articleRepository;
        this.articleMetaService = articleMetaService;
    }

    @Override
    @Transactional(rollbackFor = Throwable.class)
    public Integer delete(String name) {
        META meta = metaRepository.findByName(name)
                .orElseThrow(() -> new NotFoundException(Meta.class));
        metaRepository.delete(meta);
        return meta.getId();
    }

    @Override
    @Transactional(rollbackFor = Throwable.class)
    public META update(Integer id, String name) {
        if (StringUtils.isEmpty(name)) {
            throw new TipException("Meta Cannot Be Empty");
        }
        META meta = metaRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(Meta.class));
        meta.setName(name);
        return metaRepository.save(meta);
    }

    @Override
    @Transactional(rollbackFor = Throwable.class)
    public List<META> findMetaByArticleId(Integer articleId) {
        Set<Integer> metaIds = articleMetaService.getMetaIdsByArticleId(articleId);
        return metaRepository.findAllById(metaIds);
    }


    @Override
    @Transactional(rollbackFor = Throwable.class)
    public boolean saveOrRemoveMetas(String nameStr, Integer articleId) {
        if (articleId == null) {
            throw new TipException("Meta with related Id cannot be null");
        }
        removeMetas(nameStr, articleId);
        saveMetas(nameStr, articleId);
        return true;
    }

    /**
     * remove all possible metas
     *
     * @param nameStr
     * @param articleId
     */
    private void removeMetas(String nameStr, Integer articleId) {
        String[] nameArr = nameStr.split(",");
        // remove possible duplicated attributes
        Set<String> nameSet = new HashSet<>(Arrays.asList(nameArr));
        List<META> metas = findMetaByArticleId(articleId);
        for (META meta : metas) {
            if (!nameSet.contains(meta.getName())) {
                articleMetaRepository.deleteByArticleIdAndMetaId(articleId, meta.getId());
            }
        }
    }

    private void saveMetas(String nameStr, Integer articleId) {
        List<META> metas = findMetaByArticleId(articleId);
        Set<String> metaSet = metas.stream().map(META::getName).collect(Collectors.toSet());
        for (String name : nameStr.split(",")) {
            if (StringUtils.isEmpty(name))
                continue;
            if (!metaSet.contains(name)) {
                Meta meta = metaRepository.findByName(name)
                        .orElseGet(() -> save(name));

                articleMetaRepository.save(new ArticleMeta(articleId, meta.getId()));
            }
        }
    }


    @Override
    public List<MetaInfo> getFrontMetaInfos() {
        // only find published article to be displayed in blog part
        List<META> metas = metaRepository.findAll();
        List<Article> articles = articleRepository.findAllByStatus(ArticleStatus.PUBLISH, Sort.by(Sort.Direction.DESC, "id"));
        return getMetaInfos(metas, articles);
    }

    @Override
    public List<MetaInfo> getAdminMetaInfos() {
        // only find undeleted(both published & draft)
        List<META> metas = metaRepository.findAll();
        List<Article> articles = articleRepository.findAllByStatusNot(ArticleStatus.DELTE, Sort.by(Sort.Direction.DESC, "id"));
        return getMetaInfos(metas, articles);
    }

    private List<MetaInfo> getMetaInfos(List<? extends Meta> metas, List<Article> articles) {
        // 1. convert posts to <id:article> map
        Map<Integer, Article> articleMap = articles.stream().collect(Collectors.toMap(Article::getId, article -> article));

        Map<Integer, List<ArticleMeta>> metaIdMiddleListMap = articleMetaService.getMetaIdMiddleListMap();

        return metas.stream().map(meta -> {
            MetaInfo metaInfo = new MetaInfo();
            metaInfo.setId(((Meta) meta).getId());
            metaInfo.setName(((Meta) meta).getName());

            List<ArticleMeta> middleList = metaIdMiddleListMap.computeIfAbsent(((Meta) meta).getId(), article -> new ArrayList<>());
            List<ArticleInfo> articleInfoList = middleList.stream()
                    .map(middle -> articleMap.get(middle.getArticleId()))
                    .filter(Objects::nonNull)
                    .map(ArticleInfo::new)
                    .collect(Collectors.toList());
            metaInfo.setArticleInfos(articleInfoList);
            return metaInfo;
        }).collect(Collectors.toList());
    }
}
