package com.laraforum.controller;

import com.laraforum.model.Article;
import com.laraforum.service.impl.ArticleServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@RestController
@RequestMapping("api/")
public class OtherController {

    @Autowired
    private ArticleServiceImpl articleService;

    // ① implement search function
    // ② there will be two ways: 1. use mysql search function 2.

    @PostMapping("search/{keyWord}")
    public List<Article> searchByKeyWord(@PathVariable String keyWord) {
        return articleService.findByKeyWord(keyWord);
    }
}
