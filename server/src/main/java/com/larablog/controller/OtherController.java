package com.larablog.controller;

import com.larablog.authorization.RequirePermissions;
import com.larablog.authorization.RequireRoles;
import com.larablog.model.Notification;
import com.larablog.model.User;
import com.larablog.repository.NotificationRepository;
import com.larablog.service.impl.*;
import org.springframework.beans.factory.annotation.Autowired;
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
    private RoleServiceImpl roleService;

    @Autowired
    private UserServiceImpl userService;

    @Autowired
    private PermissionServiceImpl permissionService;

    @Autowired
    private NotificationServiceImpl notificationService;

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
