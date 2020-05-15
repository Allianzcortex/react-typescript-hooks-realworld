package com.larablog.service;

import com.larablog.LaraApplication;
import com.larablog.model.User;
import com.larablog.repository.PermissionRepository;
import com.larablog.repository.RoleRepository;
import com.larablog.repository.UserRepository;
import com.larablog.service.impl.RoleServiceImpl;
import com.larablog.service.impl.UserServiceImpl;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.boot.test.context.SpringBootTest;

import static org.mockito.Mockito.*;


@RunWith(MockitoJUnitRunner.class)
// nolonger exits,refer:https://stackoverflow.com/a/42788074/3165378
// @SpringApplicationConfiguration(classes = LaraApplication.class)
@SpringBootTest(classes = LaraApplication.class)
public class UserServiceMockitoTest {

    private User user;

    @Mock
    private UserRepository userRepositoryMock;

    @Mock
    private RoleRepository roleRepositoryMock;

    @Mock
    private PermissionRepository permissionRepositoryMock;

    @InjectMocks
    private RoleServiceImpl roleServiceMock;

    @InjectMocks
    private UserServiceImpl userServiceMock;


    @Before
    public void setUp() {
        user = new User();
    }


    @Test
    public void whenUserSave_thenCheckSuccess() {
        // nothing return,so nothing needs to bedone
        // when(userServiceMock.save(user)).thenReturn(user);

        userServiceMock.save(user);
        // if you change the sentence to
        // verify(userRepositoryMock).findByUserName("f");
        // it will fail,prompt "wanted but not invoked"
        verify(userRepositoryMock).save(user);

    }
}
