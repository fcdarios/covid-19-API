-- Name
--  CREATE DATABASE covid19;

-- Tables
CREATE TABLE public.users (
    id serial not null constraint type_pk primary key,
    name character varying(100),
    username character varying(50) NOT NULL,
    email character varying(50) NOT NULL,
    password character varying(50) NOT NULL,
    createdAt date DEFAULT CURRENT_DATE,
    updatedAt date DEFAULT CURRENT_DATE
);

create table type(
    id serial not null constraint type_pk primary key,
    name varchar(100),
    description varchar(100)
    createdAt date DEFAULT CURRENT_DATE,
    updatedAt date DEFAULT CURRENT_DATE
);

create table user_type(
    id_user serial not null,
    id_type serial not null,
    constraint user_typeFK1 FOREIGN KEY (id_user) REFERENCES users(id),
    constraint user_typeFK2 FOREIGN KEY (id_type) REFERENCES type(id)
);
