package com.larablog.model;

import com.fasterxml.jackson.annotation.*;
import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@Getter
@Setter
@RequiredArgsConstructor
@NoArgsConstructor
public class Tag {


    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @NonNull
    // @Column(unique = true,length = 32)
    private String tagName;

    @Override
    public int hashCode() {
        return id;
    }

    @JsonBackReference
    @ManyToMany(mappedBy = "tagList")
    private Set<Article> articles = new HashSet<Article>();

    @Override
    public String toString() {
        return tagName;

    }

}
