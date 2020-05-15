package com.larablog.service;

import com.larablog.model.enums.Permission;

import java.util.Optional;

public interface PermissionService {
    Optional<Permission> findByPermissionNumber(Integer permissionNumber);
}
