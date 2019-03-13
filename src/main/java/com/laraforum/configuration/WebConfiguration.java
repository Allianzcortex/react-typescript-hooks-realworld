package com.laraforum.configuration;


import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurerAdapter;

@Configuration
@ComponentScan("com.laraforum.controller")
@EnableWebMvc
public class WebConfiguration extends WebMvcConfigurerAdapter {
}
