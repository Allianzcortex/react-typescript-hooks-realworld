package com.laraforum.user;

import com.laraforum.LaraApplication;
import com.laraforum.service.UserService;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.Mockito;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.test.context.ActiveProfiles;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

@ActiveProfiles("test")
@RunWith(SpringJUnit4ClassRunner.class)
// nolonger exits,refer:https://stackoverflow.com/a/42788074/3165378
// @SpringApplicationConfiguration(classes = LaraApplication.class)
@SpringBootTest(classes = LaraApplication.class)
public class UserServiceTest {

    @Autowired
    private UserService userService;

    @Test
    public void whenUserLogin_thenCheckSuccess() {

    }
}
