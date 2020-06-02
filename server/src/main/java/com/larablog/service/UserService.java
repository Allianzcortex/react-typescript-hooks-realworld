package com.larablog.service;

import com.larablog.model.User;


public interface UserService {

    User login(String username,String password);

    boolean resetPassword(String username,String oldPassword,String newPassword);

    boolean resetUser(String oldNickname,String newNickname,String email);

}
