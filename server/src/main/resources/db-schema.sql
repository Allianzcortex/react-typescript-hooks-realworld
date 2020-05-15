DROP DATABASE IF EXISTS lara;
CREATE DATABASE lara CHARACTER SET utf8mb4 COLLATE utf8mb4_bin;
USE lara;

CREATE TABLE sys_option
(
    id           INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    created TIMESTAMP NOT NULL DEFAULT current_timestamp,
    modified TIMESTAMP NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp,
    option_key   VARCHAR(100)    NOT NULL UNIQUE,
    option_value VARCHAR(1023)   NOT NULL
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

CREATE TABLE user
(
    id           INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    created TIMESTAMP NOT NULL DEFAULT current_timestamp,
    modified TIMESTAMP NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp,
    username     VARCHAR(45)     NOT NULL UNIQUE,
    password_md5 VARCHAR(45)     NOT NULL,
    email        VARCHAR(45),
    screen_name  VARCHAR(45),
    logged       TIMESTAMP       NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

CREATE TABLE article
(
    id            INT PRIMARY KEY      NOT NULL AUTO_INCREMENT,
    created TIMESTAMP NOT NULL DEFAULT current_timestamp,
    modified TIMESTAMP NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp,
    title         VARCHAR(255)         NOT NULL,
    content       MEDIUMTEXT,
    author_id     INT,
    hits          INT     DEFAULT 0    NOT NULL,
    tags          VARCHAR(255),
    category      VARCHAR(255),
    status        VARCHAR(32),
    type          VARCHAR(32),
    allow_comment BOOLEAN DEFAULT TRUE NOT NULL,
    comment_count INT     DEFAULT 0    NOT NULL
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

CREATE TABLE comment
(
    id         INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    created TIMESTAMP NOT NULL DEFAULT current_timestamp,
    modified TIMESTAMP NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp,
    article_id INT             NOT NULL,
    p_id       INT,
    content    TEXT            NOT NULL,
    name       VARCHAR(255),
    email      VARCHAR(255),
    website    VARCHAR(255),
    agree      INT             NOT NULL DEFAULT 0,
    disagree   INT             NOT NULL DEFAULT 0,
    ip         VARCHAR(255),
    agent      VARCHAR(255),
    status     INT                      DEFAULT 0 NOT NULL
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

CREATE TABLE meta
(
    id   INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    created TIMESTAMP NOT NULL DEFAULT current_timestamp,
    modified TIMESTAMP NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp,
    name VARCHAR(255)    NOT NULL,
    type VARCHAR(45)     NOT NULL
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

CREATE TABLE middle
(
    id   INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    created TIMESTAMP NOT NULL DEFAULT current_timestamp,
    modified TIMESTAMP NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp,
    a_id INT             NOT NULL,
    m_id INT             NOT NULL
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

CREATE TABLE media
(
    id   INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    created TIMESTAMP NOT NULL DEFAULT current_timestamp,
    modified TIMESTAMP NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp,
    name VARCHAR(255) NOT NULL,
    url VARCHAR(1023) NOT NULL,
    thumb_url VARCHAR(1023),
    suffix VARCHAR(255) NOT NULL
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8;

CREATE TABLE log
(
    id      INT PRIMARY KEY NOT NULL AUTO_INCREMENT,
    created TIMESTAMP NOT NULL DEFAULT current_timestamp,
    modified TIMESTAMP NOT NULL DEFAULT current_timestamp ON UPDATE current_timestamp,
    action  VARCHAR(255),
    data    TEXT,
    message VARCHAR(255),
    type    VARCHAR(255),
    ip      VARCHAR(255),
    user_id INT
) ENGINE = InnoDB
  DEFAULT CHARSET = utf8;
