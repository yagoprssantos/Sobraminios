-- Criação do Banco de Dados
CREATE DATABASE IF NOT EXISTS `ocorrencias_db` DEFAULT CHARACTER SET utf8;
USE `ocorrencias_db`;

-- Tabela de Usuários
create table `usuario`(
 `id` INT AUTO_INCREMENT PRIMARY KEY,
 `cpf` VARCHAR(11) NOT NULL UNIQUE,
 `nome` VARCHAR(150) NOT NULL,
 `email` VARCHAR(90) NOT NULL,
 `senha` VARCHAR(90) NOT NULL,
 `endereco` VARCHAR(150),
 `telefone` VARCHAR(11) NOT NULL,
 `cep` VARCHAR(8) NOT NULL
);

-- Tabela de Órgãos Governamentais
CREATE TABLE orgaos_governamentais (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `nome` VARCHAR(100),
  `estado` CHAR(2) NOT NULL,
  `tipo` ENUM('municipal', 'estadual', 'federal') NOT NULL
  `email` VARCHAR(50) NOT NULL,
  `senha` VARCHAR(50) NOT NULL,
);


-- Tabela de Ocorrências
CREATE TABLE ocorrencia (
 `id` INT AUTO_INCREMENT PRIMARY KEY,
 `tipo` ENUM('lixo', 'buraco em pista', 'assalto', 'bueiro sem proteção', 'placa danificada', 'banco danificado', 'calçada danificada', 'outros') NOT NULL,
 `descricao` TEXT NOT NULL,
 `localizacao` VARCHAR(60) NOT NULL,
 `data_ocorrencia` DATETIME NOT NULL,
 `status` ENUM('ocorrência resolvida', 'ocorrência em resolução', 'ocorrência não resolvida') NOT NULL,
 `usuario_id_fk` INT NOT NULL,
 `orgao_id_fk` INT NOT NULL,
 FOREIGN KEY (usuario_id_fk) REFERENCES usuario(id)
 FOREIGN KEY (orgao_id_fk) REFERENCES orgaos_governamentais(id)
);


-- Tabela de Anexos (Fotos e Vídeos)
CREATE TABLE anexo (
 `id` INT PRIMARY KEY,
 `ocorrencia_id_fk` INT,
 `caminho` VARCHAR(255) NOT NULL,
 `tipo` ENUM('foto', 'video') NOT NULL,
  dado BLOB, -- Armazena a mídia como dados binários
  FOREIGN KEY (ocorrencia_id_fk) REFERENCES ocorrencia(id)
);

-- Tabela de Comentários
CREATE TABLE `comentarios` (
  `id` INT AUTO_INCREMENT PRIMARY KEY,
  `ocorrencia_id_fk` INT NOT NULL,
  `usuario_id_fk` INT NOT NULL,
  `comentario` TEXT NOT NULL,
  `data` DATE NOT NULL,
  `horario` DATETIME NOT NULL,
  FOREIGN KEY (`ocorrencia_id_fk`) REFERENCES `ocorrencias` (`id`),
  FOREIGN KEY (`usuario_id_fk`) REFERENCES `usuarios` (`id`)
);

