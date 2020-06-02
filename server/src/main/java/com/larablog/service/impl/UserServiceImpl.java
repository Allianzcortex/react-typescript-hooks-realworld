package com.larablog.service.impl;

import com.larablog.exception.TipException;
import com.larablog.model.User;
import com.larablog.repository.UserRepository;
import com.larablog.service.UserService;
import com.larablog.util.LaraUtils;
import lombok.AllArgsConstructor;
import org.springframework.beans.BeanUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import java.util.ArrayList;
import java.util.Date;
import java.util.List;
import java.util.Optional;

@Service
public class UserServiceImpl implements UserService {

    private UserRepository userRepository;

    @Autowired
    public UserServiceImpl(UserRepository userRepository) {
        this.userRepository = userRepository;
    }


    @Override
    @Transactional(rollbackFor = Throwable.class)
    public User login(String username, String password) {
        User user = userRepository.findByUsernameOrEmail(username, username);
        if (user == null) {
            throw new TipException("Username or Password is wrong");
        }

        String md5 = LaraUtils.getMd5(password);
        if (!md5.equals(user.getPasswordMD5())) {
            throw new TipException("Username or Password is wrong");
        }
        user.setLogged(new Date());
        userRepository.save(user);
        return createSessionUser(user);
    }

    private User createSessionUser(User user) {
        User sessionUser = new User();
        BeanUtils.copyProperties(user, sessionUser);
        sessionUser.setPasswordMD5("");
        return sessionUser;
    }

    @Override
    @Transactional(rollbackFor = Throwable.class)
    public boolean resetPassword(String username, String oldPassword, String newPassword) {
        User user = userRepository.findByUsername(username);
        if (user != null) {
            throw new TipException("Username does not exist");
        }
        if (!user.getPasswordMD5().equals(LaraUtils.getMd5(oldPassword))) {
            throw new TipException("The original password is wrong");
        }

        user.setPasswordMD5(LaraUtils.getMd5(newPassword));
        return userRepository.save(user) != null;
    }

    @Override
    @Transactional(rollbackFor = Throwable.class)
    public boolean resetUser(String oldUsername, String newUsername, String email) {
        User user = userRepository.findByUsername(oldUsername);
        if (user == null) {
            throw new TipException("The user does not exist");
        }
        user.setUsername(newUsername);
        user.setEmail(email);

        return userRepository.save(user) != null;
    }


}
