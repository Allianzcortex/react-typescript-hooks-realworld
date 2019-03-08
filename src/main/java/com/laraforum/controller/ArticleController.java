package com.laraforum.controller;

import com.fasterxml.jackson.annotation.JsonView;
import com.laraforum.exception.CustomException;
import com.laraforum.exception.UnAuthorizedException;
import com.laraforum.model.*;
import com.laraforum.model.dao.ArticleView;
import com.laraforum.model.dao.ArticleWhenCreated;
import com.laraforum.repository.ArticleRepository;
import com.laraforum.service.impl.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;
import java.util.Optional;

@RestController
@RequestMapping("api/articles")
public class ArticleController {

    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private ArticleServiceImpl articleService;

    @Autowired
    private ArticleRepository articleRepository;

    @Autowired
    private FavoriteServiceImpl favoriteService;

    @Autowired
    private CommentServiceImpl commentService;

    @Autowired
    private ArticleCommentServiceImpl articleCommentService;

    @PostMapping("create")
    public Article createArticle(HttpServletRequest httpServletRequest, @RequestBody Map<String, ArticleWhenCreated> article) {

        String userName = (String) httpServletRequest.getAttribute("AuthUser");
        User user = userService.findByUserName(userName);

        return articleService.createArticle(user, article.get("article"));
    }

    //    @Transactional
    @GetMapping("getBy/{tagName}")
    public Article findByTag(@PathVariable String tagName) {
        System.out.println("要求的 tag 是 " + tagName);
        // why not ...
//        Tag tag = new Tag(tagName);
        Optional<List<Article>> articles = articleRepository.findByTag(tagName);
        if (!articles.isPresent()) {
            throw new UnAuthorizedException("fuck");
        }

        System.out.println(articles.get().size());
//        return new ResponseEntity<Article>(articles.get().get(0), HttpStatus.OK);
        for (Article article : articles.get()) {
            System.out.println(article.getTagList());
        }
        return articles.get().get(0);
    }

    @GetMapping("get/single/{slug}")
    public Article findBySlug(@PathVariable String slug) {
        return articleRepository.findBySlug(slug);
    }

    // Next,all about favorite
    // 用户喜欢某篇文章
    @PostMapping("{slug}/favorite")
    @Transactional
    public void createFavoriteArticle(HttpServletRequest httpServletRequest, @PathVariable String slug) {
        String userName = (String) httpServletRequest.getAttribute("AuthUser");
        int userId = userService.findByUserName(userName).getId();
        int articleId = articleService.findBySlug(slug).getId();
        Favorite favorite = new Favorite(articleId, userId);
        favoriteService.save(favorite);
    }

    @DeleteMapping("{slug}/favorite")
    @Transactional
    public void cancelFavoriteArticle(HttpServletRequest httpServletRequest, @PathVariable String slug) {
        String userName = (String) httpServletRequest.getAttribute("AuthUser");
        int userId = userService.findByUserName(userName).getId();
        int articleId = articleService.findBySlug(slug).getId();
        // org.hibernate.InstantiationException: No default constructor for entity:  : com.laraforum.model.Favorite
        // This exception why ?
        favoriteService.deleteByArticleIdAndUserId(articleId, userId);
    }


    @GetMapping("{slug}/comments")
    public List<Comment> getCommentsOfArticle(HttpServletRequest httpServletRequest, @PathVariable String slug) {
        int articleId = articleService.findBySlug(slug).getId();
        List<Integer> commentsId = articleCommentService.findBatchCommmentsId(articleId);
        List<Comment> batchComments = new ArrayList<>();
        for (Integer id : commentsId) {
            batchComments.add(commentService.findById(id).get());
        }
        return batchComments;
    }


    //TODO 待完成
    // 关于 requestparam required=false,参考：
    // https://stackoverflow.com/questions/22373696/requestparam-in-spring-mvc-handling-optional-parameters
    @GetMapping("get/batch")
    public List<Article> getBatchArticles(
            @RequestParam("tag") String tag,
            @RequestParam("author") String author,
            @RequestParam("favorited") String favoritedByUser,
            @RequestParam(value = "limit", required = false) String limit,
            @RequestParam(value = "offset", required = false) String offset) {
        System.out.println("fuck");
        int authorId = userService.findByUserName(author).getId();
        int favoritedId = userService.findByUserName(favoritedByUser).getId();
        System.out.println(authorId);
        return articleService.findByTagAnduAndUserNameAndFavorite(tag, authorId, favoritedId).get();

    }
}
