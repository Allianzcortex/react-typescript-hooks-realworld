package com.laraforum.security;

import com.laraforum.model.enums.Role;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.Jwts;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpRequest;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import java.util.Date;
import java.util.List;

@Component
public class JwtTokenSolver {

    @Value("${spring.security.jwt.token.secret-key}")
    private String key;

    @Value("${spring.security.jwt.token.expire-length}")
    private long validateMillseconds;

    @PostConstruct
    private void init() {
        // how to deal with secret key ? directly ?
    }

    public String createToken(String userName, List<Role> roles, Date date) {
        Claims claims = Jwts.claims().setSubject(userName);

    }

    // cannot use HttpRequest here because only getHeaders()
    // method will be used
    public String resolveToken(HttpServletRequest request) {
        String body = request.getHeader("Authorization");
        if (body != null && body.startsWith("Bearer ")) {
            return body.substring(7);
        }

        return null;
    }

}
