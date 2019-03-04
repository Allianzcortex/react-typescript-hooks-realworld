package com.laraforum.model;

import com.fasterxml.jackson.annotation.JsonIgnore;
import com.fasterxml.jackson.databind.annotation.JsonSerialize;
import lombok.Data;
import lombok.NoArgsConstructor;
import lombok.NonNull;
import lombok.RequiredArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;

import javax.persistence.*;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

@Data
@Entity
@RequiredArgsConstructor
@NoArgsConstructor
public class Tag {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @NonNull
    // @Column(unique = true,length = 32)
    private String tagName;

    @ManyToMany(mappedBy = "tagList")
    private Set<Article> articles=new HashSet<Article>();

    public Set<Article> getArticles(){

    }

}
