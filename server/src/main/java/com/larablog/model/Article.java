package com.larablog.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.larablog.model.enums.ArticleStatus;
import lombok.*;


import javax.persistence.*;
import java.util.*;

/**
 * relationship between user and article: use logic
 * relationship between article and tag: use @manytomany
 */


@Data
@Entity
@ToString(callSuper = true)
@EqualsAndHashCode(callSuper = true)
@Table(name = "article")
public class Article extends BaseEntity {

    @Column(name = "title", columnDefinition = "VARCHAR(255) NOT NULL")
    private String title;

    @Column(name = "content", columnDefinition = "MEDIUMTEXT")
    private String content;

    @Column(name = "author_id", columnDefinition = "INT")
    private Integer authorId;

    @Column(name = "hits", columnDefinition = "INT DEFAULT 0 NOT NULL")
    private Integer hits;

    @Enumerated(EnumType.STRING)
    @Column(name = "status", columnDefinition = "VARCHAR(32")
    private ArticleStatus status;

    @Column(name = "priority", columnDefinition = "INT DEFAULT 0 NOT NULL")
    private Integer priority;

    @Column(name = "allow_comment", columnDefinition = "BOOLEAN DEFAULT TRUE NOT NULL")
    private Boolean allowComment;

    @Column(name = "comment_count", columnDefinition = "INT DEFAULT 0 NOT NULL")
    private Integer commentCount;

    @Override
    public void prePersist() {
        super.prePersist();
        if (hits == null)
            hits = 0;
        if (priority == null)
            priority = 0;
        if (allowComment == null)
            allowComment = true;
        if (commentCount == null)
            commentCount = 0;
    }

}
