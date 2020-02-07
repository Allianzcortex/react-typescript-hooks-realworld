package com.laraforum.service.impl;

import com.laraforum.model.enums.Role;
import com.laraforum.repository.RoleRepository;
import com.laraforum.service.RoleService;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
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
