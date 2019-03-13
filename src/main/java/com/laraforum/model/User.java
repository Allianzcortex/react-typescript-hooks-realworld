package com.laraforum.model;

import com.laraforum.model.enums.Role;
import lombok.*;
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
@Table(name = "user")
@Builder
@NoArgsConstructor
@AllArgsConstructor
public class User {

    @Id
    @GeneratedValue(strategy = GenerationType.IDENTITY)
    private int id;

    @NotEmpty
    @Email(message = "please provide valid email")
    // This will make no sense if you create database by yourself
    // https://stackoverflow.com/questions/30460596/jpa-column-unique-true-what-is-really-point-of-having-unique-attribute
//    @Column(unique = true)
    private String email;

    @NotEmpty
    @Column(name="user_name")
    private String userName;

    @NotEmpty
    @Column(name="pass_word")
    private String passWord;

    @Column(name="is_activated")
    private boolean isActivated = false;

//    @ElementCollection
//    private Set<Integer> roles = new HashSet<>();
//    Not available , because it means spring jpa will still generate user_roles to
//    store the relationship , and this is not what we want
    @Builder.Default
    private String roles = "";

    @Builder.Default
    @Column(name = "permissions")
    @ElementCollection(fetch = FetchType.EAGER)
    @CollectionTable(name = "user_permissions")
    private Set<Integer> permissions = new HashSet<>();

    @Builder.Default
    @Column(name="notification_count")
    private int notificationCount = 0;


//    public User(@NotEmpty @NonNull @Email(message = "please provide valid email") String email, @NotEmpty @NonNull String userName, @NotEmpty @NonNull String passWord) {
//        this.email = email;
//        this.userName = userName;
//        this.passWord = passWord;
//    }
}
