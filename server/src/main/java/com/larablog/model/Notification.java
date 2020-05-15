package com.larablog.model;

import lombok.*;

import javax.persistence.Entity;
import javax.persistence.GeneratedValue;
import javax.persistence.GenerationType;
import javax.persistence.Id;
import java.util.Date;

@Data
@Entity
@Builder
@AllArgsConstructor
@NoArgsConstructor
public class Notification {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @NonNull
    private int sendId;

    @NonNull
    private int receiveId;

    @NonNull
    private int articleId;

    @NonNull
    private boolean isRead = false;

    @NonNull
    private Date createTime;
}
