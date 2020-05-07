package com.laraforum.model.enums;


import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "role")
public class Role {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;


    private int roleNumber;

    @Column(name = "role_value")
    private String roleValue;


}
