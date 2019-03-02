package com.laraforum.repository;

import com.laraforum.model.Token;
import com.laraforum.model.User;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;

import java.util.Date;


public interface TokenRepository extends CrudRepository<Token, Integer> {

    /**
     * check whether exists
     *
     * @param token
     * @return
     */
    Boolean existsByToken(String token);

    /**
     * update new token
     *
     * @param user
     * @param newToken
     * @param now
     * @return
     */
    @Modifying
    @Query("update Token T set T.token = ?2, T.updateTime=?3 where T.user=?1 ")
    void updateNewToken(User user, String newToken, Date now);

    void deleteByUser(User user);

    boolean findByToken(String token);
}
