package com.larablog.service.impl;

import com.larablog.model.enums.Role;
import com.larablog.repository.RoleRepository;
import com.larablog.service.RoleService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;
import java.util.Optional;

@Service

public class RoleServiceImpl implements RoleService {

    @Autowired
    private RoleRepository roleRepository;

    @Override
    public Optional<Role> findByRowNumber(Integer rowNumber) {
        return roleRepository.findByRoleNumber(rowNumber);
    }

    @Override
    public List<String> findRoleNameByRoleNumber(List<Integer> rowNumbers) {

        return roleRepository.findRoleNameByRoleNumber(rowNumbers);
    }
}
