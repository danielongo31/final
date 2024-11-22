-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 25-10-2024 a las 20:06:19
-- Versión del servidor: 10.4.32-MariaDB
-- Versión de PHP: 8.0.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `iglesia`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `actividades`
--

CREATE TABLE `actividades` (
  `id` int(11) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `fecha` datetime NOT NULL,
  `cursoId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `actividades`
--

INSERT INTO `actividades` (`id`, `descripcion`, `fecha`, `cursoId`) VALUES
(7, 'Leer versículo 14', '2024-08-28 00:05:00', 1),
(8, 'Leer versículo 20', '2024-08-28 00:21:00', 1),
(9, 'Leer filipenses 4:6-7\n', '2024-10-27 09:30:00', 6);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `cursos`
--

CREATE TABLE `cursos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `imagen` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `cursos`
--

INSERT INTO `cursos` (`id`, `nombre`, `descripcion`, `imagen`) VALUES
(1, 'Salacuna', 'Curso destinado para niños de 0 a 2 años', 'https://th.bing.com/th/id/OIP.SR4fS9o6HGJhE55_ySNSgQHaHU?rs=1&pid=ImgDetMain'),
(2, 'Párvulos', 'Curso destinado para niños de 3 a 5 años', 'https://th.bing.com/th/id/R.823d72487ee84b5220b55d849416ee1c?rik=7DgWbICOm9e5pw&riu=http%3a%2f%2f2.bp.blogspot.com%2f_lECqmPaPssg%2fTIWiyGf-wwI%2fAAAAAAAAClY%2fihcYE6W5YNo%2fs1600%2fformar_equipos11.gif&ehk=Teoob3yCWRoRfVNCynfUEnlzK06N%2b4uxNP5EyxTiVDY%3d'),
(3, 'Principiantes', 'Curso destinado para niños de 6 a 8 años', 'https://th.bing.com/th/id/R.b9193a79a9a3f395525134d06257883e?rik=%2brxzpqtsO7uR3w&pid=ImgRaw&r=0'),
(4, 'Primarios', 'Curso destinado para niños de 9 a 11 años', 'https://3.bp.blogspot.com/-T9XWwqCvW_A/WvrdVjl8WbI/AAAAAAAAIBo/MocOEyftVgsiQj9yuBFEMOM7k72foZEKwCLcBGAs/w1200-h630-p-k-no-nu/apostolos%2Bescolha.jpg'),
(5, 'Color carácter', 'Curso destinado para niños de 12 a 14 años', 'https://i.ytimg.com/vi/lRwYkaeDVgc/maxresdefault.jpg'),
(6, 'Prejuveniles', 'Curso destinado para niños de 15 a 18 años', 'https://th.bing.com/th/id/R.3d9a2f95df56079dad3ce125f31bd53a?rik=M29uL5kIiRGnNQ&riu=http%3a%2f%2fcjesus.co.kr%2fdata%2fitem%2f1498185297%2f7Jik7LKc66qF7J2E66i57J207Iug1.jpg&ehk=ykYWKQ0Rmbd3LjoxT%2faEujORaFf%2bKK3u95%2fT7ouZlJM%3d&risl=&pid=ImgRaw&r=0');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `eventos`
--

CREATE TABLE `eventos` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL,
  `descripcion` varchar(255) NOT NULL,
  `fechaInicio` datetime NOT NULL,
  `fechaFin` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `eventos`
--

INSERT INTO `eventos` (`id`, `nombre`, `descripcion`, `fechaInicio`, `fechaFin`) VALUES
(13, 'Culto ', 'Culto domingo 27 de octubre', '2024-10-27 18:00:00', '2024-10-27 19:00:00'),
(14, 'Culto ', 'Culto jueves 31 octubre', '2024-10-31 19:00:00', '2024-10-31 20:00:00');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `miembros`
--

CREATE TABLE `miembros` (
  `id` int(11) NOT NULL,
  `documento` varchar(255) NOT NULL,
  `nombres` varchar(255) NOT NULL,
  `apellidos` varchar(255) NOT NULL,
  `edad` varchar(255) NOT NULL,
  `telefono` varchar(255) NOT NULL,
  `permiso` varchar(255) NOT NULL,
  `direccion` varchar(255) NOT NULL,
  `cursoId` int(11) DEFAULT NULL,
  `rolId` int(11) DEFAULT NULL,
  `puntosId` int(11) DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `miembros`
--

INSERT INTO `miembros` (`id`, `documento`, `nombres`, `apellidos`, `edad`, `telefono`, `permiso`, `direccion`, `cursoId`, `rolId`, `puntosId`) VALUES
(12, '1006125584', 'Santiago ', 'Agudelo', '22', '3152592715', '', 'Calle 24 #5-33', 6, 1, 15),
(13, '1006125534', 'Andres', 'Rivera', '22', '3125062963', '', 'Calle 59 # 13A-49', 6, 1, 16);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `puntos`
--

CREATE TABLE `puntos` (
  `id` int(11) NOT NULL,
  `totales` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `puntos`
--

INSERT INTO `puntos` (`id`, `totales`) VALUES
(13, 1000),
(14, 0),
(15, 1000),
(16, 200),
(17, 0);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `rol`
--

CREATE TABLE `rol` (
  `id` int(11) NOT NULL,
  `nombre` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `rol`
--

INSERT INTO `rol` (`id`, `nombre`) VALUES
(1, 'Estudiante dominical'),
(2, 'Iglesia'),
(3, 'Profesor dominical');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `user`
--

CREATE TABLE `user` (
  `id` int(11) NOT NULL,
  `correo` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `user`
--

INSERT INTO `user` (`id`, `correo`, `password`) VALUES
(1, 'Ebenezer', 'Ebenezer2024#');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `actividades`
--
ALTER TABLE `actividades`
  ADD PRIMARY KEY (`id`),
  ADD KEY `FK_d50ac61083324cd94aa7613acd1` (`cursoId`);

--
-- Indices de la tabla `cursos`
--
ALTER TABLE `cursos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `eventos`
--
ALTER TABLE `eventos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `miembros`
--
ALTER TABLE `miembros`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `IDX_77d1ec9dea201b9d614b159492` (`documento`),
  ADD UNIQUE KEY `REL_a02bd0cb49a5ace34816450faa` (`puntosId`),
  ADD KEY `FK_f613848213295029c0acf9c6632` (`cursoId`),
  ADD KEY `FK_77cff2dbe0507373d72e9b92602` (`rolId`);

--
-- Indices de la tabla `puntos`
--
ALTER TABLE `puntos`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `rol`
--
ALTER TABLE `rol`
  ADD PRIMARY KEY (`id`);

--
-- Indices de la tabla `user`
--
ALTER TABLE `user`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `actividades`
--
ALTER TABLE `actividades`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `cursos`
--
ALTER TABLE `cursos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;

--
-- AUTO_INCREMENT de la tabla `eventos`
--
ALTER TABLE `eventos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `miembros`
--
ALTER TABLE `miembros`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT de la tabla `puntos`
--
ALTER TABLE `puntos`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=18;

--
-- AUTO_INCREMENT de la tabla `rol`
--
ALTER TABLE `rol`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT de la tabla `user`
--
ALTER TABLE `user`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `actividades`
--
ALTER TABLE `actividades`
  ADD CONSTRAINT `FK_d50ac61083324cd94aa7613acd1` FOREIGN KEY (`cursoId`) REFERENCES `cursos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Filtros para la tabla `miembros`
--
ALTER TABLE `miembros`
  ADD CONSTRAINT `FK_77cff2dbe0507373d72e9b92602` FOREIGN KEY (`rolId`) REFERENCES `rol` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_a02bd0cb49a5ace34816450faa5` FOREIGN KEY (`puntosId`) REFERENCES `puntos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `FK_f613848213295029c0acf9c6632` FOREIGN KEY (`cursoId`) REFERENCES `cursos` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
