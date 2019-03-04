package com.laraforum.repository;

import com.laraforum.model.User;
import org.springframework.data.repository.CrudRepository;

public interface UserRepository extends CrudRepository<User, Integer> {
    /**
     * by default , there are 3 methods
     */

    User findByUserName(String userName);

    User findByUserNameAndPassWord(String userName, String passWord);

    User findByEmailAndPassWord(String email,String passWord);

}
