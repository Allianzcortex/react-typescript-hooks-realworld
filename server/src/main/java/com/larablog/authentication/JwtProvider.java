package com.larablog.authentication;

import com.larablog.exception.CustomException;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import java.util.Date;

@Component
public class JwtProvider {

    @Value("${spring.security.jwt.token.secret-key}")
    private String key="yourkey";

    @Value("${spring.security.jwt.token.expire-length}")
    private long validateMillseconds=36000000;

    public JwtProvider(){
        this.key="yourkey";
    }

    @PostConstruct
    private void init() {

         key = "yourkey";
    }

    public String getUsername(String token) {
        return Jwts.parser().setSigningKey(key).parseClaimsJws(token).getBody().getSubject();
    }

    public String createToken(String userName) {
        Claims claims = Jwts.claims().setSubject(userName);
        Date now = new Date();
        Date validity = new Date(now.getTime() + validateMillseconds);

        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(validity)
                .signWith(SignatureAlgorithm.HS256, key)
                .compact();

    }

    // cannot use HttpRequest here because only getHeaders()
    // method will be used


    public boolean validateToken(String token) {
        try {
            Jwts.parser().setSigningKey(key).parseClaimsJws(token);
            return true;
        } catch (JwtException | IllegalArgumentException e) {
            e.printStackTrace();
            throw new CustomException("Expired or invalid JWT token",HttpStatus.NETWORK_AUTHENTICATION_REQUIRED);
        }
    }
}
