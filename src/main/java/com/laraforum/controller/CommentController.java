package com.laraforum.controller;


import com.laraforum.model.ArticleComment;
import com.laraforum.model.Comment;
import com.laraforum.service.impl.ArticleCommentServiceImpl;
import com.laraforum.service.impl.ArticleServiceImpl;
import com.laraforum.service.impl.CommentServiceImpl;
import com.laraforum.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;
import java.util.Date;
import java.util.HashMap;

@RestController
@RequestMapping("api/comment")
public class CommentController {

    @Autowired
    private ArticleServiceImpl articleService;

    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private CommentServiceImpl commentService;

    @Autowired
    private ArticleCommentServiceImpl articleCommentService;

    @Transactional
    @PostMapping("create/{slug}")
    public Comment createComment(HttpServletRequest httpServletRequest, @PathVariable String slug, @RequestBody HashMap<String, HashMap<String, String>> comment) {
        int articleID = articleService.findBySlug(slug).getId();

        // TODO
        // Tis is not the best way to parse the param
        Date now = new Date();
        String body = comment.get("comment").get("body");
        String userName = (String) httpServletRequest.getAttribute("AuthUser");
        System.out.println(userName);
        int userID = userService.findByUserName(userName).getId();
        Comment comment1 = Comment.builder()
                .body(body)
                .userId(userID)
                .createdAt(now)
                .updatedAt(now)
                .build();
        commentService.save(comment1);

        int comment1Id = comment1.getId();
        System.out.println("分配的 ID 是： ");
        // Next,add relationship
        ArticleComment articleComment = new ArticleComment(articleID, comment1Id);
        articleCommentService.save(articleComment);

        return comment1;
    }

}
