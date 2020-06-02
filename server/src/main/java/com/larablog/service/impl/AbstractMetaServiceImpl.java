package com.larablog.service.impl;

import com.larablog.exception.NotFoundException;
import com.larablog.exception.TipException;
import com.larablog.model.ArticleMeta;
import com.larablog.model.Meta;
import com.larablog.repository.ArticleMetaRepository;
import com.larablog.repository.ArticleRepository;
import com.larablog.repository.MetaRepository;
import com.larablog.service.ArticleMetaService;
import com.larablog.service.MetaService;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import java.util.Arrays;
import java.util.HashSet;
import java.util.List;
import java.util.Set;
import java.util.stream.Collectors;


@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class AbstractMetaServiceImpl<META extends Meta> implements MetaService<META> {

    private ArticleMetaRepository articleMetaRepository;
    private MetaRepository<META> metaRepository;
    private ArticleRepository articleRepository;
    private ArticleMetaService articleMetaService;

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
        String[] nameArr = nameStr.split(",");
        for (String name : nameArr) {
            if (StringUtils.isEmpty(name))
                continue;
            if (!metaSet.contains(name)) {
                Meta meta = metaRepository.findByName(name)
                        .orElse(() -> save(name));
                articleMetaRepository.save(new ArticleMeta(articleId, meta.getId()));
            }
        }
    }
}
