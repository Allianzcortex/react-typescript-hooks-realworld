package com.laraforum.authentication;

import com.laraforum.authentication.JwtProvider;
import com.laraforum.exception.UnAuthorizedException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;
import org.springframework.web.server.ResponseStatusException;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import java.io.IOException;


public class GetJwtTokenFilter implements Filter {

    @Autowired
    private JwtProvider jwtProvider;

    @Override
    public void doFilter(
            ServletRequest request,
            ServletResponse response,
            FilterChain chain) throws IOException, ServletException {
        HttpServletRequest req = (HttpServletRequest) request;
        String tokenHeader = req.getHeader("Authorization");
        String path = req.getRequestURI().substring(req.getContextPath().length());
        System.out.println("Path is " + path);
//        if (!path.equals("api/users/signin")) {
        // Exception will not be caught in @ControllerAdvice
        // https://stackoverflow.com/questions/17715921/exception-handling-for-filter-in-spring
        // throw new UnAuthorizedException("aa");
        // still not work:
        // refer:https://github.com/spring-projects/spring-boot/issues/3057
//            throw new ResponseStatusException(HttpStatus.UNAUTHORIZED,
//                    "Not Allowed");
        // still not...but don't care
//            throw new UnAuthorizedException("ccc");
//        }

        if (path.equals("NOt NOW")) {
            String body = req.getHeader("Authorization");
            if (body != null && body.startsWith("Bearer ")) {
                body = body.substring(7);
            }

            if (!jwtProvider.validateToken(body)) {
                throw new UnAuthorizedException("Unauthorized");
            }

            req.setAttribute("Authen-user", jwtProvider.getUsername(body));
        }
        chain.doFilter(request, response);
    }
}


