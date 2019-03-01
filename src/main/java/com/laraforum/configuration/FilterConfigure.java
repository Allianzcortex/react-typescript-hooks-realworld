package com.laraforum.configuration;

import com.laraforum.authentication.GetJwtTokenFilter;
import com.laraforum.authentication.ParseJwtTokenFilter;
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

    @Bean
    public FilterRegistrationBean<ParseJwtTokenFilter> ParseJwtTokenFilter() {
        FilterRegistrationBean<ParseJwtTokenFilter> registrationBean
                = new FilterRegistrationBean<>();

        registrationBean.setFilter(new ParseJwtTokenFilter());
        registrationBean.addUrlPatterns("/api/users/current");

        return registrationBean;
    }


}
