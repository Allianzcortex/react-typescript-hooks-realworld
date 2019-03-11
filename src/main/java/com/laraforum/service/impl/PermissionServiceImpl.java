package com.laraforum.service.impl;

import com.laraforum.model.enums.Permission;
import com.laraforum.repository.PermissionRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service
public class PermissionServiceImpl {

    @Autowired
    private PermissionRepository permissionRepository;

    public Optional<Permission> findByPermissionNumber(Integer permissionNumber) {
        return permissionRepository.findByPermissionNumber(permissionNumber);
    }


}
