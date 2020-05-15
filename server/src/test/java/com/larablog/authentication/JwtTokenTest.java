package com.larablog.authentication;

import static org.junit.Assert.assertEquals;
import static org.junit.Assert.assertNotEquals;

import org.junit.Before;
import org.junit.Test;


public class JwtTokenTest {

    private String token;


    private JwtProvider jwtProvider;

    @Before
    public void generateToken() {
        this.jwtProvider = new JwtProvider();
        token = jwtProvider.createToken("He");
        System.out.println(token);
    }


    @Test
    public void testToken() {
        boolean checked = jwtProvider.validateToken(token);
        assertEquals(true, checked);
    }

}
