package com.laraforum.service;

import com.laraforum.model.User;


public interface UserService {

    /**
     * register function
     *
     * @param user
     */
    void save(User user);

    /**
     *
     */
    User signin(String userName, String passWord);
}
