package com.larablog.model.dto;

import com.larablog.model.Article;
import lombok.Data;

import java.util.Date;

@Data
public class ArticleInfo {

    private Integer id;

    private String title;

    private Date created;

    public ArticleInfo(Article article) {
        super();
        this.id = article.getId();
        this.title = article.getTitle();
        this.created = article.getCreated();
    }
}
