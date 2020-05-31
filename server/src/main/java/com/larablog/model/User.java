package com.larablog.model;


import lombok.*;


import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import java.util.Date;
import java.util.HashSet;
import java.util.Set;

@Entity
@ToString(callSuper = true)
@EqualsAndHashCode(callSuper = true)
@Data
public class User extends BaseEntity {

    @Column(name = "username", columnDefinition = "VARCHAR(45) NOT NULL UNIQUE")
    private String username;

    @Column(name = "password_md5", columnDefinition = "VARCHAR(200) NOT NULL")
    private String passwordMD5;

    @Column(name = "email", columnDefinition = "VARCHAR(45)")
    private String email;

    @Column(name = "nickname", columnDefinition = "VARCHAR(45)")
    private String nickName;

    @Column(name = "logged", columnDefinition = "TIMESTAMP NOT NULL DEFAULT current_timestamp")
    private Date logged;

    @Override
    protected void prePersist() {
        super.prePersist();
        if (logged == null)
            logged = new Date();
    }

}
