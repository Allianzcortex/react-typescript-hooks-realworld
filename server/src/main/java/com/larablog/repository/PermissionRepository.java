package com.larablog.repository;


import com.larablog.model.enums.Permission;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;
import java.util.Optional;

public interface PermissionRepository extends CrudRepository<Permission, Integer> {
    Optional<Permission> findByPermissionNumber(Integer permissionNumber);

    //@Query("select up from Permission p join user u join u.permissions as up on up=p.permissionNumber where u.userName= :userName")
    //  @Query("select p from user u join u.permissions as p where u.userName= :userName ")
    @Query(value = "select permission.permission_value from\n" +
            "(select permissions from user_permissions where user_id in (select id from user where user_name= :userName))\n" +
            "as x\n" +
            "join permission on x.permissions=permission.permission_number;\n", nativeQuery = true)
    // 直接查询永远不可行,TODO 用 jpql 来优化
    //@Query("select u.permissions from user u where u.userName= :userName")
    List<String> findPermissionsByUserName(@Param("userName") String userName);
}
