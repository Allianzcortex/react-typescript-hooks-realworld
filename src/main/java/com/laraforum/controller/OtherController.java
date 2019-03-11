package com.laraforum.controller;

import com.laraforum.authorization.RequirePermissions;
import com.laraforum.authorization.RequireRoles;
import com.laraforum.exception.UnAuthorizedException;
import com.laraforum.model.Article;
import com.laraforum.model.User;
import com.laraforum.service.impl.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.transaction.annotation.Transactional;
import org.springframework.web.bind.annotation.*;
import sun.security.acl.PermissionImpl;

import java.util.List;
import java.util.Set;

@RestController
@RequestMapping("api/")
public class OtherController {

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
}
