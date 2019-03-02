package com.laraforum.authentication;

import com.laraforum.exception.UnAuthorizedException;
import io.jsonwebtoken.JwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import javax.servlet.http.HttpServletResponseWrapper;
import java.io.IOException;


public class ParseJwtTokenFilter extends OncePerRequestFilter {


    private JwtProvider jwtProvider;


    @Override
    public void doFilterInternal(
            HttpServletRequest request,
            HttpServletResponse response,
            FilterChain chain) throws IOException, ServletException {

        // autowired 无法自动加载，会报 null 错
        // 这里必须手动配置 TODO 后续还需要再看
        this.jwtProvider = new JwtProvider();


        String path = request.getRequestURI().substring(request.getContextPath().length());

        String body = request.getHeader("Authorization");
        try {
            if (body != null && body.startsWith("Bearer ")) {
                body = body.substring(7);
            }
            System.out.println(body);
            jwtProvider.validateToken(body);
        } catch (JwtException ex) {
            throw new UnAuthorizedException("UnParsed");
        }
        //req.setAttribute("AuthenUser", jwtProvider.getUsername(body));
        //ResponseRequestWrapper responseWrapper = new ResponseRequestWrapper(response);
        //responseWrapper.addHeader("AuthUser", jwtProvider.getUsername(body));
        response.setHeader("AuthUser", jwtProvider.getUsername(body));

        request.setAttribute("AuthUser", jwtProvider.getUsername(body));

        System.out.println("真的执行了吗：");

        chain.doFilter(request, response);


    }


}
