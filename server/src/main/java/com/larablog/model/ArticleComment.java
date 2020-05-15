package com.larablog.model;

import lombok.*;

import javax.persistence.*;

@Data
@Entity
@Table(name = "article_comment")
@RequiredArgsConstructor
@NoArgsConstructor
public class ArticleComment {

    @javax.persistence.Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @NonNull
    @Column(name = "article_id")
    private int articleID;

    @NonNull
    @Column(name = "comment_id")
    private int commendID;
}
