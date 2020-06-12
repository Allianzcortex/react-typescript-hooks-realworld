package com.larablog.controller.admin;

import com.larablog.model.Article;
import com.larablog.model.dto.Pagination;
import com.larablog.model.dto.RestResponse;
import com.larablog.model.query.ArticleQuery;
import com.larablog.service.ArticleService;
import com.larablog.util.Constants;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.web.bind.annotation.*;

@RestController
@RequestMapping("/api/admin/post")
public class ArticleController {

    private ArticleService articleService;

    @Autowired
    public ArticleController(ArticleService articleService) {
        this.articleService = articleService;
    }

    @GetMapping
    public RestResponse<Pagination<Article>> page(
            @RequestParam(required = false, defaultValue = "0") Integer page,
            @RequestParam(required = false, defaultValue = Constants.PAGE_SIZE) Integer limit,
            ArticleQuery query) {
        Page<Article> articles = articleService.pageAdminArticle(page, limit, query);
        return RestResponse.ok(Pagination.of(articles));
    }

    @GetMapping("{id}")
    public RestResponse<Article> get(@PathVariable Integer id) {
        Article article = articleService.getAdminArticle(id);
        return RestResponse.ok(article);
    }

    @DeleteMapping("{id}")
    public RestResponse delete(@PathVariable Integer id) {
        articleService.delete(id);
        return RestResponse.ok();
    }

    @GetMapping("count")
    public RestResponse<Long> count() {
        Long count = articleService.count();
        return RestResponse.ok(count);
    }

//    @PostMapping
    // TODO refactor the whole param with form
//    public RestResponse<Integer> save(@RequestParam(value="id",required = false) Integer id,
//                                      @RequestParam(value="title") String title,
//                                      )

}
