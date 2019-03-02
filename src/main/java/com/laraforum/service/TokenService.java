package com.laraforum.service;

import com.laraforum.model.Token;
import com.laraforum.model.User;

import java.util.Date;

public interface TokenService {

    boolean isTokenExists(String token);

    /**
     * TODO Will it bebetter if we return true ?
     *
     * @param user
     * @param newToken
     */
    void updateNewToken(User user, String newToken);

    void deleteToken(User user);

    void save(Token token);

    boolean findByToken(String token);
}
