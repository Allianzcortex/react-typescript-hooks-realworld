package com.laraforum.service.impl;

import com.laraforum.model.Token;
import com.laraforum.model.User;
import com.laraforum.repository.TokenRepository;
import com.laraforum.service.TokenService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Date;

@Service
public class TokenServiceImpl implements TokenService {

    @Autowired
    private TokenRepository tokenRepository;

    /**
     * check by database
     *
     * @param token
     */
    @Override
    public boolean isTokenExists(String token) {
        return tokenRepository.existsByToken(token);
    }

    @Override
    public void updateNewToken(User user, String newToken) {
        Date now = new Date();
        tokenRepository.updateNewToken(user, newToken, now);
    }

    @Override
    public void deleteToken(User user) {
        tokenRepository.deleteByUser(user);
    }

    @Override
    public void save(Token token) {
        tokenRepository.save(token);
    }

    @Override
    public boolean findByToken(String token) {
        System.out.println(tokenRepository==null);
        return tokenRepository.existsByToken(token);
    }
}
