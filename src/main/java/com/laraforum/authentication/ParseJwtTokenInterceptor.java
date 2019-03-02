package com.laraforum.authentication;

import com.laraforum.exception.UnAuthorizedException;
import com.laraforum.service.TokenService;
import io.jsonwebtoken.JwtException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.servlet.handler.HandlerInterceptorAdapter;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

@Component
public class ParseJwtTokenInterceptor extends HandlerInterceptorAdapter {

    // @Autowired 也不能用？ 也会报 null
    // @Autowired
    private JwtProvider jwtProvider;

    @Autowired
    private TokenService tokenService;

    public ParseJwtTokenInterceptor() {
        this.jwtProvider = new JwtProvider();
    }

    @Override
    public boolean preHandle(
            HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {


        String body = request.getHeader("Authorization");
        try {
            if (body != null && body.startsWith("Bearer ")) {
                body = body.substring(7);
            }
            if (!tokenService.findByToken(body)) {
                throw new UnAuthorizedException("Unauthorized");
            }
            System.out.println(body);
            jwtProvider.validateToken(body);
        } catch (JwtException ex) {
            throw new UnAuthorizedException("UnParsed");
        }
        response.setHeader("test", "test");
        request.setAttribute("AuthUser", jwtProvider.getUsername(body));
        return true;
    }
//
//    @Override
//    public void postHandle(
//            HttpServletRequest request, HttpServletResponse response, Object handler) throws Exception {
//    }

    @Override
    public void afterCompletion(HttpServletRequest request, HttpServletResponse response,
                                Object handler, Exception exception) throws Exception {
    }
}
