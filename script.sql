-- MySQL dump 10.13  Distrib 8.0.14, for Win64 (x86_64)
--
-- Host: localhost    Database: lara
-- ------------------------------------------------------
-- Server version	8.0.14

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8mb4 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `article`
--

DROP TABLE IF EXISTS `article`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `article` (
  `id` int(11) NOT NULL,
  `body` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `description` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `favorited` bit(1) NOT NULL,
  `favorites_count` int(11) NOT NULL,
  `slug` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `title` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  FULLTEXT KEY `id` (`body`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article`
--

LOCK TABLES `article` WRITE;
/*!40000 ALTER TABLE `article` DISABLE KEYS */;
INSERT INTO `article` VALUES (36,'Football Allianzcortex Manchester','2019-03-09 17:35:05','Ever wonder how?',_binary '\0',0,'Test-Batch-Selection','Test Batch Selection','2019-03-09 17:35:05',34),(52,'Football Allianzcortex Manchester','2019-03-11 19:11:15','Ever wonder how?',_binary '\0',0,'Test-Batch-Selection1','Test Batch Selection1','2019-03-11 19:11:15',50);
/*!40000 ALTER TABLE `article` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article_comment`
--

DROP TABLE IF EXISTS `article_comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `article_comment` (
  `ID` int(11) NOT NULL,
  `article_id` int(11) DEFAULT NULL,
  `comment_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`ID`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_comment`
--

LOCK TABLES `article_comment` WRITE;
/*!40000 ALTER TABLE `article_comment` DISABLE KEYS */;
INSERT INTO `article_comment` VALUES (21,3,20),(23,3,22),(59,52,58),(68,52,67);
/*!40000 ALTER TABLE `article_comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `article_tag`
--

DROP TABLE IF EXISTS `article_tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `article_tag` (
  `article_id` int(11) NOT NULL,
  `tag_id` int(11) NOT NULL,
  PRIMARY KEY (`article_id`,`tag_id`),
  KEY `FKesqp7s9jj2wumlnhssbme5ule` (`tag_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `article_tag`
--

LOCK TABLES `article_tag` WRITE;
/*!40000 ALTER TABLE `article_tag` DISABLE KEYS */;
INSERT INTO `article_tag` VALUES (3,4),(3,5),(3,6),(7,8),(7,9),(7,10),(11,12),(11,13),(11,14),(11,15),(30,31),(30,32),(36,37),(52,53);
/*!40000 ALTER TABLE `article_tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `comment` (
  `id` int(11) NOT NULL,
  `body` varchar(255) DEFAULT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (20,'His name was my name too.','2019-03-05 12:39:22','2019-03-05 12:39:22',18),(22,'His name was my name too1.','2019-03-05 12:39:43','2019-03-05 12:39:43',18),(58,'His name was my name too1.','2019-03-11 19:14:54','2019-03-11 19:14:54',50),(61,'His name was my name too1.','2019-03-11 20:31:14','2019-03-11 20:31:14',50),(64,'His name was my name too1.','2019-03-11 20:34:35','2019-03-11 20:34:35',50),(67,'His name was my name too1.','2019-03-11 20:39:28','2019-03-11 20:39:28',50);
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `hibernate_sequence`
--

DROP TABLE IF EXISTS `hibernate_sequence`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `hibernate_sequence` (
  `next_val` bigint(20) DEFAULT NULL
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hibernate_sequence`
--

LOCK TABLES `hibernate_sequence` WRITE;
/*!40000 ALTER TABLE `hibernate_sequence` DISABLE KEYS */;
INSERT INTO `hibernate_sequence` VALUES (70),(70),(70),(70);
/*!40000 ALTER TABLE `hibernate_sequence` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `notification`
--

DROP TABLE IF EXISTS `notification`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `notification` (
  `id` int(11) NOT NULL,
  `article_id` int(11) NOT NULL,
  `create_time` datetime DEFAULT NULL,
  `is_read` bit(1) NOT NULL,
  `receive_id` int(11) NOT NULL,
  `send_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `notification`
--

LOCK TABLES `notification` WRITE;
/*!40000 ALTER TABLE `notification` DISABLE KEYS */;
INSERT INTO `notification` VALUES (69,52,'2019-03-11 20:39:28',_binary '',50,50);
/*!40000 ALTER TABLE `notification` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `permission`
--

DROP TABLE IF EXISTS `permission`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `permission` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `permission_number` int(11) NOT NULL,
  `permission_value` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `permission`
--

LOCK TABLES `permission` WRITE;
/*!40000 ALTER TABLE `permission` DISABLE KEYS */;
INSERT INTO `permission` VALUES (1,1,'create_post'),(2,2,'add_permission');
/*!40000 ALTER TABLE `permission` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `role`
--

DROP TABLE IF EXISTS `role`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `role` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `role_number` int(11) NOT NULL,
  `role_value` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  `role` varchar(255) COLLATE utf8mb4_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=3 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `role`
--

LOCK TABLES `role` WRITE;
/*!40000 ALTER TABLE `role` DISABLE KEYS */;
INSERT INTO `role` VALUES (1,2,'admin',NULL),(2,1,'user',NULL);
/*!40000 ALTER TABLE `role` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `tag`
--

DROP TABLE IF EXISTS `tag`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `tag` (
  `id` int(11) NOT NULL,
  `tag_name` varchar(255) DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `tag`
--

LOCK TABLES `tag` WRITE;
/*!40000 ALTER TABLE `tag` DISABLE KEYS */;
INSERT INTO `tag` VALUES (4,'angularjs'),(5,'dragons'),(6,'reactjs'),(8,'reactjs'),(9,'angularjs'),(10,'dragons'),(12,'reactjs'),(13,'angularjs'),(14,'dragons'),(15,'fuck'),(31,'test'),(32,'fuck'),(37,'test'),(53,'test');
/*!40000 ALTER TABLE `tag` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `token`
--

DROP TABLE IF EXISTS `token`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `token` (
  `id` int(11) NOT NULL,
  `token` varchar(255) DEFAULT NULL,
  `update_time` datetime DEFAULT NULL,
  `user_id` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FKe32ek7ixanakfqsdaokm4q9y2` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `token`
--

LOCK TABLES `token` WRITE;
/*!40000 ALTER TABLE `token` DISABLE KEYS */;
INSERT INTO `token` VALUES (2,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBbGxpYW56Y29ydGV4MiIsImlhdCI6MTU1MTcxMjQxMSwiZXhwIjoxNTUxNzQ4NDExfQ.S1HipSEFnow46eDhl1WikdHaR8hBPkl6oNCvcx0uGPc','2019-03-04 15:13:32',1),(19,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBbGxpYW56Y29ydGV4MyIsImlhdCI6MTU1MTc4OTU0MiwiZXhwIjoxNTUxODI1NTQyfQ.nDSqrmsPjXPNt4Zn0vbM_GlZP0T2I3A6nt1O_E-KOAE','2019-03-05 12:39:03',18),(25,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBbGxpYW56Y29ydGV4NCIsImlhdCI6MTU1MTgyODU5MSwiZXhwIjoxNTUxODY0NTkxfQ.2_U4-mApY89V9ILAOwALpS4BPEt4-xFOLid482m-dv4','2019-03-05 23:29:52',24),(28,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBbGxpYW56Y29ydGV4NCIsImlhdCI6MTU1MjA0ODYxNCwiZXhwIjoxNTUyMDg0NjE0fQ.6ROv7Uyut-LNfsFP8tMwOUd46RxqL7r1-Nu7UJ-Zbgc','2019-03-08 12:36:55',27),(35,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBbGxpYW56Y29ydGV4NSIsImlhdCI6MTU1MjE1MjgxNywiZXhwIjoxNTUyMTg4ODE3fQ.ekAbALvhpgclbDcdqCKly385-mffb5OsBtpbkJ-oan8','2019-03-09 17:33:37',34),(39,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBbGxpYW56Y29ydGV4NiIsImlhdCI6MTU1MjIyMzU1NywiZXhwIjoxNTUyMjU5NTU3fQ.rnfA4zd4qrw7fZ8TSKCvc5iCHvsuVCXTqaxHKItcr_g','2019-03-10 13:12:37',38),(41,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBbGxpYW56Y29ydGV4NyIsImlhdCI6MTU1MjI1MjIzNiwiZXhwIjoxNTUyMjg4MjM2fQ.tZ9_VZREyzUE5MltsitKPKGhSADDr-C7RbmEEDkeN3U','2019-03-10 21:10:37',40),(43,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBbGxpYW56Y29ydGV4OCIsImlhdCI6MTU1MjI1Mjg0MCwiZXhwIjoxNTUyMjg4ODQwfQ.q1jBANpb3NY_RAaodvIFnj5dizIClQdK5MhImTtMcPw','2019-03-10 21:20:40',42),(45,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBbGxpYW56Y29ydGV4IiwiaWF0IjoxNTUyMjUyODkxLCJleHAiOjE1NTIyODg4OTF9.zs4JN3N8BtP0_y0g9MUmxQU95phOPxfD8Qi53gK-sbs','2019-03-10 21:21:31',44),(47,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBbGxpYW56Y29ydGV4MSIsImlhdCI6MTU1MjMwODExNiwiZXhwIjoxNTUyMzQ0MTE2fQ.dIpoKcQm4o8T74v1B1EatErrJ1dCKQRPmX7EARbgEcU','2019-03-11 12:41:56',46),(49,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBbGxpYW56Y29ydGV4MiIsImlhdCI6MTU1MjMxODcyNSwiZXhwIjoxNTUyMzU0NzI1fQ.av0zNZnq3-GD-lp8kMAGHIR5RJ-u4tc2URzQ2ryPUiI','2019-03-11 15:38:46',48),(51,'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJBbGxpYW56Y29ydGV4MyIsImlhdCI6MTU1MjMyMDU2MiwiZXhwIjoxNTUyMzU2NTYyfQ.6nfIGVAyYQzU39ffr99tcUIiZRfYHyOuoevwXu9xAsc','2019-03-11 16:09:22',50);
/*!40000 ALTER TABLE `token` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `email` varchar(255) DEFAULT NULL,
  `is_activated` bit(1) NOT NULL,
  `pass_word` varchar(255) DEFAULT NULL,
  `user_name` varchar(255) DEFAULT NULL,
  `roles` varchar(255) DEFAULT NULL,
  `notification_count` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (50,'iamwanghz@gmail.com',_binary '\0','123','Allianzcortex3','1',2),(48,'iamwanghz@gmail.com',_binary '\0','123','Allianzcortex2','1',-1),(46,'iamwanghz@gmail.com',_binary '\0','123','Allianzcortex1','1',0),(44,'iamwanghz@gmail.com',_binary '\0','123','Allianzcortex','1:2:2',0);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_article_favorite`
--

DROP TABLE IF EXISTS `user_article_favorite`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user_article_favorite` (
  `id` int(11) NOT NULL,
  `article_id` int(11) NOT NULL,
  `user_id` int(11) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_article_favorite`
--

LOCK TABLES `user_article_favorite` WRITE;
/*!40000 ALTER TABLE `user_article_favorite` DISABLE KEYS */;
INSERT INTO `user_article_favorite` VALUES (29,3,27),(33,30,27);
/*!40000 ALTER TABLE `user_article_favorite` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_permissions`
--

DROP TABLE IF EXISTS `user_permissions`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `user_permissions` (
  `user_id` int(11) NOT NULL,
  `permissions` int(11) DEFAULT NULL,
  KEY `FK79uqaq5t8qjak65ldagkoo7yr` (`user_id`)
) ENGINE=MyISAM DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_permissions`
--

LOCK TABLES `user_permissions` WRITE;
/*!40000 ALTER TABLE `user_permissions` DISABLE KEYS */;
INSERT INTO `user_permissions` VALUES (46,1),(48,1),(44,2),(50,1),(50,2);
/*!40000 ALTER TABLE `user_permissions` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2019-03-12 22:07:43
