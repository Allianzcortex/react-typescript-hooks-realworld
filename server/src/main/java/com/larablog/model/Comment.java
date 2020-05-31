package com.larablog.model;

import lombok.*;

import javax.persistence.*;
import java.util.Date;

@Data
@Entity
@ToString(callSuper = true)
@EqualsAndHashCode(callSuper = true)
@Table(name="comment")
public class Comment extends BaseEntity{

    /**
     *  The id of article that owns the comment
     */
    @Column(name="article_id",columnDefinition = "INT NOT NULL")
    private Integer articleId;

    @Column(name="parent_id",columnDefinition = "INT")
    private Integer parentId;

    @Column(name="content",columnDefinition = "TEXT NOT NULL")
    private String content;

    @Column(name="name",columnDefinition = "VARCHAR(255)")
    private String name;

    @Column(name="email",columnDefinition = "VARCHAR(255)")
    private String email;


}
