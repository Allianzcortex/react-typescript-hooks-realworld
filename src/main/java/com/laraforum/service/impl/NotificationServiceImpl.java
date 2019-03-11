package com.laraforum.service.impl;

import com.laraforum.model.Notification;
import com.laraforum.model.User;
import com.laraforum.repository.NotificationRepository;
import com.laraforum.repository.UserRepository;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import javax.transaction.Transactional;
import java.util.Date;
import java.util.List;

@Service
public class NotificationServiceImpl {

    @Autowired
    private UserRepository userRepository;

    @Autowired
    private NotificationRepository notificationRepository;

    @Transactional
    public void createNotification(int sendId, int receiveId, int articleId) {
        // set unread
        System.out.println("receivdId 是： " + receiveId);
        User user = userRepository.findById(receiveId).get();
        user.setNotificationCount(user.getNotificationCount() + 1);

        // create notification
        Date now = new Date();
        Notification notification = Notification.builder()
                .sendId(sendId)
                .receiveId(receiveId)
                .articleId(articleId)
                .createTime(now)
                .build();

        notificationRepository.save(notification);
    }

    /**
     * usually the comments are deleted in batch,not one by one
     *
     * @param NotificationIDList
     */
    @Transactional
    public void deleteNotification(int receiveId, List<Integer> NotificationIDList) {
        // set read amount
        User user = userRepository.findById(receiveId).get();
        user.setNotificationCount(user.getNotificationCount() - NotificationIDList.size());

        // mark notification read
        // It semms there is not a better way to batch/bulk update ,based on
        // https://stackoverflow.com/questions/33462221/how-to-implement-batch-update-using-spring-data-jpa
        // TODO imrove the efficiency by jdbcTemplate
        for (Integer notificationId : NotificationIDList) {
            notificationRepository.findById(notificationId).get().setRead(true);
        }
    }

    public List<Notification> getNotifications(boolean isRead,int receiverId) {
        return notificationRepository.findByReceiveId(isRead, receiverId);
    }
}
