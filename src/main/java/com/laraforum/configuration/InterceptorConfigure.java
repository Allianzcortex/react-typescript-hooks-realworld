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

    // 关于 */* 的代指
    // https://stackoverflow.com/questions/33864252/spring-mvc-handler-interceptor-with-exclude-path-pattern-with-pathparam/33866377#33866377
    // 所以 */* 等价于 **
    @Override
    public void addInterceptors(InterceptorRegistry registry) {
        registry.addInterceptor(parseJwtTokenInterceptor1())
                // Optional
                .addPathPatterns("/api/users/current")
                .addPathPatterns("/api/users/logout")
                .addPathPatterns("/api/articles/create")
                .addPathPatterns("/api/comment/create/*")
                .addPathPatterns("/api/comment/delete/*/*")
                .addPathPatterns("/api/articles/*/favorite")
                .addPathPatterns("/api/role/add/*/*")
                .addPathPatterns("/api/permission/add/*/*");
    }
}
