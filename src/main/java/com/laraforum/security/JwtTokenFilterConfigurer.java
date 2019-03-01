package com.laraforum.security;

import com.laraforum.authentication.JwtProvider;
import com.laraforum.authentication.JwtProviderFilter;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.config.annotation.SecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.web.DefaultSecurityFilterChain;
import org.springframework.security.web.authentication.UsernamePasswordAuthenticationFilter;

public class JwtTokenFilterConfigurer
        extends SecurityConfigurerAdapter<DefaultSecurityFilterChain, HttpSecurity> {
    private JwtProvider jwtProvider;

    public JwtTokenFilterConfigurer(JwtProvider jwtTokenProvider) {
        this.jwtProvider = jwtProvider;
    }

    @Override
    public void configure(HttpSecurity http) throws Exception {
        JwtProviderFilter customFilter = new JwtProviderFilter(jwtProvider);
        http.addFilter(customFilter);
    }
}
