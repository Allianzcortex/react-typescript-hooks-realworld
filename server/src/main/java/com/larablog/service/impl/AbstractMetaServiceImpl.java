package com.larablog.service.impl;

import com.larablog.model.Meta;
import com.larablog.repository.ArticleMetaRepository;
import com.larablog.repository.ArticleRepository;
import com.larablog.repository.MetaRepository;
import com.larablog.service.MetaService;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;

@RequiredArgsConstructor(onConstructor_ = @Autowired)
public class AbstractMetaServiceImpl<META extends Meta> implements MetaService<META> {

    private ArticleMetaRepository articleMetaRepository;
    private MetaRepository<META> metaMetaRepository;
    private ArticleRepository articleRepository;

}
