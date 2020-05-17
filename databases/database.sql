-- POSTGRES


-- Name
--  CREATE DATABASE covid19;

-- Tables
CREATE TABLE userS (
    id serial,
    name VARCHAR(50),
    username VARCHAR(50) NOT NULL,
    email VARCHAR(50) NOT NULL,
    password VARCHAR(100) NOT NULL,
    constraint userPK primary KEY (id),
    constraint userUQ1 UNIQUE (username),
    constraint userUQ2 UNIQUE (email)
);

create table rol(
    id serial,
    name VARCHAR(50),
    description varchar(100),
    constraint rolPK primary KEY (id)
);

create table user_rol(
    id_user int not null,
    id_rol int not null,
    constraint user_typeFK1 FOREIGN KEY (id_user) REFERENCES users(id),
    constraint user_typeFK2 FOREIGN KEY (id_rol) REFERENCES rol(id)
);
