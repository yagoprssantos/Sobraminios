-- Criação do Banco de Dados
CREATE DATABASE IF NOT EXISTS `condominio_ocorrencias_db` DEFAULT CHARACTER SET utf8;
USE `condominio_ocorrencias_db`;

-- Tabela de Condomínios
CREATE TABLE tb_condominio (
 `id_condominio` INT AUTO_INCREMENT PRIMARY KEY,
 `nome_condominio` VARCHAR(100) NOT NULL,
 `cep_condominio` VARCHAR(8) NOT NULL,
 `endereco_condominio` VARCHAR(150) NOT NULL,
 `lat_condominio` DECIMAL(8,6),
 `long_condominio` DECIMAL(8,6)
);


-- Tabela de Usuários
CREATE TABLE tb_usuario (
 `id_usuario` INT AUTO_INCREMENT PRIMARY KEY,
 `cpf_usuario` VARCHAR(14) NOT NULL,
 `nome_usuario` VARCHAR(150) NOT NULL,
 `email_usuario` VARCHAR(90) NOT NULL,
 `senha_usuario` VARCHAR(90) NOT NULL,
 `cep_usuario` VARCHAR(9) NOT NULL,
 `telefone_usuario` VARCHAR(14) NOT NULL,
 `condominio_id_fk` INT NOT NULL,
  FOREIGN KEY (condominio_id_fk) REFERENCES tb_condominio(`id_condominio`)
);


-- Tabela dos Usuários de cada Condomínio
CREATE TABLE tb_condominio_usuario (
 `id_usuario` INT,
 `id_condominio` INT,
 `tipo_usuario` ENUM('Morador', 'Visitante', 'Administrador') NOT NULL,
 PRIMARY KEY (`id_usuario`, `id_condominio`),
 FOREIGN KEY (`id_usuario`) REFERENCES tb_usuario(`id_usuario`),
 FOREIGN KEY (`id_condominio`) REFERENCES tb_condominio(`id_condominio`)
);


-- Tabela de Ocorrências
CREATE TABLE tb_ocorrencia (
 `id_ocorrencia` INT AUTO_INCREMENT PRIMARY KEY,
 `tipo_ocorrencia` ENUM('Vazamento de Água','Falha Elétrica','Vandalismo','Furtos ou Roubos','Ruídos Excessivos','Comportamento Pertubador','Reparos Estruturais','Velocidade Excessiva','Estacionamento Inadequado','Cães Soltos','Limpeza Relacionada a Animais') NOT NULL,
 `descricao_ocorrencia` VARCHAR(255) NOT NULL,
 `localizacao_ocorrencia` VARCHAR(75) NOT NULL,
 `data_ocorrencia` DATETIME NOT NULL,
 `status_ocorrencia` ENUM('Ocorrência Resolvida', 'Ocorrência em Resolução', 'Ocorrência não Resolvida') NOT NULL,
 `aprovacao_ocorrencia` INT NOT NULL,
 `usuario_id_fk` INT NOT NULL,
 `condominio_id_fk` INT NOT NULL,
 FOREIGN KEY (`usuario_id_fk`) REFERENCES tb_usuario(`id_usuario`),
 FOREIGN KEY (`condominio_id_fk`) REFERENCES tb_condominio(`id_condominio`)
);


-- Tabela de Anexos (Fotos e Vídeos)
CREATE TABLE tb_anexo (
 `id_anexo` INT AUTO_INCREMENT PRIMARY KEY,
 `caminho_anexo` VARCHAR(255) NOT NULL,
 `tipo_anexo` ENUM('foto', 'video') NOT NULL,
 `dado` BLOB, -- Armazena a mídia como dados binários
 `ocorrencia_id_fk` INT NOT NULL,
  FOREIGN KEY (ocorrencia_id_fk) REFERENCES tb_ocorrencia(`id_ocorrencia`)

);


-- Tabela de Comentários
CREATE TABLE tb_comentario (
  `id_comentario` INT AUTO_INCREMENT PRIMARY KEY,
  `comentario` TEXT NOT NULL,
  `data_comentario` DATETIME NOT NULL,
  `usuario_id_fk` INT NOT NULL,
  `ocorrencia_id_fk` INT NOT NULL,
  FOREIGN KEY (`usuario_id_fk`) REFERENCES `tb_usuario` (`id_usuario`),
  FOREIGN KEY (`ocorrencia_id_fk`) REFERENCES `tb_ocorrencia` (`id_ocorrencia`)
);
