package com.laraforum.controller;

import com.laraforum.authentication.JwtProvider;
import com.laraforum.model.User;
import com.laraforum.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.Date;

/**
 * User register/login function
 */

@RestController
@RequestMapping("users")
public class UserContoller {

    @Autowired
    private JwtProvider jwtProvider;

    @Autowired
    private UserService userService;

    /**
     * POST /api/users
     * {
     * "user":{
     * "username": "Jacob",
     * "email": "jake@jake.jake",
     * "password": "jakejake"
     * }
     * }
     */

    @GetMapping("1")
    public String xx() {
        return "hello";
    }

    // TODO shoud remember the path problem
    @PostMapping("signin")
    public String save(@RequestBody User user) {
        System.out.println("注册用户");
        userService.save(user);
        return jwtProvider.createToken(user.getUserName(), user.getRoles(),new Date());
    }


}
