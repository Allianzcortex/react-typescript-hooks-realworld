package com.laraforum.authentication;

import com.laraforum.exception.CustomException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.filter.OncePerRequestFilter;

import javax.servlet.FilterChain;
import javax.servlet.ServletException;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.IOException;


public class JwtProviderFilter extends OncePerRequestFilter {

    private JwtProvider jwtProvider;

    public JwtProviderFilter(JwtProvider jwtProvider) {

        this.jwtProvider = jwtProvider;
    }

    @Override
    public void doFilterInternal(HttpServletRequest httpServletRequest, HttpServletResponse httpServletResponse, FilterChain filterChain) throws ServletException, IOException {
        String token = jwtProvider.resolveToken(httpServletRequest);
        try {
            if (token != null && jwtProvider.validateToken(token)) {
                System.out.println("authentication ok ");
            }
        } catch (CustomException ex) {

        }

        filterChain.doFilter(httpServletRequest, httpServletResponse);

    }
}
