package com.laraforum.configuration;

import com.laraforum.service.UserService;
import org.mockito.Mockito;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.Primary;
import org.springframework.context.annotation.Profile;

@Profile("test")
@Configuration
public class ServiceTestConfiguration {

    @Bean
    @Primary
    public UserService userService() {
        return Mockito.mock(UserService.class);
    }

}
