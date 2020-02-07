package com.laraforum.service;

import com.laraforum.model.enums.Permission;

import java.util.Optional;

public interface PermissionService {
    Optional<Permission> findByPermissionNumber(Integer permissionNumber);
}
