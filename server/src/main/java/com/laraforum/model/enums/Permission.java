package com.laraforum.model.enums;

import lombok.Data;

import javax.persistence.*;

@Data
@Entity
@Table(name = "permission")
public class Permission {
    @Id
    @GeneratedValue(strategy = GenerationType.AUTO)
    private int id;

    private int permissionNumber;

    @Column(name = "permission_value")
    private String permissionValue;


}