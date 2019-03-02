package com.laraforum.configuration;

import com.laraforum.authentication.ParseJwtTokenInterceptor;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.InterceptorRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;

@Configuration
public class InterceptorConfigure implements WebMvcConfigurer {
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(new ParseJwtTokenInterceptor())
                // Optional
                .addPathPatterns("/api/users/current")
                .addPathPatterns("/api/users/logout");
    }
}
