-- Criação do Banco de Dados
CREATE DATABASE IF NOT EXISTS `ocorrencias_db` DEFAULT CHARACTER SET utf8;
USE `ocorrencias_db`;

-- Tabela de Usuários
CREATE TABLE `usuarios` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `nome` VARCHAR(50) NOT NULL,
  `email` VARCHAR(100) NOT NULL,
  `senha` VARCHAR(100) NOT NULL
);

-- Tabela de Ocorrências
CREATE TABLE `ocorrencias` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `data` DATE NOT NULL,
  `tipo` VARCHAR(50) NOT NULL,
  `descricao` TEXT,
  `localizacao_lat` DECIMAL(9, 7),
  `localizacao_lon` DECIMAL(10, 7)
);

-- Tabela de Pessoas Colaboradoras
CREATE TABLE `pessoas_colaboradoras` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `nome` VARCHAR(50) NOT NULL,
  `cpf` CHAR(14) NOT NULL,
  `ocorrencia_id` INT,
  FOREIGN KEY (`ocorrencia_id`) REFERENCES `ocorrencias` (`id`)
);

-- Tabela de Anexos (Fotos e Vídeos)
CREATE TABLE `anexos` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `ocorrencia_id` INT NOT NULL,
  `tipo` ENUM('foto', 'video') NOT NULL,
  `caminho` VARCHAR(255) NOT NULL,
  FOREIGN KEY (`ocorrencia_id`) REFERENCES `ocorrencias` (`id`)
);

-- Tabela de Órgãos Governamentais
CREATE TABLE `orgaos_governamentais` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `nome` VARCHAR(50) NOT NULL
);

-- Tabela de Responsabilidades por Tipo de Ocorrência
CREATE TABLE `responsabilidades` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `tipo_ocorrencia` VARCHAR(50) NOT NULL,
  `orgao_governamental_id` INT,
  FOREIGN KEY (`orgao_governamental_id`) REFERENCES `orgaos_governamentais` (`id`)
);
