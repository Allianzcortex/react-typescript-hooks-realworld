package com.laraforum.service.impl;

import com.laraforum.model.User;
import com.laraforum.model.enums.Role;
import com.laraforum.repository.UserRepository;
import com.laraforum.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

// TODO 这里应该在文档里记录一下如果没有 @Service 会报什么错误
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;


    public void save(User user) {
        user.setRoles(Role.Lara_USER);
        userRepository.save(user);
    }

    public Optional<User> findById(int id){
        return userRepository.findById(id);
    }

    public User signin(String userName, String passWord) {
        return userRepository.findByUserNameAndPassWord(userName, passWord);
    }

    public User LoginWithUserEmail(String email, String passWord) {
        return userRepository.findByEmailAndPassWord(email, passWord);
    }

    public User findByUserName(String userName) {
        return userRepository.findByUserName(userName);
    }
}
