package com.laraforum.controller;


import com.laraforum.model.ArticleComment;
import com.laraforum.model.Comment;
import com.laraforum.service.impl.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;
import java.util.ArrayList;
import java.util.Date;
import java.util.HashMap;
import java.util.List;

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

    @Autowired
    private NotificationServiceImpl notificationService;

    @Transactional
    @PostMapping("create/{slug}")
    public Comment createComment(HttpServletRequest httpServletRequest, @PathVariable String slug, @RequestBody HashMap<String, HashMap<String, String>> comment) {
        int articleID = articleService.findBySlug(slug).getId();
        // TODO reduce to 1 line
        int receiveId = articleService.findBySlug(slug).getUserId();
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
        // TODO 虽然功能实现但这里还是需要再仔细查查，分配的 ID 显示的为空？但实际却是可以写进去
        System.out.println("分配的 ID 是： ");
        // Next,add relationship
        ArticleComment articleComment = new ArticleComment(articleID, comment1Id);
        articleCommentService.save(articleComment);

        // create notification
        notificationService.createNotification(userID, receiveId, articleID);

        return comment1;
    }


    @Transactional
    @DeleteMapping("delete/{slug}/{commentId}")
    public void deleteComment(@PathVariable String slug, @PathVariable Integer commentId) {
        commentService.delete(commentId);
        articleCommentService.delete(commentId);
    }

    @GetMapping("/get/batch/{slug}")
    public List<Comment> getAllCommentsInOneArticle(@PathVariable String slug) {
        // TODO check whether slug is legal

        int articleId = articleService.findBySlug(slug).getId();
        List<ArticleComment> middleResults = articleCommentService.findByArticleId(articleId);
        List<Comment> commentResults = new ArrayList<>();
        for (ArticleComment articleComment : middleResults) {
            int commentId = articleComment.getCommendID();
            // should add more judgement
            commentResults.add(commentService.findById(commentId).get());
        }
        return commentResults;
    }

}
