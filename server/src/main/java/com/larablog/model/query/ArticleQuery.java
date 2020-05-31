package com.larablog.model.query;

import com.larablog.model.enums.ArticleStatus;
import lombok.Data;

@Data
public class ArticleQuery {

    private String title;

    private ArticleStatus status;
    
    private Integer priority;
}
