DROP DATABASE IF EXISTS animals_db;
CREATE DATABASE animals_db;

USE animals_db;

CREATE TABLE pets (
    id INT AUTO_INCREMENT NOT NULL,
    pet_name TEXT NOT NULL,
    pet_description TEXT NOT NULL,
);