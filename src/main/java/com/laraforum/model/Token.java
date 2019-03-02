package com.laraforum.model;

import lombok.*;


import javax.persistence.*;
import javax.validation.constraints.NotEmpty;
import javax.validation.constraints.NotNull;
import java.util.Date;


@Data
@Entity
@NoArgsConstructor
@RequiredArgsConstructor
public class Token {

    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

//    @NotEmpty
    @OneToOne()
    @NonNull
    private User user;

    // @NonNull is for @SomeArgsConstructor
    // https://stackoverflow.com/questions/23761242/java-lombok-omitting-one-field-in-allargsconstructor
    @NotEmpty
    @NonNull
    private String token;

//    @NotEmpty
    // for Date ,still cannot use @NotEmpty
    // https://stackoverflow.com/questions/30249829/error-no-validator-could-be-found-for-type-java-time-localdate
    // java8 suuport issue
    @NonNull
    private Date updateTime;
}
