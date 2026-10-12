CREATE DATABASE IF NOT EXISTS student_management;
USE student_management;

CREATE TABLE IF NOT EXISTS students (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  student_id VARCHAR(50) NOT NULL,
  first_name VARCHAR(100) NOT NULL,
  last_name VARCHAR(100) NOT NULL,
  course VARCHAR(150) NOT NULL,
  year_level INT NOT NULL,
  email VARCHAR(255) NOT NULL
);
