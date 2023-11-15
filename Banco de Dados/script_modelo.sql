-- Criação do Banco de Dados
CREATE DATABASE IF NOT EXISTS `ocorrencias_db` DEFAULT CHARACTER SET utf8;
USE `ocorrencias_db`;

-- Tabela de Usuários
create table `tb_usuario`(
 `id_usuario` INT AUTO_INCREMENT PRIMARY KEY,
 `cpf_usuario` VARCHAR(11) NOT NULL UNIQUE,
 `nome_usuario` VARCHAR(150) NOT NULL,
 `email_usuario` VARCHAR(90) NOT NULL,
 `senha_usuario` VARCHAR(90) NOT NULL,
 `endereco_usuario` VARCHAR(150),
 `telefone_usuario` VARCHAR(11) NOT NULL,
 `cep_usuario` VARCHAR(8) NOT NULL
);

-- Tabela de Órgãos Governamentais
CREATE TABLE tb_orgaos_governamentais (
  `id_orgaos_governamentais` INT AUTO_INCREMENT PRIMARY KEY,
  `nome_orgaos_governamentais` VARCHAR(100),
  `estado_orgaos_governamentais` CHAR(2) NOT NULL,
  `tipo_orgaos_governamentais` ENUM('municipal', 'estadual', 'federal') NOT NULL,
  `email_orgaos_governamentais` VARCHAR(50) NOT NULL,
  `senha_orgaos_governamentais` VARCHAR(50) NOT NULL
);


-- Tabela de Ocorrências
CREATE TABLE tb_ocorrencia (
 `id_ocorrencia` INT AUTO_INCREMENT PRIMARY KEY,
 `tipo_ocorrencia` ENUM('lixo', 'buraco em pista', 'assalto', 'bueiro sem proteção', 'placa danificada', 'banco danificado', 'calçada danificada', 'outros') NOT NULL,
 `descricao_ocorrencia` TEXT NOT NULL,
 `localizacao_ocorrencia` VARCHAR(60) NOT NULL,
 `data_ocorrencia` DATETIME NOT NULL,
 `status_ocorrencia` ENUM('ocorrência resolvida', 'ocorrência em resolução', 'ocorrência não resolvida') NOT NULL,
 `usuario_id_fk` INT NOT NULL,
 `orgao_id_fk` INT NOT NULL,
 `anexo_id_fk` INT NOT NULL,
 FOREIGN KEY (usuario_id_fk) REFERENCES usuario(id_usuario),
 FOREIGN KEY (orgao_id_fk) REFERENCES orgaos_governamentais(id_orgaos_governamentais),
 FOREIGN KEY (ocorrencia_id_fk) REFERENCES ocorrencia(id)
);


-- Tabela de Anexos (Fotos e Vídeos)
CREATE TABLE tb_anexo (
 `id_anexo` INT PRIMARY KEY,
 `caminho_anexo` VARCHAR(255) NOT NULL,
 `tipo_anexo` ENUM('foto', 'video') NOT NULL,
  dado BLOB -- Armazena a mídia como dados binários
);

-- Tabela de Comentários
CREATE TABLE `tb_comentarios` (
  `id_comentarios` INT AUTO_INCREMENT PRIMARY KEY,
  `ocorrencia_id_fk` INT NOT NULL,
  `usuario_id_fk` INT NOT NULL,
  `comentario` TEXT NOT NULL,
  `data_comentarios` DATE NOT NULL,
  `horario_comentarios` DATETIME NOT NULL,
  FOREIGN KEY (`ocorrencia_id_fk`) REFERENCES `ocorrencias` (`id_ocorrencias`),
  FOREIGN KEY (`usuario_id_fk`) REFERENCES `usuarios` (`id_usuarios`)
);

