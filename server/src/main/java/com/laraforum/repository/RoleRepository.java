package com.laraforum.repository;

import com.laraforum.model.enums.Role;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.Collection;
import java.util.List;
import java.util.Optional;

public interface RoleRepository extends CrudRepository<Role, Integer> {

    Optional<Role> findByRoleNumber(Integer roleNumber);

    @Query(value = "SELECT r.roleValue FROM Role r WHERE r.roleNumber IN :numbers")
    List<String> findRoleNameByRoleNumber(@Param("numbers") Collection<Integer> numbers);
}
