package com.laraforum.repository;

import com.laraforum.model.User;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface UserRepository extends CrudRepository<User, Integer> {
    /**
     * by default , there are 3 methods
     */

    User findByUserName(String userName);

    User findByUserNameAndPassWord(String userName, String passWord);

    User findByEmailAndPassWord(String email, String passWord);

    //TODO may be can be replaced with JSQL
    @Query(value="select u.roles from User u where u.userName= :userName")
    String findRolesByUserName(@Param("userName") String userName);

}
