package com.laraforum.service;

import com.laraforum.model.Notification;

import java.util.List;

public interface NotificationService {

    void createNotification(int sendId, int receiveId, int articleId);

    void deleteNotification(int receiveId, List<Integer> NotificationIDList);

    List<Notification> getNotifications(boolean isRead, int receiverId);

}
