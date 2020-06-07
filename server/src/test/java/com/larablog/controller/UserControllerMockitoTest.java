//package com.larablog.controller;
//
//import com.larablog.authentication.JwtProvider;
//import com.larablog.model.User;
//import com.larablog.repository.*;
//import com.larablog.service.impl.*;
//import org.junit.Before;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.junit.MockitoJUnitRunner;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
//import org.springframework.test.web.servlet.setup.MockMvcBuilders;
//import org.springframework.transaction.annotation.Transactional;
//
//
//import static com.larablog.util.TestUtils.APPLICATION_JSON_UTF8;
//import static com.larablog.util.TestUtils.convertObjectToJson;
//
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
//import static org.mockito.Mockito.*;
//
//
//@RunWith(MockitoJUnitRunner.class)
//
//public class UserControllerMockitoTest {
//
//
//    @Mock
//    private UserRepository userRepositoryMock;
//
//    @Mock
//    private RoleRepository roleRepositoryMock;
//
//    @Mock
//    private PermissionRepository permissionRepositoryMock;
//
//    @Mock
//    private JwtProvider jwtProviderMock;
//
//
//    @Mock
//    private UserServiceImpl userServiceMock;
//
//    @InjectMocks
//    private UserContoller userContoller;
//
//    MockMvc mockMvc;
//
//
//    @Before
//    public void setUp() {
//        // mockMvc = webAppContextSetup(webApplicationContext).build();
//        mockMvc = MockMvcBuilders.standaloneSetup(userContoller)
//                .build();
//
//    }
//
//    @Transactional
//    @Test
//    public void shouldPrint() throws Exception {
//        // /api/test
//        System.err.println(userRepositoryMock);
//        System.err.println(userServiceMock);
//        System.err.println(roleRepositoryMock);
//        System.err.println(jwtProviderMock);
//        System.err.println(userContoller);
//
//
//        User user = User.builder().passWord("12")
//                .email("12@12.com").userName("34")
//                .build();
//
//        mockMvc.perform(post("/api/users/signin").contentType(
//                APPLICATION_JSON_UTF8).content(convertObjectToJson(user)))
//                // different time generate different jwt
//                .andExpect(MockMvcResultMatchers.status().isOk());
//        user.setRoles(user.getRoles() + "1");
//        user.getPermissions().add(1);
//        verify(userServiceMock).save(user);
//    }
//
//
//}
