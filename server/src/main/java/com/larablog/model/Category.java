package com.larablog.model;

import javax.persistence.DiscriminatorValue;
import javax.persistence.Entity;

@Entity
@DiscriminatorValue("category")
public class Category extends Meta{
}
