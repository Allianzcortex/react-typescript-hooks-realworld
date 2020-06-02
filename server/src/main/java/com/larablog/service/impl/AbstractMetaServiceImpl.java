package com.larablog.service.impl;

import com.larablog.exception.NotFoundException;
import com.larablog.model.Meta;
import com.larablog.repository.ArticleMetaRepository;
import com.larablog.repository.ArticleRepository;
import com.larablog.repository.MetaRepository;
import com.larablog.service.ArticleMetaService;
import com.larablog.service.MetaService;

import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.transaction.annotation.Transactional;


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
        META meta = metaRepository.findById(id)
                .orElseThrow(() -> new NotFoundException(Meta.class));
        meta.setName(name);
        return metaRepository.save(meta);
    }

}
