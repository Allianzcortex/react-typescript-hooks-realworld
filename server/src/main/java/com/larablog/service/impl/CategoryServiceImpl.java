package com.larablog.service.impl;

import com.larablog.model.Article;
import com.larablog.model.ArticleMeta;
import com.larablog.model.Category;
import com.larablog.repository.ArticleMetaRepository;
import com.larablog.repository.ArticleRepository;
import com.larablog.repository.MetaRepository;
import com.larablog.service.ArticleMetaService;
import com.larablog.service.CategoryService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.List;
import java.util.Set;

import static com.larablog.service.impl.ArticleServiceImpl.ARTICLE_CACHE_NAME;

@Service
public class CategoryServiceImpl extends AbstractMetaServiceImpl<Category> implements CategoryService {

    @Autowired
    public CategoryServiceImpl(ArticleMetaRepository articleMetaRepository,
                               MetaRepository<Category> metaRepository,
                               ArticleRepository articleRepository,
                               ArticleMetaService articleMetaService) {
        super(articleMetaRepository, metaRepository, articleRepository, articleMetaService);
    }

    @Override
    public Integer delete(String name) {
        Integer metaId = super.delete(name);

        List<ArticleMeta> middles = articleMetaRepository.findAllByMetaId(metaId);
        middles.forEach(middle -> {
            articleRepository.findById(middle.getArticleId()).ifPresent(article -> {
                // Since one article can only be in one category,its ok to put only empty value into it
                article.setCategory("");
                articleRepository.save(article);
            });
        });
        articleMetaRepository.deleteAllByMetaId(metaId);
        return metaId;
    }

    @Override
    @Transactional(rollbackFor = Throwable.class)
    @CacheEvict(value = ARTICLE_CACHE_NAME, allEntries = true, beforeInvocation = true)
    public Category update(Integer id, String name) {
        Category category = super.update(id, name);
        Set<Integer> articleIds = articleMetaService.getArticleIdsByMetaId(id);
        List<Article> articles = articleRepository.findAllById(articleIds);
        articles.forEach(article -> {
            String metaStr = article.getCategory();
            String newMetaStr = metaStr.replace(category.getName(), name);
            if (!newMetaStr.equals(metaStr)) {
                article.setCategory(newMetaStr);
                articleRepository.save(article);
            }
        });
        return category;
    }

    @Override
    @Transactional(rollbackFor = Throwable.class)
    public Category save(String name) {
        Category category = new Category();
        category.setName(name);
        return metaRepository.save(category);
    }


}
