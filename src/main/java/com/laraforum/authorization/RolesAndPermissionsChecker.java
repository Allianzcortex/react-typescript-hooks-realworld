package com.laraforum.authorization;

import com.laraforum.exception.UnAuthorizedException;
import org.aspectj.lang.ProceedingJoinPoint;
import org.aspectj.lang.annotation.Around;
import org.aspectj.lang.annotation.Aspect;
import org.aspectj.lang.annotation.Pointcut;
import org.springframework.stereotype.Component;
import org.springframework.web.context.request.RequestContextHolder;
import org.springframework.web.context.request.ServletRequestAttributes;

import javax.servlet.http.HttpServletRequest;


import java.lang.reflect.Field;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import static java.util.Objects.requireNonNull;

@Aspect
@Component
public class RolesAndPermissionsChecker {

    @Pointcut("@annotation(permissions)")
    public void callAt(RequirePermissions permissions) {
    }

    @Pointcut("@annotation(roles)")
    public void callAt1(RequireRoles roles) {
    }

    @Around(value = "callAt1(roles)")
    public Object dealWith(ProceedingJoinPoint point, RequireRoles roles) throws Throwable {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder
                .getRequestAttributes()).getRequest();
        System.out.println(request.getAttribute("AuthUser"));
        List<String> userRoles = (List<String>) request.getAttribute("Roles");

        System.out.println("获得的 userRoles 是： " + userRoles);

        for (String targetRole : roles.value().split(":")) {
            // TODO optimized
            if (!userRoles.contains(targetRole)) {
                throw new UnAuthorizedException("no roles");
            }
        }
        Object object = point.proceed();
        System.out.println("role is " + roles.value());
        return object;

    }

    @Around(value = "callAt(requirePermissions)")
    public Object dealWith(ProceedingJoinPoint point, RequirePermissions requirePermissions) throws Throwable {
        HttpServletRequest request = ((ServletRequestAttributes) RequestContextHolder
                .getRequestAttributes()).getRequest();
        System.out.println(request.getAttribute("AuthUser"));
        List<String> userPermissions = (List<String>) request.getAttribute("Permissions");
        System.out.println("用户的权限是：" + userPermissions);
        System.out.println("要求的权限是：" + requirePermissions.value());
        for (String targetPermission : requirePermissions.value().split(":")) {
            if (!userPermissions.contains(targetPermission)) {
                throw new UnAuthorizedException("No permissions");
            }
        }
        Object object = point.proceed();
        System.out.println("Permission is " + requirePermissions.value());
        return object;

    }
}
