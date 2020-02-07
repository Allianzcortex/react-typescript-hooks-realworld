package com.laraforum.model;

import lombok.*;

import javax.persistence.*;

@Data
@Entity
@RequiredArgsConstructor
@NoArgsConstructor
@Table(name="user_article_favorite")
public class Favorite {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @NonNull
    private int articleId;

    @NonNull
    private int userId;
}
