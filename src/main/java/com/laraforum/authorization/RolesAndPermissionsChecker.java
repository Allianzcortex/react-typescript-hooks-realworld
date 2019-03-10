package com.laraforum.authorization;

import com.laraforum.model.User;
import com.laraforum.service.impl.UserServiceImpl;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;


import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.Map;

import static java.util.Objects.requireNonNull;

@Aspect
@Component
public class RolesAndPermissionsChecker {

    @Autowired
    private UserServiceImpl userService;

    //    @Pointcut(value = "@annotation(RequirePermissions)")
//    @Pointcut("execution(@RequirePermissions * *(..))")
//    public void callAt() {
//    }

    @Pointcut("@annotation(permissions)")
    public void callAt(RequirePermissions permissions) {
    }

    @Pointcut("@annotation(roles)")
    public void callAt1(RequireRoles roles) {
    }

    @Around(value = "callAt1(roles)")
    public Object dealWith(ProceedingJoinPoint point, RequireRoles roles) throws Throwable {
        System.out.println("---------------------------------");
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder
                .getRequestAttributes()).getRequest();
        System.out.println(request.getAttribute("AuthUser"));
        Object object = point.proceed();
        System.out.println("Permission is " + roles.roles());
        return object;

    }

    @Around(value = "callAt(requirePermissions)")
    public Object dealWith(ProceedingJoinPoint point, RequirePermissions requirePermissions) throws Throwable {
        System.out.println("---------------------------------");
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder
                .getRequestAttributes()).getRequest();
        System.out.println(request.getAttribute("AuthUser"));
        Object object = point.proceed();
        System.out.println("Permission is " + requirePermissions.permissions());
        return object;

    }
}
