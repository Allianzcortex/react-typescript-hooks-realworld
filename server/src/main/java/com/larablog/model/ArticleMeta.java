package com.larablog.model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.Table;

@Entity
@Data
@Table(name="middle")
@ToString(callSuper = true)
@EqualsAndHashCode(callSuper = true)

public class ArticleMeta extends BaseEntity {
    @Column(name="article_id",columnDefinition = "INT NOT NULL")
    private Integer articleId;

    /**
     * Currently meta will include :
     */
    @Column(name="meta_id",columnDefinition = "INT NOT NULL")
    private Integer metaId;
}
