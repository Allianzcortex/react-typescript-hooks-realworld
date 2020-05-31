package com.larablog.model;

import lombok.Data;

import javax.persistence.*;
import java.util.Date;


@MappedSuperclass
@Data
public class BaseEntity {

    @Id
    @Column(name = "Id")
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private Integer id;

    @Column(name = "created",columnDefinition = "TIMESTAMP NOT NULL DEFAULT current_timestamp")
    private Date created;

    @Column(name = "modified",columnDefinition = "TIMESTAMP NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp")
    private Date modified;

    @PrePersist
    protected void prePersist() {
        if (created == null)
            created = new Date();
        if (modified == null)
            modified = new Date();
    }

    @PreUpdate
    protected void preUpdate() {
        modified=new Date();
    }

}
