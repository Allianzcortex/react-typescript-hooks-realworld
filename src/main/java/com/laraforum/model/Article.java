package com.laraforum.model;

import com.fasterxml.jackson.annotation.JsonFormat;
import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.annotation.JsonIgnoreProperties;
import com.fasterxml.jackson.annotation.JsonManagedReference;
import com.laraforum.repository.ArticleRepository;
import lombok.*;
import org.hibernate.search.annotations.Indexed;
import org.springframework.beans.factory.annotation.Autowired;

import org.hibernate.search.annotations.Field;


import javax.persistence.*;
import java.util.*;

/**
 * relationship between user and article: use logic
 * relationship between article and tag: use @manytomany
 */


@Data
@Entity
@Getter
@Setter
@Builder
@Indexed
@AllArgsConstructor
@NoArgsConstructor
@Table(name="article")
public class Article {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @NonNull
    private String slug;

    @NonNull
    private String title;

    @NonNull
    private String description;

    @Field
    @NonNull
    private String body;

    // TODO
    // https://stackoverflow.com/questions/2302802/object-references-an-unsaved-transient-instance-save-the-transient-instance-be/2302814
    // About manytomany and manytoone , still a lot to watch
    @NonNull
    @JsonManagedReference
    @ManyToMany(cascade = {CascadeType.ALL})
    @JoinTable(name = "article_tag",
            joinColumns = @JoinColumn(name = "article_id", referencedColumnName = "id"),
            inverseJoinColumns = @JoinColumn(name = "tag_id", referencedColumnName = "id"))
    // refer: https://projectlombok.org/features/Builder
    private Set<Tag> tagList = new HashSet<>();

    @Override public int hashCode() {
        return id;
    }

    @NonNull
    // refer : https://www.baeldung.com/jackson-jsonformat
    @JsonFormat(shape = JsonFormat.Shape.STRING, pattern = "yyyy-MM-dd@HH:mm:ss.SSSZ")
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

    @Override
    public String toString() {
        return title + description + "fuck";

    }

}
