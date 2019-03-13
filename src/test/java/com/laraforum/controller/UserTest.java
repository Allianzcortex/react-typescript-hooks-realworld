package com.laraforum.controller;

import com.laraforum.configuration.WebConfiguration;
import com.laraforum.repository.NotificationRepository;
import com.laraforum.service.impl.*;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.mockito.InjectMocks;
import org.mockito.Mock;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.result.MockMvcResultHandlers;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import static org.springframework.test.web.servlet.setup.MockMvcBuilders.webAppContextSetup;
import static org.springframework.test.web.servlet.request.MockMvcRequestBuilders.get;

import javax.transaction.Transactional;

@RunWith(SpringJUnit4ClassRunner.class)
//@Transactional
// @ContextConfiguration(classes={WebConfiguration.class})
@Controller
@WebAppConfiguration
public class UserTest {

    @Autowired
    WebApplicationContext webApplicationContext;

    @Mock
    private NotificationRepository notificationRepository;

    @Mock
    private ArticleServiceImpl articleService;

    @Mock
    private SearchServiceImpl searchService;

    @Mock
    private RoleServiceImpl roleService;

    @Mock
    private UserServiceImpl userService;

    @Mock
    private PermissionServiceImpl permissionService;

    @Mock
    private NotificationServiceImpl notificationService;

    @InjectMocks
    private OtherController otherController;

    MockMvc mockMvc;

    @Before
    public void setUp() {
        // mockMvc = webAppContextSetup(webApplicationContext).build();
        mockMvc = MockMvcBuilders.standaloneSetup(otherController)
                .build();
    }

    @Test
    public void shouldPrint() throws Exception {
        mockMvc
                .perform(get("/api/test"))
                .andDo(MockMvcResultHandlers.print());
    }
}
