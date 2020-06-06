package com.larablog.service.impl;

import com.larablog.model.Article;
import com.larablog.model.ArticleMeta;
import com.larablog.model.Tag;
import com.larablog.repository.ArticleMetaRepository;
import com.larablog.repository.ArticleRepository;
import com.larablog.repository.MetaRepository;
import com.larablog.service.ArticleMetaService;
import com.larablog.service.TagService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;

import static com.larablog.service.impl.ArticleServiceImpl.ARTICLE_CACHE_NAME;

@Service
public class TagServiceImpl extends AbstractMetaServiceImpl<Tag> implements TagService {
    @Autowired
    public TagServiceImpl(ArticleMetaRepository articleMetaRepository,
                          MetaRepository<Tag> metaRepository,
                          ArticleRepository articleRepository,
                          ArticleMetaService articleMetaService) {
        super(articleMetaRepository, metaRepository, articleRepository, articleMetaService);
    }


    @Override
    @CacheEvict(value = ARTICLE_CACHE_NAME, allEntries = true, beforeInvocation = true)
    @Transactional(rollbackFor = Throwable.class)
    public Integer delete(String name) {
        Integer metaId = super.delete(name);
        List<ArticleMeta> middles = articleMetaRepository.findAllByMetaId(metaId);
        middles.forEach(middle -> {
            articleRepository.findById(middle.getArticleId()).ifPresent(article -> {
                article.setTags(this.resetTag(article.getTags(), name));
                articleRepository.save(article);
            });
        });
        articleMetaRepository.deleteAllByMetaId(metaId);
        return metaId;
    }

    @Override
    public Tag save(String name) {
        Tag tag = new Tag();
        tag.setName(name);
        return metaRepository.save(tag);
    }

    @Override
    public Tag update(Integer id, String name) {
        Tag tag = super.update(id, name);

        Set<Integer> articleIds = articleMetaService.getArticleIdsByMetaId(id);
        List<Article> articles = articleRepository.findAllById(articleIds);
        articles.forEach(article -> {
            String tagStrs = article.getTags();
            String newTagStr = tagStrs.replace(tag.getName(), name);
            if (!newTagStr.equals(tagStrs)) {
                article.setTags(newTagStr);
                articleRepository.save(article);
            }
        });

        return tag;
    }

    private String resetTag(String tagStr, String name) {
        if (tagStr == null || tagStr.length() == 0)
            return tagStr;
        StringBuilder builder = new StringBuilder();
        for (String tag : tagStr.split(",")) {
            if (!name.equals(tag))
                builder.append(tag).append(",");
        }
        return builder.substring(0, builder.length() - 1).toString();

    }
}
