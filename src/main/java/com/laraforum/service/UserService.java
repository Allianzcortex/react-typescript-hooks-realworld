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
   // User LoginWithUserName(String userName, String passWord);
    // TODO later implement feature
   User LoginWithUserEmail(String email,String passWord);

}
