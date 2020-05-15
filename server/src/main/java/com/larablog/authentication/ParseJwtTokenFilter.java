package com.larablog.authentication;

import com.larablog.exception.UnAuthorizedException;
import io.jsonwebtoken.JwtException;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.*;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
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

        // setHeader will not be read, and setAttribute is a better way
        response.setHeader("AuthUser", jwtProvider.getUsername(body));

        request.setAttribute("AuthUser", jwtProvider.getUsername(body));

        chain.doFilter(request, response);


    }


}
