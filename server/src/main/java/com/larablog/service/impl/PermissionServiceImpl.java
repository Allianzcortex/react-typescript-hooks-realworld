package com.larablog.service.impl;

import com.larablog.model.enums.Permission;
import com.larablog.repository.PermissionRepository;
import com.larablog.service.PermissionService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.Optional;

@Service
public class PermissionServiceImpl implements PermissionService {

    @Autowired
    private PermissionRepository permissionRepository;

    @Override
    public Optional<Permission> findByPermissionNumber(Integer permissionNumber) {
        return permissionRepository.findByPermissionNumber(permissionNumber);
    }


}
