package com.laraforum.security;

import com.laraforum.authentication.JwtProvider;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.SecurityConfigurerAdapter;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.web.server.ServerHttpSecurity;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.server.SecurityWebFilterChain;

@Configuration
@EnableWebSecurity
public class WebSerucityConfig extends SecurityConfigurerAdapter {

    @Autowired
    private JwtProvider jwtProvider;


    public void configure(HttpSecurity http) throws Exception {

        // disable csrf
        http.csrf().disable().authorizeRequests().antMatchers ().hasRole()

        // we need to use session

        // Entry Points
        // choose the matched url
        // All methods except register and login
//        http.authorizeRequests()
//                .antMatchers("/users/signin").permitAll()
//                .antMatchers("/users/signup").permitAll()
//                .anyRequest().authenticated();

       // http.authorizeRequests().antMatchers("").permitAll();
        // apply JWT
        // http.apply(new JwtTokenFilterConfigurer(jwtProvider));
    }

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder(12);
    }
}
