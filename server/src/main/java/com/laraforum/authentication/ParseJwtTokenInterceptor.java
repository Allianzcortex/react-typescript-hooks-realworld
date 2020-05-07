package com.laraforum.authentication;

import com.laraforum.exception.UnAuthorizedException;
import com.laraforum.service.impl.UserServiceImpl;
import io.jsonwebtoken.JwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class ParseJwtTokenInterceptor extends HandlerInterceptorAdapter {

    // TODO @Autowired 也会报 null?

    @Autowired
    private JwtProvider jwtProvider;



    @Autowired
    private UserServiceImpl userService;


    @Override
    public boolean preHandle(
            HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {


        String body = request.getHeader("Authorization");
        try {
            if (body != null && body.startsWith("Bearer ")) {
                body = body.substring(7);
            }
            System.out.println("body is : " + body);

            System.out.println(body);
            jwtProvider.validateToken(body);
        } catch (JwtException ex) {
            throw new UnAuthorizedException("UnParsed");
        }
        response.setHeader("test", "test");
        String userName = jwtProvider.getUsername(body);
        request.setAttribute("AuthUser", userName);
        // So still missing question
        // Do we need to use a special method to get single field ? (e.g. just like roles)
        request.setAttribute("Roles", userService.getUserRoles(userName));
        request.setAttribute("Permissions", userService.gerUserPermissions(userName));
        return true;
    }


    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response,
                                Object handler, Exception exception) throws Exception {
    }
}
