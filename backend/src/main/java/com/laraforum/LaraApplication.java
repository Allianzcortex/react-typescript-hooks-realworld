package com.laraforum;

import org.springframework.boot.SpringApplication;
import org.springframework.boot.autoconfigure.EnableAutoConfiguration;
import org.springframework.boot.autoconfigure.SpringBootApplication;
import org.springframework.boot.autoconfigure.security.servlet.SecurityAutoConfiguration;

@SpringBootApplication
public class LaraApplication {

	public static void main(String[] args) {
		SpringApplication.run(LaraApplication.class, args);
	}

}
