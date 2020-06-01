package com.larablog.repository;

import com.larablog.model.User;
import org.springframework.data.jpa.repository.JpaRepository;


public interface UserRepository extends JpaRepository<User, Integer> {
    User findByUsername(String username);

    User findByUsernameOrEmail(String username,String email);

}
