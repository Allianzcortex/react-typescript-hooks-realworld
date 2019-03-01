package com.laraforum.controller;

import com.laraforum.authentication.JwtProvider;
import com.laraforum.model.User;
import com.laraforum.model.dao.UserWithEmailAndPassWord;
import com.laraforum.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.Map;

/**
 * User register/login function
 */

@Controller
@RequestMapping("api/users")
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
        userService.save(user);
        return jwtProvider.createToken(user.getUserName());
    }

    @PostMapping("login")
    public ResponseEntity<User> login(@RequestBody UserWithEmailAndPassWord user) {
        String email = user.getEmail();
        String passWord = user.getPassWord();
        return new ResponseEntity<>(userService.LoginWithUserEmail(email, passWord), HttpStatus.OK);
    }


    // @RequestHeader(value="AuthUser") String userName
    @GetMapping("current")
    public @ResponseBody String getCurrentUser(
            HttpServletRequest httpServletRequest, @RequestHeader HttpHeaders httpHeaders) {
//
       Map<String,String> headerMap=httpHeaders.toSingleValueMap();

       System.out.println(headerMap);

       return (String) httpServletRequest.getAttribute("AuthUser");


    }

}
