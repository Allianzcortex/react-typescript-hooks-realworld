package com.laraforum.controller;

import com.fasterxml.jackson.databind.ObjectMapper;
import com.fasterxml.jackson.databind.ObjectWriter;
import com.fasterxml.jackson.databind.SerializationFeature;
import com.laraforum.authentication.JwtProvider;
import com.laraforum.configuration.WebConfiguration;
import com.laraforum.model.User;
import com.laraforum.repository.*;
import com.laraforum.service.impl.*;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.mockito.Spy;
import org.mockito.junit.MockitoJUnitRunner;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.MediaType;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
import org.springframework.test.web.servlet.result.ModelResultMatchers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.context.WebApplicationContext;

import java.nio.charset.Charset;

import static org.springframework.test.web.servlet.setup.MockMvcBuilders.webAppContextSetup;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
import static org.mockito.Mockito.*;
import static org.mockito.BDDMockito.given;
import static org.hamcrest.Matchers.containsString;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.content;
import static org.springframework.test.web.servlet.result.MockMvcResultMatchers.status;

@RunWith(MockitoJUnitRunner.class)

public class UserControllerMockitoTest {


    @Mock
    private UserRepository userRepositoryMock;

    @Mock
    private RoleRepository roleRepositoryMock;

    @Mock
    private PermissionRepository permissionRepositoryMock;

    @Mock
    private JwtProvider jwtProviderMock;

    @Mock
    private RoleServiceImpl roleServiceMock;

    @Mock
    private TokenRepository tokenRepositoryMock;

    @Mock
    private TokenServiceImpl tokenServiceMock;

    @Mock
    private UserServiceImpl userServiceMock;

    @InjectMocks
    private UserContoller userContoller;

    MockMvc mockMvc;

    public static final MediaType APPLICATION_JSON_UTF8 = new MediaType(MediaType.APPLICATION_JSON.getType(), MediaType.APPLICATION_JSON.getSubtype(), Charset.forName("utf8"));


    @Before
    public void setUp() {
        // mockMvc = webAppContextSetup(webApplicationContext).build();
        mockMvc = MockMvcBuilders.standaloneSetup(userContoller)
                .build();
        System.err.println("真的跑了？？");

    }

    @Transactional
    @Test
    public void shouldPrint() throws Exception {
        // /api/test
        System.err.println(userRepositoryMock);
        System.err.println(userServiceMock);
        System.err.println(roleRepositoryMock);
        System.err.println(jwtProviderMock);
        System.err.println(tokenServiceMock);
        System.err.println(userContoller);
        System.err.println(roleServiceMock);

        ObjectMapper mapper = new ObjectMapper();
        User user = User.builder().passWord("12")
                .email("12@12.com").userName("34")
                .build();
//        System.out.println("权限是：" + user.getPermissions());
        mapper.configure(SerializationFeature.WRAP_ROOT_VALUE, false);
        ObjectWriter ow = mapper.writer().withDefaultPrettyPrinter();
        String requestJson = ow.writeValueAsString(user);
        mockMvc.perform(post("/api/users/signin").contentType(
                APPLICATION_JSON_UTF8).content(requestJson))
                .andExpect(MockMvcResultMatchers.status().isOk())
                .andExpect(content().string("test"));
        user.setRoles(user.getRoles() + "1");
        user.getPermissions().add(1);
        verify(userServiceMock).save(user);

//        given(userServiceMock.save(user)).willReturn("fuck");

//        mockMvc.perform(post("/api/users/signin").contentType(
//                APPLICATION_JSON_UTF8).content(requestJson))
//                .andExpect(MockMvcResultMatchers.status().isOk())
//                .andExpect(content().string("fuck"));

    }

    @Test
    public void shouldPrint1() throws Exception {
        mockMvc
                .perform(get("/api/users/test"))
                .andDo(MockMvcResultHandlers.print());
    }
}
