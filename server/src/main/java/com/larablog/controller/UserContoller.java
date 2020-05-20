package com.larablog.controller;

import com.larablog.authentication.JwtProvider;
import com.larablog.model.User;
import com.larablog.model.dto.UserWithEmailAndPassWord;
import com.larablog.service.impl.UserServiceImpl;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.HttpHeaders;
import org.springframework.http.HttpStatus;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import javax.transaction.Transactional;
import java.util.Date;
import java.util.Map;

/**
 * user register/login function
 */

@RestController
@RequestMapping("api/users")
public class UserContoller {

    @Autowired
    private JwtProvider jwtProvider;

    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private RoleServiceImpl roleService;


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
    // TODO shoud remember the path problem
    @PostMapping("signin")
    public String save(@RequestBody User user) {
        String userName = user.getUserName();
        // basic authorization
        // bwlow line is for test
        roleService.findByRowNumber(1);
        System.err.println("roleService 是：" + roleService
                + " | " + roleService.findByRowNumber(1)
        );
        // also for test

        user.setRoles(user.getRoles() + "1");
        user.getPermissions().add(1);
        System.out.println("userservice is" + userService);
        userService.save(user);
        System.out.println("jwtProvider is " + jwtProvider);


        String jwtToken = jwtProvider.createToken(user.getUserName());
        // write token to repository
        Date now = new Date();

        // return the result

        return jwtToken;

    }

    @PostMapping("login")
    public ResponseEntity<User> login(@RequestBody UserWithEmailAndPassWord user) {
        String email = user.getEmail();
        String passWord = user.getPassWord();
        return new ResponseEntity<>(userService.LoginWithUserEmail(email, passWord), HttpStatus.OK);
    }


    @GetMapping("current")
    public @ResponseBody
    String getCurrentUser(
            HttpServletRequest httpServletRequest, @RequestHeader HttpHeaders httpHeaders) {

        Map<String, String> headerMap = httpHeaders.toSingleValueMap();

        System.out.println(headerMap);
        return (String) httpServletRequest.getAttribute("AuthUser");


    }

    @Transactional
    @PostMapping("logout")
    public void logout(HttpServletRequest httpServletRequest) {
        // remove jwt token from database
        String userName = (String) httpServletRequest.getAttribute("AuthUser");
        User user = userService.findByUserName(userName);
        System.out.println("user name is " + userName);

    }

    // TODO
//    @GetMapping("get/favorite")
//    public List<Article> findArticlesFavoritedByUser(HttpServletRequest httpServletRequest) {
//        String userName = (String) httpServletRequest.getAttribute("AuthUser");
//
//    }

}
