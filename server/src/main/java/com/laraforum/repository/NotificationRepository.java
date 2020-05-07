package com.laraforum.repository;

import com.laraforum.model.Notification;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.CrudRepository;
import org.springframework.data.repository.query.Param;

import java.util.List;

public interface NotificationRepository extends CrudRepository<Notification, Integer> {

    @Query("select n from Notification  n where  n.isRead= :isRead and n.receiveId= :receiveId")
    public List<Notification> findByReceiveId(@Param("isRead") boolean isRead, @Param("receiveId") int receiveId);

}
