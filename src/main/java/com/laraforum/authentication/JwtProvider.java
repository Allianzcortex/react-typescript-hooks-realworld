package com.laraforum.authentication;

import com.laraforum.exception.CustomException;
import com.laraforum.model.enums.Role;
import io.jsonwebtoken.Claims;
import io.jsonwebtoken.JwtException;
import io.jsonwebtoken.Jwts;
import io.jsonwebtoken.SignatureAlgorithm;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.http.HttpStatus;
import org.springframework.stereotype.Component;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.Date;
import java.util.List;

@Component
public class JwtProvider {

     @Value("${spring.security.jwt.token.secret-key}")
    private String key;

    @Value("${spring.security.jwt.token.expire-length}")
    private long validateMillseconds;

    @PostConstruct
    private void init() {
        // TODO
        // how to deal with secret key ? directly or base64 encode ?
    }

    public String getUsername(String token) {
    return Jwts.parser().setSigningKey(key).parseClaimsJws(token).getBody().getSubject();
  }

    public String createToken(String userName, List<Role> roles, Date date) {
        Claims claims = Jwts.claims().setSubject(userName);
        // TODO check whether convert list to arrayList
        claims.put("auth",String.join(" ",(ArrayList) roles));

        // add date
        Date now = new Date();
        Date validity = new Date(now.getTime()+validateMillseconds);

        return Jwts.builder()
                .setClaims(claims)
                .setIssuedAt(now)
                .setExpiration(validity)
                .signWith(SignatureAlgorithm.HS256, key)
                .compact();

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

     public boolean validateToken(String token) {
    try {
      Jwts.parser().setSigningKey(key).parseClaimsJws(token);
      return true;
    } catch (JwtException | IllegalArgumentException e) {
      throw new CustomException("Expired or invalid JWT token", HttpStatus.NETWORK_AUTHENTICATION_REQUIRED);
    }
  }
}
