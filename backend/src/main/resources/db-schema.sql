 use lara_test;

 CREATE TABLE IF NOT EXISTS `user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `email` varchar(255)  NOT NULL,
  `is_activated` bit(1) ,
  `pass_word` varchar(255) NOT NULL,
  `user_name` varchar(255)  NOT NULL,
  `roles` varchar(255) DEFAULT "",
  `notification_count` int(11) DEFAULT 0,
  PRIMARY KEY (`id`),
  UNIQUE KEY (`user_name`,`email`)
) ENGINE=InnoDB  AUTO_INCREMENT=1 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;

 CREATE TABLE IF NOT EXISTS `user_permissions` (
  `user_id` int(11) NOT NULL,
  `permissions` int(11) DEFAULT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;