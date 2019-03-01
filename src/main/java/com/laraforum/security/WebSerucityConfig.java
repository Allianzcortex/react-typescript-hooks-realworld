package com.laraforum.security;

import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;

@Configuration
@EnableWebSecurity
public class WebSerucityConfig {

    @Override
    public void configure(HttpSecurity http) throws Exception {

        // disable csrf
        http.csrf().disable();

        // we need to use session

        // Entry Points
        // choose the matched url
        // All methods except register and login
        http.authorizeRequests()
                .antMatchers("/users/signin").permitAll()
                .antMatchers("/users/signup").permitAll()
                .anyRequest().authenticated();
    }
}
