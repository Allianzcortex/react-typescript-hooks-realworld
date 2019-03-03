package com.laraforum.controller;

import com.laraforum.model.Article;
import com.laraforum.model.User;
import com.laraforum.model.dao.ArticleWhenCreated;
import com.laraforum.service.impl.ArticleServiceImpl;
import com.laraforum.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("api/articles")
public class ArticleController {

    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private ArticleServiceImpl articleService;

    @PostMapping("create")
    public Article createArticle(HttpServletRequest httpServletRequest, @RequestBody ArticleWhenCreated article) {

        System.out.println("从 controller 角度 ");
        System.out.println(article.getTagList());
        System.out.println(article.getTitle());
        String userName = (String) httpServletRequest.getAttribute("AuthUser");
        User user = userService.findByUserName(userName);

        return articleService.createArticle(user, article);
    }
}
