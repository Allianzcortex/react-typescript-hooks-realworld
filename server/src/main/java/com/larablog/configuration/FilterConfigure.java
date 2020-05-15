package com.larablog.configuration;

import com.larablog.authentication.GetJwtTokenFilter;
import org.springframework.boot.web.servlet.FilterRegistrationBean;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;

@Configuration
public class FilterConfigure {

    @Bean
    public FilterRegistrationBean<GetJwtTokenFilter> GetJwtTokenFilter() {
        FilterRegistrationBean<GetJwtTokenFilter> registrationBean
                = new FilterRegistrationBean<>();

        registrationBean.setFilter(new GetJwtTokenFilter());
        registrationBean.addUrlPatterns("/users/signin");
        registrationBean.addUrlPatterns("/users/login");

        return registrationBean;
    }

    // Don't need it since we have ParseJwtTokenInterceptor
//    @Bean
//    public FilterRegistrationBean<ParseJwtTokenFilter> ParseJwtTokenFilter() {
//        FilterRegistrationBean<ParseJwtTokenFilter> registrationBean
//                = new FilterRegistrationBean<>();
//
//        registrationBean.setFilter(new ParseJwtTokenFilter());
//        registrationBean.addUrlPatterns("/api/users/current");
//
//        return registrationBean;
//    }


}
