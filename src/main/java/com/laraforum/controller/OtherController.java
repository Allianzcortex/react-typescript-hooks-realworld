package com.laraforum.controller;

import com.laraforum.model.Article;
import com.laraforum.service.impl.ArticleServiceImpl;
import com.laraforum.service.impl.SearchServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.web.bind.annotation.*;

import javax.transaction.Transactional;
import java.util.List;

@RestController
@RequestMapping("api/")
public class OtherController {

    @Autowired
    private ArticleServiceImpl articleService;

    @Autowired
    private SearchServiceImpl searchService;

    @Value("${fulltext.search.hibernate.search.use}")
    private boolean useHibernateSearch = true;

    // ① implement search function
    // ② there will be two ways: 1. use mysql search function 2.
    // use lucene(hibernate-search as wrapper)


    @Transactional
    @PostMapping("search/{keyWord}")
    public List<Article> searchByKeyWord(@PathVariable String keyWord) {
        if (!useHibernateSearch) {
            // use mysql
            return articleService.findByKeyWord(keyWord);
        } else {
            // use lucene
            System.out.println("开始使用 fuzzy search");
            return searchService.fuzzySearch(keyWord);
        }

    }
}
