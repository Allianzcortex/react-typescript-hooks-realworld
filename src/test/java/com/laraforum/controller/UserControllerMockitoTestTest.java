//package com.laraforum.controller;
//
//import com.fasterxml.jackson.databind.ObjectMapper;
//import com.fasterxml.jackson.databind.ObjectWriter;
//import com.fasterxml.jackson.databind.SerializationFeature;
//import com.laraforum.authentication.JwtProvider;
//import com.laraforum.model.User;
//import com.laraforum.repository.PermissionRepository;
//import com.laraforum.repository.RoleRepository;
//import com.laraforum.repository.TokenRepository;
//import com.laraforum.repository.UserRepository;
//import com.laraforum.service.impl.RoleServiceImpl;
//import com.laraforum.service.impl.TokenServiceImpl;
//import com.laraforum.service.impl.UserServiceImpl;
//import org.junit.Before;
//import org.junit.Test;
//import org.junit.runner.RunWith;
//import org.mockito.InjectMocks;
//import org.mockito.Mock;
//import org.mockito.junit.MockitoJUnitRunner;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.http.MediaType;
//import org.springframework.test.context.ContextConfiguration;
//import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
//import org.springframework.test.context.web.WebAppConfiguration;
//import org.springframework.test.web.servlet.MockMvc;
//import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
//import org.springframework.test.web.servlet.result.MockMvcResultMatchers;
//import org.springframework.web.context.WebApplicationContext;
//
//import java.nio.charset.Charset;
//
//import static org.mockito.Mockito.verify;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;
//import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.post;
//import static org.springframework.test.web.servlet.setup.MockMvcBuilders.webAppContextSetup;
//
//@RunWith(SpringJUnit4ClassRunner.class)
////@RunWith(MockitoJUnitRunner.class)
//@ContextConfiguration(classes = UserContoller.class)
//@WebAppConfiguration
//public class UserControllerMockitoTestTest {
//
//    @Autowired
//    WebApplicationContext webApplicationContext;
//
//    @Mock
//    private JwtProvider jwtProvider;
//
//    MockMvc mockMvc;
//
//    public static final MediaType APPLICATION_JSON_UTF8 = new MediaType(MediaType.APPLICATION_JSON.getType(), MediaType.APPLICATION_JSON.getSubtype(), Charset.forName("utf8"));
//
//
//    @Before
//    public void setUp() {
//        mockMvc = webAppContextSetup(webApplicationContext).build();
////        mockMvc = MockMvcBuilders.standaloneSetup(userContoller)
////                .build();
//    }
//
//    @Test
//    public void shouldPrint() throws Exception {
//        // /api/test
//
//        ObjectMapper mapper = new ObjectMapper();
//        User user = User.builder().passWord("12")
//                .email("12@12.com").userName("34")
//                .build();
////        System.out.println("权限是：" + user.getPermissions());
//        mapper.configure(SerializationFeature.WRAP_ROOT_VALUE, false);
//        ObjectWriter ow = mapper.writer().withDefaultPrettyPrinter();
//        String requestJson = ow.writeValueAsString(user);
//        mockMvc.perform(post("/api/users/signin").contentType(
//                APPLICATION_JSON_UTF8).content(requestJson))
//                .andExpect(MockMvcResultMatchers.status().isOk());
//
////        given(userServiceMock.save(user)).willReturn("fuck");
//
////        mockMvc.perform(post("/api/users/signin").contentType(
////                APPLICATION_JSON_UTF8).content(requestJson))
////                .andExpect(MockMvcResultMatchers.status().isOk())
////                .andExpect(content().string("fuck"));
//
//    }
//
//    @Test
//    public void shouldPrint1() throws Exception {
//        mockMvc
//                .perform(get("/api/users/test"))
//                .andDo(MockMvcResultHandlers.print());
//    }
//}
