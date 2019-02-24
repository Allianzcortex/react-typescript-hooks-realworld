package com.laraforum.model;

import lombok.Data;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;

@Data
@Entity
@Table(name = "User")
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    @NotEmpty
    @Email(message = "please provide valid email")
    private String email;

    @NotEmpty
    private String userName;

    @NotEmpty
    private String passWord;

    private boolean isActivated = false;


}
