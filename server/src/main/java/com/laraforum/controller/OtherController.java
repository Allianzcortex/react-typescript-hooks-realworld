package com.laraforum.controller;

import com.laraforum.authorization.RequirePermissions;
import com.laraforum.authorization.RequireRoles;
import com.laraforum.exception.UnAuthorizedException;
import com.laraforum.model.Article;
import com.laraforum.model.Notification;
import com.laraforum.model.User;
import com.laraforum.repository.NotificationRepository;
import com.laraforum.service.impl.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("api/")
public class OtherController {

    @Autowired
    private NotificationRepository notificationRepository;

    @Autowired
    private ArticleServiceImpl articleService;

    @Autowired
    private SearchServiceImpl searchService;

    @Autowired
    private RoleServiceImpl roleService;

    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private PermissionServiceImpl permissionService;

    @Autowired
    private NotificationServiceImpl notificationService;

    @Value("${fulltext.search.hibernate.search.use}")
    private boolean useHibernateSearch = false;

    // ① implement search function
    // ② there will be two ways: 1. use mysql search function 2.
    // use lucene(hibernate-search as wrapper)


    @Transactional
    @PostMapping("search/{keyWord}")
    public List<Article> searchByKeyWord(@PathVariable String keyWord) {
        if (!useHibernateSearch) {
            // use mysql
            return articleService.findByKeyWord(keyWord);
        } else {
            // use lucene
            System.out.println("开始使用 fuzzy search");
            return searchService.fuzzySearch(keyWord);
        }

    }

    // TODO add remove role function

    @RequireRoles("admin")
    @Transactional
    @PostMapping("role/add/{userName}/{rNumber}")
    public void addUserRole(@PathVariable String userName, @PathVariable Integer rNumber) {
        // first check whether r(ow)Number exists
        if (!roleService.findByRowNumber(rNumber).isPresent()) {
            throw new UnAuthorizedException("No Such Role");
        }
        // Very tick to prevent duplicate ...
        User user1 = userService.findByUserName(userName);
        user1.setRoles(user1.getRoles() + ":" + rNumber);

    }


    @RequirePermissions("create_post")
    @Transactional
    @PostMapping("permission/add/{userName}/{pNumber}")
    public void addUserPermission(@PathVariable String userName, @PathVariable Integer pNumber) {
        if (!permissionService.findByPermissionNumber(pNumber).isPresent()) {
            throw new UnAuthorizedException("No such permission");
        }
        User user = userService.findByUserName(userName);
        Set<Integer> newPermissions = user.getPermissions();
        newPermissions.add(pNumber);
        user.setPermissions(newPermissions);
    }

    // TODO test delete
    @PostMapping("read/notice/{notificationIdList}")
    public void readNotification(HttpServletRequest httpServletRequest, @PathVariable Integer[] notificationIdList) {
        String userName = (String) httpServletRequest.getAttribute("AuthUser");
        Integer userId = userService.findByUserName(userName).getId();
        notificationService.deleteNotification(userId, new ArrayList(Arrays.asList(notificationIdList)));
    }

    @GetMapping("test")
    public String read(){
        return "test";
    }

    @GetMapping("get/notice")
    public List<Notification> getNotifications(HttpServletRequest httpServletRequest) {
        String userName = (String) httpServletRequest.getAttribute("AuthUser");
        Integer userId = userService.findByUserName(userName).getId();
        // if isRead=false,then return all unread messages; while isRead=true ,return all read messages
        boolean isRead = false;
        return notificationService.getNotifications(isRead, userId);
    }
}
