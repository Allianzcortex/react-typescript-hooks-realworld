package com.laraforum.controller;

import com.fasterxml.jackson.annotation.JsonView;
import com.laraforum.model.Article;
import com.laraforum.model.Tag;
import com.laraforum.model.User;
import com.laraforum.model.dao.ArticleView;
import com.laraforum.model.dao.ArticleWhenCreated;
import com.laraforum.repository.ArticleRepository;
import com.laraforum.service.impl.ArticleServiceImpl;
import com.laraforum.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;
import java.util.List;
import java.util.Map;

@RestController
@RequestMapping("api/articles")
public class ArticleController {

    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private ArticleServiceImpl articleService;

    @Autowired
    private ArticleRepository articleRepository;

    @PostMapping("create")
    public Article createArticle(HttpServletRequest httpServletRequest, @RequestBody Map<String, ArticleWhenCreated> article) {

        String userName = (String) httpServletRequest.getAttribute("AuthUser");
        User user = userService.findByUserName(userName);

        return articleService.createArticle(user, article.get("article"));
    }

    @Transactional
    @GetMapping("getBy/{tagName}")
    public Article findByTag(@PathVariable String tagName) {
        System.out.println("要求的 tag 是 " + tagName);
        Tag tag = new Tag(tagName);
        List<Article> articles = articleRepository.findByTagListContaining(tag);
        return articles.get(0);
    }
}
