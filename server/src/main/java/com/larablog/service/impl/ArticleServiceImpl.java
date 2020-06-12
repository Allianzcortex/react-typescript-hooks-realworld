package com.larablog.service.impl;

import com.larablog.model.Article;
import com.larablog.model.query.ArticleQuery;
import com.larablog.repository.ArticleRepository;
import com.larablog.service.ArticleService;
import lombok.RequiredArgsConstructor;
import lombok.extern.slf4j.Slf4j;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.cache.annotation.Cacheable;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Service;

import java.util.List;

//
@Slf4j
@Service
//@RequiredArgsConstructor(onConstructor = @Autowired)
public class ArticleServiceImpl implements ArticleService {

    public static final String ARTICLE_CACHE_NAME="articles";



    @Autowired
    private ArticleRepository articleRepository;


    @Override
    @Cacheable(value = ARTICLE_CACHE_NAME, key = "'font_articles['+#page+':'+#limit+':'+#sort+']'")
    public Page<Article> pageFrontArticle(Integer page, Integer limit, List<String> sort) {
        Pageable pageable = PageRequest.of(page,limit,new Sort(Sort.Direction.DESC,sort));

    }

    @Override
    public Article getFrontArticle(Integer id) {
        return null;
    }

    @Override
    public Page<Article> pageAdminArticle(Integer page, Integer limint, ArticleQuery query) {
        return null;
    }

    @Override
    public Article getAdminArticle(Integer id) {
        return null;
    }

    @Override
    public Integer save(Article article) {
        return null;
    }

    @Override
    public void delete(Integer id) {

    }

    @Override
    public Integer count() {
        return null;
    }


//
//    @Transactional
//    @Override
//    public Article createArticle(User user, ArticleWhenCreated article) {

        // TODO 检测文章 title 是否已存在，
        // 如果存在的话返回文章早已存在异常
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

//    @Override
//    public Article findBySlug(String slug) {
////        return articleRepository.findBySlug(slug);
//        return null;
//    }
//
//    @Override
//    public Optional<List<Article>> findByTagAnduAndUserNameAndFavorite(String tag, int authorId, int favorited) {
////        return articleRepository.findByTagAnduAndUserNameAndFavorite(tag, authorId, favorited);
//        return null;
//    }
//
//    public List<Article> findByKeyWord(String keyWord) {
////        return articleRepository.findByKeyWord(keyWord);
//        return null;
//    }

}
