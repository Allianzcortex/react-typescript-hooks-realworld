package com.laraforum.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.laraforum.repository.ArticleRepository;
import lombok.*;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;
import java.util.*;

/**
 * relationship between user and article: use logic
 * relationship between article and tag: use @manytomany
 */
@Builder
@Getter
@Setter
@Data
@Entity
@NoArgsConstructor
@AllArgsConstructor
public class Article {

    @Autowired
    private ArticleRepository articleRepository;

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @NonNull
    private String slug;

    @NonNull
    private String title;

    @NonNull
    private String description;

    @NonNull
    private String body;

    // TODO
    // https://stackoverflow.com/questions/2302802/object-references-an-unsaved-transient-instance-save-the-transient-instance-be/2302814
    // About manytomany and manytoone , still a lot to watch
    @NonNull
    // @JsonIgnore
    @ManyToMany(cascade = {CascadeType.ALL})
    @JoinTable(name = "article_tag",
            joinColumns = @JoinColumn(name = "article_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "tag_id", referencedColumnName = "id"))
    // refer: https://projectlombok.org/features/Builder
    private Set<Tag> tagList = new HashSet<Tag>();

    public Set<Tag> getTagList(){
        Set<Tag> ff=articleRepository.fi
    }


    @NonNull
    private Date createdAt;

    @NonNull
    private Date updatedAt;

    // TODO Do we need to use final ?
    @Builder.Default
    private final boolean favorited = false;

    @Builder.Default
    private final int favoritesCount = 0;

    @NonNull
    private int userId;
}
