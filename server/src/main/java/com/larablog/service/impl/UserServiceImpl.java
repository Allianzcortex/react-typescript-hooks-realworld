package com.larablog.service.impl;

import com.larablog.model.User;
import com.larablog.repository.PermissionRepository;
import com.larablog.repository.RoleRepository;
import com.larablog.repository.UserRepository;
import com.larablog.service.UserService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

// TODO 这里应该在文档里记录一下如果没有 @Service 会报什么错误
@Service
@AllArgsConstructor
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;


    @Autowired
    private RoleRepository roleRepository;

    @Autowired
    private PermissionRepository permissionRepository;

    public void save(User user) {
        userRepository.save(user);
    }

    public Optional<User> findById(int id) {
        return userRepository.findById(id);
    }

    public User signin(String userName, String passWord) {
        return userRepository.findByUserNameAndPassWord(userName, passWord);
    }

    public User LoginWithUserEmail(String email, String passWord) {
        return userRepository.findByEmailAndPassWord(email, passWord);
    }

    public List<String> getUserRoles(String userName) {
        String userRoles = userRepository.findRolesByUserName(userName);
        String[] ff = userRoles.split(":");
        List<Integer> xx = new ArrayList<>();
        for (String f : ff) {
            xx.add(Integer.parseInt(f));
        }

        return roleRepository.findRoleNameByRoleNumber(xx);
    }

    public List<String> gerUserPermissions(String userName) {
        return permissionRepository.findPermissionsByUserName(userName);
    }

    public User findByUserName(String userName) {
        return userRepository.findByUserName(userName);
    }
}
