package com.laraforum.service.impl;

import com.laraforum.model.User;
import com.laraforum.repository.UserRepository;
import com.laraforum.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;


    public void save(User user) {
        userRepository.save(user);
    }
}
