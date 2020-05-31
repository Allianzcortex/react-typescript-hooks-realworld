package com.larablog.repository;

import com.larablog.model.Meta;
import org.springframework.data.jpa.repository.JpaRepository;

import java.util.Optional;

public interface MetaRepository<META extends Meta> extends JpaRepository<Meta,Integer> {

    Optional<META> findByName(String name);
}
