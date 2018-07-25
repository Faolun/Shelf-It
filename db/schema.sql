### Schema

CREATE DATABASE whiskey_db;
USE whiskey_db;

CREATE TABLE whiskey
(
	id int NOT NULL AUTO_INCREMENT,
	name varchar(255) NOT NULL,
	tasted BOOLEAN DEFAULT false,
	PRIMARY KEY (id)
);
