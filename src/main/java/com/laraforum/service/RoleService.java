package com.laraforum.service;

import com.laraforum.model.enums.Role;

import java.util.List;
import java.util.Optional;

public interface RoleService {

    Optional<Role> findByRowNumber(Integer rowNumber);

    List<String> findRoleNameByRoleNumber(List<Integer> rowNumbers);
}
