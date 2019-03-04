package com.laraforum.model;

import lombok.Data;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;

import javax.persistence.*;
import java.util.List;
import java.util.Set;

@Data
@Entity
@RequiredArgsConstructor
public class Tag {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;


    @NonNull
    // @Column(unique = true,length = 32)
    private String tagName;

    @ManyToMany(mappedBy = "tagList")
    private Set<Article> articles;

}
