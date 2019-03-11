package com.laraforum.service.impl;

import com.laraforum.model.User;
import com.laraforum.model.enums.Role;
import com.laraforum.repository.PermissionRepository;
import com.laraforum.repository.RoleRepository;
import com.laraforum.repository.UserRepository;
import com.laraforum.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.List;
import java.util.Optional;

// TODO 这里应该在文档里记录一下如果没有 @Service 会报什么错误
@Service
public class UserServiceImpl implements UserService {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private RoleServiceImpl roleService;

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
        System.out.println("开始----------------------------------");
        String userRoles = userRepository.findRolesByUserName(userName);
        String[] ff = userRoles.split(":");
        List<Integer> xx = new ArrayList<>();
        for (String f : ff) {
            xx.add(Integer.parseInt(f));
        }
        System.out.println("xx 是 ： " + xx);
        System.out.println("目标是：" + roleService.findRoleNameByRoleNumber(xx));
        return roleRepository.findRoleNameByRoleNumber(xx);
    }

    public List<String> gerUserPermissions(String userName) {
        return permissionRepository.findPermissionsByUserName(userName);
    }

    public User findByUserName(String userName) {
        return userRepository.findByUserName(userName);
    }
}
