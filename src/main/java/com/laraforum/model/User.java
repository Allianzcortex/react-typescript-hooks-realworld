package com.laraforum.model;

import com.laraforum.model.enums.Role;
import lombok.Data;
import org.springframework.core.annotation.Order;

import javax.persistence.*;
import javax.validation.constraints.Email;
import javax.validation.constraints.NotEmpty;
import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.Set;

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
//    @Column(unique = true)
    private String email;

    @NotEmpty
    private String userName;

    @NotEmpty
    private String passWord;

    private boolean isActivated = false;

//    @ElementCollection
//    private Set<Integer> roles = new HashSet<>();
//    Not available , because it means spring jpa will still generate user_roles to
//    store the relationship , and this is not what we want


    private String roles="";


}
