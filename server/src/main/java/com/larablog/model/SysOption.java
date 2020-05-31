package com.larablog.model;

import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;

@Entity
@ToString(callSuper = true)
@EqualsAndHashCode(callSuper = true)
@Data
public class SysOption extends BaseEntity {

    @Column(name = "option_key", columnDefinition = "VARCHAR(100) NOT NULL UNIQUE")
    private String optionKey;


    @Column(name = "option_value", columnDefinition = "VARCHAR(1023) NOT NULL")
    private String optionValue;
}
