package com.laraforum.repository;

import com.laraforum.model.enums.Permission;
import org.springframework.data.repository.CrudRepository;

public interface PermissionRepository extends CrudRepository<Permission, Integer> {
}
