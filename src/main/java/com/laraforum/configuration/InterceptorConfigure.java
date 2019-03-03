package com.laraforum.configuration;

import com.laraforum.authentication.JwtProvider;
import com.laraforum.authentication.ParseJwtTokenInterceptor;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class InterceptorConfigure implements WebMvcConfigurer {

    @Bean
    public ParseJwtTokenInterceptor parseJwtTokenInterceptor1() {
        return new ParseJwtTokenInterceptor();
    }

    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(parseJwtTokenInterceptor1())
                // Optional
                .addPathPatterns("/api/users/current")
                .addPathPatterns("/api/users/logout")
                .addPathPatterns("/api/articles/create");
    }
}
