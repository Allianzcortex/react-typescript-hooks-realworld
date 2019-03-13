package com.laraforum.service.impl;

import com.laraforum.model.enums.Role;
import com.laraforum.repository.RoleRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.ArrayList;
import java.util.Collection;
import java.util.List;
import java.util.Optional;

@Service

public class RoleServiceImpl {

    @Autowired
    private  RoleRepository roleRepository;


    public Optional<Role> findByRowNumber(Integer rowNumber) {
        return roleRepository.findByRoleNumber(rowNumber);
    }

    public List<String> findRoleNameByRoleNumber(List<Integer> rowNumbers) {

        return roleRepository.findRoleNameByRoleNumber(rowNumbers);
    }
}
