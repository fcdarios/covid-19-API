-- POSTGRES


-- Name
--  CREATE DATABASE covid19;

-- Tables
CREATE TABLE users (
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

create table especialidad(
    id serial not null constraint especialidad_pk primary key,
    especialidad varchar(100),
    description text
);

CREATE TABLE medico (
    id serial not null constraint medico_pk primary key,
    id_user serial not null,
    id_especialidad serial not null,
    cedula varchar(50) NOT NULL,
    direccion varchar(50) NOT NULL,
    municipio varchar(50) NOT NULL,
    estado varchar(50) NOT NULL,
    pais varchar(50) NOT NULL,
    telefono varchar(10) NOT NULL,
    constraint medicoFK1 FOREIGN KEY (id_especialidad) REFERENCES especialidad(id),
    constraint medicoFK2 FOREIGN KEY (id_user) REFERENCES users(id)
);

CREATE TABLE caso_covid (
    id serial not null constraint caso_covid_pk primary key,
    caso varchar(10) NOT NULL,
    description varchar(100)
);

CREATE TABLE paciente (
    id serial not null constraint pacinete_pk primary key,
    id_user serial not null,
    direccion varchar(50) NOT NULL,
    municipio varchar(50) NOT NULL,
    estado varchar(50) NOT NULL,
    pais varchar(50) NOT NULL,
    telefono varchar(10) NOT NULL,
    nacimineto date not null,
    caso_covid19 serial not null,
    constraint pacineteFK1 FOREIGN KEY (id_user) REFERENCES users(id),
    constraint pacineteFK2 FOREIGN KEY (caso_covid19) REFERENCES caso_covid(id)
);

CREATE TABLE alergia (
    id serial not null constraint alergia_pk primary key,
    alergia varchar(50) NOT NULL,
    description varchar(100)
);

CREATE TABLE enf_cronica (
    id serial not null constraint enf_cronica_pk primary key,
    enfermedad varchar(50) NOT NULL,
    description varchar(100)
);

CREATE TABLE cirugia (
    id serial not null constraint cirugia_pk primary key,
    cirugia varchar(50) NOT NULL,
    description varchar(100)
);

create table paciente_alergia(
    id_paciente serial not null,
    id_alergia serial not null,
    constraint paciente_alergiaFK1 FOREIGN KEY (id_paciente) REFERENCES paciente(id),
    constraint paciente_alergiaFK2 FOREIGN KEY (id_alergia) REFERENCES alergia(id)
);

create table paciente_enf_cronica(
    id_paciente serial not null,
    id_enfermedad serial not null,
    constraint paciente_enf_cronicaFK1 FOREIGN KEY (id_paciente) REFERENCES paciente(id),
    constraint paciente_enf_cronicaFK2 FOREIGN KEY (id_enfermedad) REFERENCES enf_cronica(id)
);

create table paciente_cirugia(
    id_paciente serial not null,
    id_cirugia serial not null,
    fecha date not null,
    constraint paciente_cirugiaFK1 FOREIGN KEY (id_paciente) REFERENCES paciente(id),
    constraint paciente_cirugiaFK2 FOREIGN KEY (id_cirugia) REFERENCES cirugia(id)
);

CREATE TABLE servicio (
    id serial not null constraint servicio_pk primary key,
    servicio varchar(50) NOT NULL,
    description varchar(100)
);

CREATE TABLE medico_servicio (
    id_medico serial not null,
    id_servicio serial not null,
    costo numeric not null,
    constraint medico_servicioFK1 FOREIGN KEY (id_medico) REFERENCES medico(id),
    constraint medico_servicioFK2 FOREIGN KEY (id_servicio) REFERENCES servicio(id)
);

CREATE TABLE medicamento (
    id serial not null constraint medicamento_pk primary key,
    nombre varchar(50) NOT NULL,
    description varchar(100) NOT NULL,
    dosis varchar(50) NOT NULL,
    costo numeric not null
);

CREATE TABLE consulta (
    id serial not null constraint consulta_pk primary key,
    id_paciente serial not null,
    id_especialidad serial not null,
    id_medico serial,
    sintomas varchar(500) NOT NULL,
    evidencia varchar(300) NOT NULL,
    estado varchar(10),
    fecha date not null,
    constraint consultaFK1 FOREIGN KEY (id_paciente) REFERENCES paciente(id),
    constraint consultaFK2 FOREIGN KEY (id_especialidad) REFERENCES especialidad(id),
    constraint consultaFK3 FOREIGN KEY (id_medico) REFERENCES medico(id)
);

CREATE TABLE receta (
    id serial not null constraint receta_pk primary key,
    id_consulta serial not null,
    recomendaciones varchar(200) NOT NULL,
    canalizar boolean not null,
    fecha date not null,
    constraint recetaFK1 FOREIGN KEY (id_consulta) REFERENCES consulta(id)
);

CREATE TABLE receta_medicamento (
    id_medicamento serial not null,
    id_receta serial not null,
    uso varchar(100) not null,
    constraint receta_medicamentoFK1 FOREIGN KEY (id_medicamento) REFERENCES medicamento(id),
    constraint receta_medicamentoFK2 FOREIGN KEY (id_receta) REFERENCES receta(id)
);




