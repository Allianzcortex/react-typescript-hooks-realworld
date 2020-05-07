package com.laraforum.service.impl;

import com.laraforum.model.enums.Permission;
import com.laraforum.repository.PermissionRepository;
import com.laraforum.service.PermissionService;
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
