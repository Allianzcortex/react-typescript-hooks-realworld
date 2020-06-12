package com.larablog.service.impl;

import com.larablog.exception.NotFoundException;
import com.larablog.model.Article;
import com.larablog.model.enums.ArticleStatus;
import com.larablog.model.query.ArticleQuery;
import com.larablog.repository.ArticleRepository;
import com.larablog.service.ArticleService;
import com.larablog.service.CategoryService;
import com.larablog.service.TagService;
import com.larablog.util.LaraUtils;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.CacheEvict;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.data.jpa.domain.Specification;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.util.StringUtils;

import javax.persistence.criteria.Predicate;
import java.util.ArrayList;
import java.util.List;

//
@Slf4j
@Service
//@RequiredArgsConstructor(onConstructor = @Autowired)
public class ArticleServiceImpl implements ArticleService {

    public static final String ARTICLE_CACHE_NAME = "articles";


    @Autowired
    private ArticleRepository articleRepository;

    @Autowired
    private CategoryService categoryService;

    @Autowired
    private TagService tagService;


    @Override
    @Cacheable(value = ARTICLE_CACHE_NAME, key = "'font_articles['+#page+':'+#limit+':'+#sort+']'")
    public Page<Article> pageFrontArticle(Integer page, Integer limit, List<String> sort) {
        Pageable pageable = PageRequest.of(page, limit, new Sort(Sort.Direction.DESC, sort));
        Page<Article> result = articleRepository.findAllByStatus(ArticleStatus.PUBLISH, pageable);

        result.forEach(article -> {
            String content = LaraUtils.convertMD2HTML(article.getContent());
            article.setContent(content);
        });

        return result;

    }

    @Override
    @Cacheable(value = ARTICLE_CACHE_NAME, key = "'front_article['+#id+']'")
    public Article getFrontArticle(Integer id) {
        Article article = articleRepository.findByIdAndStatus(id, ArticleStatus.PUBLISH).orElseThrow(
                () -> new NotFoundException(Article.class)
        );
        article.setContent(LaraUtils.convertMD2HTML(article.getContent()));
        return article;
    }

    @Override
    public Page<Article> pageAdminArticle(Integer page, Integer limit, ArticleQuery articleQuery) {
        Page<Article> result = articleRepository.findAll((Specification<Article>) (root, query, criteriaBuilder) -> {
            List<Predicate> predicates = new ArrayList<>();

            predicates.add(criteriaBuilder.notEqual(root.get("status"), ArticleStatus.DELETE));
            if (!StringUtils.isEmpty(articleQuery.getStatus())) {
                predicates.add(criteriaBuilder.equal(root.get("status"), articleQuery.getStatus()));
            }
            if (!StringUtils.isEmpty(articleQuery.getTitle())) {
                predicates.add(criteriaBuilder.like(root.get("title"), "%" + articleQuery.getTitle() + "%"));
            }

            if (null != articleQuery.getPriority()) {
                predicates.add(criteriaBuilder.equal(root.get("priority"), articleQuery.getPriority()));
            }
            return criteriaBuilder.and(predicates.toArray(new Predicate[0]));

        }, PageRequest.of(page, limit, Sort.by(Sort.Direction.DESC, "id")));
        // reduce transfer load
        result.forEach(article -> article.setContent(""));
        return result;
    }

    @Override
    public Article getAdminArticle(Integer id) {
        Article article = articleRepository.findByIdAndStatus(id, ArticleStatus.PUBLISH).orElseThrow(
                () -> new NotFoundException(Article.class)
        );

        return article;
    }

    @Transactional(rollbackFor = Throwable.class)
    @CacheEvict(value = ARTICLE_CACHE_NAME, allEntries = true, beforeInvocation = true)
    @Override
    public Integer save(Article article) {
        return null;
    }

    @Override
    public void delete(Integer id) {

    }

    @Override
    public long count() {
        return articleRepository.countByStatusNot(ArticleStatus.DELETE);
    }

//        Date now = new Date();
//
//        List<String> originalTagList = article.getTagList();
//        Set<Tag> outputTagList = new HashSet<Tag>();
//        System.out.println("original is " + originalTagList);
//
//        for (String or : originalTagList) {
//            outputTagList.add(new Tag(or));
//        }
//
//        Article article1 = Article.builder()
//                .slug(ArticleUtils.convertTitleToSlug(article.getTitle()))
//                .title(article.getTitle())
//                .description(article.getDescription())
//                .body(article.getBody())
//                .createdAt(now)
//                .updatedAt(now)
//                .userId(user.getId())
//                .tagList(outputTagList)
//                .build();
//
//        articleRepository.save(article1);
//        Article a = new Article();
//        return a;
//    }

}
