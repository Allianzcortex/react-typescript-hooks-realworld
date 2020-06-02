package com.larablog.controller.admin;

import com.larablog.model.User;
import com.larablog.model.dto.RestResponse;
import com.larablog.service.UserService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.util.StringUtils;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;

import javax.servlet.http.HttpServletRequest;

import static com.larablog.util.Constants.USER_SESSION_KEY;

@RestController
@RequestMapping("/api/admin")
public class AuthController {

    private final UserService userService;
    private final HttpServletRequest request;

    @Autowired
    public AuthController(UserService userService, HttpServletRequest request) {
        this.userService = userService;
        this.request = request;
    }

    @PostMapping("login")
    public RestResponse login(HttpServletRequest httpServletRequest, @RequestParam String username, @RequestParam String password,
                              @RequestParam boolean rememberMe) {
        if (StringUtils.isEmpty(username))
            return RestResponse.fail("Username can not be empty");
        if (StringUtils.isEmpty(password))
            return RestResponse.fail("password can not be empty");

        User user = userService.login(username, password);
        request.getSession().setAttribute(USER_SESSION_KEY, user);
        // TODO collaborate with frontend to guarantee the
        // returned user can be handled correctly
        return RestResponse.ok(user);
    }

    @PostMapping("logout")
    public RestResponse logout() {
        request.getSession().removeAttribute(USER_SESSION_KEY);
        return RestResponse.ok();
    }

    @PostMapping("reset/password")
    public RestResponse resetPassword()

}
