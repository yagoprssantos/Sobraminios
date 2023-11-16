-- Criação do Banco de Dados
CREATE DATABASE IF NOT EXISTS `condominio_ocorrencias_db` DEFAULT CHARACTER SET utf8;
USE `condominio_ocorrencias_db`;

-- Tabela de Condomínios
CREATE TABLE tb_condominio (
 `id_condominio` INT AUTO_INCREMENT PRIMARY KEY,
 `nome_condominio` VARCHAR(100) NOT NULL,
 `qtd_moradores` INT NOT NULL,
 `cep_condominio` VARCHAR(8) NOT NULL,
 `endereco_condominio` VARCHAR(150) NOT NULL,
 `id_administrador_fk` INT NOT NULL,
  FOREIGN KEY (id_administrador_fk) REFERENCES usuario(id_usuario)
);


-- Tabela de Usuários
create table `tb_usuario`(
 `id_usuario` INT AUTO_INCREMENT PRIMARY KEY,
 `cpf_usuario` VARCHAR(11) NOT NULL UNIQUE,
 `nome_usuario` VARCHAR(150) NOT NULL,
 `email_usuario` VARCHAR(90) NOT NULL,
 `senha_usuario` VARCHAR(90) NOT NULL,
 `cep_usuario` VARCHAR(150) NOT NULL,
 `telefone_usuario` VARCHAR(11) NOT NULL,
 `tipo_usuario` ENUM('morador', 'administração') NOT NULL,
 `condominio_id_fk` INT NOT NULL,
  FOREIGN KEY (condominio_id_fk) REFERENCES condominio(id_condominio)
);


-- Criar tabela de adm?
-- Tabela de Administradores
CREATE TABLE tb_administrador (
 `id_administrador` VARCHAR(100) NOT NULL,
 `email_administrador` INT AUTO_INCREMENT PRIMARY KEY,
 `nome_administrador` VARCHAR(50) NOT NULL,
 `senha_administrador` VARCHAR(50) NOT NULL,
 `telefone_administrador` VARCHAR(11) NOT NULL,
 `condominio_id_fk` INT NOT NULL,
  FOREIGN KEY (condominio_id_fk) REFERENCES condominio(id_condominio)
);


-- Tabela de Ocorrências
CREATE TABLE tb_ocorrencia (
 `id_ocorrencia` INT AUTO_INCREMENT PRIMARY KEY,
 `tipo_ocorrencia` ENUM('lixo', 'buraco em pista', 'assalto', 'bueiro sem proteção', 'placa danificada', 'banco danificado', 'calçada danificada', 'outros') NOT NULL,
 `descricao_ocorrencia` VARCHAR(255) NOT NULL,
 `localizacao_ocorrencia` VARCHAR(75) NOT NULL,
 `data_ocorrencia` DATETIME NOT NULL,
 `status_ocorrencia` ENUM('ocorrência resolvida', 'ocorrência em resolução', 'ocorrência não resolvida') NOT NULL,
 `aprovacao_ocorrencia` INT NOT NULL,
 `usuario_id_fk` INT NOT NULL,
 `condominio_id_fk` INT NOT NULL,
 `anexo_id_fk` INT NOT NULL,
 FOREIGN KEY (usuario_id_fk) REFERENCES usuario(id_usuario),
 FOREIGN KEY (condominio_id_fk) REFERENCES condominio(id_condominio),
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
  `comentario` TEXT NOT NULL,
  `data_comentarios` DATE NOT NULL,
  `horario_comentarios` DATETIME NOT NULL,
  `usuario_id_fk` INT NOT NULL,
  `ocorrencia_id_fk` INT NOT NULL,
  FOREIGN KEY (`usuario_id_fk`) REFERENCES `usuarios` (`id_usuarios`),
  FOREIGN KEY (`ocorrencia_id_fk`) REFERENCES `ocorrencias` (`id_ocorrencias`)
);

