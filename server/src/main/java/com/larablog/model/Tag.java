package com.larablog.model;

import com.fasterxml.jackson.annotation.*;
import lombok.*;

import javax.persistence.*;
import java.util.HashSet;
import java.util.Set;

@Data
@Entity
@DiscriminatorValue("tag")
public class Tag extends Meta{

}
