package com.laraforum.model;

import com.laraforum.model.enums.Role;
import lombok.Data;
import org.springframework.core.annotation.Order;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import java.util.ArrayList;
import java.util.List;

@Order(1)
@Data
@Entity
@Table(name = "User")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @NotEmpty
    @Email(message = "please provide valid email")
    // This will make no sense if you create database by yourself
    // https://stackoverflow.com/questions/30460596/jpa-column-unique-true-what-is-really-point-of-having-unique-attribute
    @Column(unique = true)
    private String email;

    @NotEmpty
    private String userName;

    @NotEmpty
    private String passWord;

    @ElementCollection(targetClass = Role.class)
    @Enumerated(EnumType.STRING)
    private List<Role> roles;

    private boolean isActivated = false;


    public void setRoles(Role newRole) {
        // TODO ??? add string cnnot work ?
        this.roles = new ArrayList<Role>();
        this.roles.add(newRole);
    }


}
