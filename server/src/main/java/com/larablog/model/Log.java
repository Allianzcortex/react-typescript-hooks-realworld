package com.larablog.model;

import com.larablog.model.enums.LogType;
import lombok.Builder;
import lombok.Data;
import lombok.EqualsAndHashCode;
import lombok.ToString;

import javax.persistence.Column;
import javax.persistence.Entity;
import javax.persistence.EnumType;
import javax.persistence.Enumerated;

@Entity
@ToString(callSuper = true)
@EqualsAndHashCode(callSuper = true)
@Data
@Builder
public class Log extends BaseEntity {
    @Column(name = "data", columnDefinition = "TEXT")
    private String data;

    @Column(name = "message", columnDefinition = "VARCHAR(255)")
    private String message;

    @Enumerated(EnumType.STRING)
    @Column(name = "type", columnDefinition = "VARCHAR(255)")
    private LogType type;

    @Column(name = "ip", columnDefinition = "VARCHAR(255)")
    private String ip;

    @Column(name = "user_id", columnDefinition = "VARCHAR(255)")
    private Integer userId;

}
