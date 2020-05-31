package com.larablog.model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.DiscriminatorColumn;
import javax.persistence.DiscriminatorType;
import javax.persistence.Entity;

@Entity
@Data
@DiscriminatorColumn(name="type",discriminatorType = DiscriminatorType.STRING,columnDefinition = "VARCHAR(45)")
@ToString(callSuper = true)
@EqualsAndHashCode(callSuper = true)
public class Meta extends BaseEntity{

    @Column(name="name",columnDefinition = "VARCHAR(255) NOT NULL")
    private String name;
}
