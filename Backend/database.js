import mysql from "mysql2/promise";
import dotenv from "dotenv";
dotenv.config();

const pool = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

// Função para obter todos os condomínios
export async function getCondominios() {
  const [rows] = await pool.query(`
        SELECT tb_condominio.*, COUNT(tb_ocorrencia.condominio_id_fk) AS numero_ocorrencias 
        FROM tb_condominio 
        LEFT JOIN tb_ocorrencia ON tb_condominio.id_condominio = tb_ocorrencia.condominio_id_fk 
        GROUP BY tb_condominio.id_condominio
    `);
  return rows;
}

// Função para obter detalhes de um condomínio específico
export async function getCondominio(id) {
  const [rows] = await pool.query(
    "SELECT * FROM tb_condominio WHERE id_condominio = ?",
    [id]
  );
  return rows;
}

// Função para obter ocorrências por condomínio
export async function getOcorrenciasPorCondominio(id) {
  const [rows] = await pool.query(
    "SELECT * FROM tb_ocorrencia WHERE condominio_id_fk = ?",
    [id]
  );
  return rows;
}

// Função para obter anexos por ID de ocorrência
export async function getAnexosPorOcorrencia(idOcorrencia) {
  const [rows] = await pool.query(
    "SELECT * FROM tb_anexo WHERE ocorrencia_id_fk = ?",
    [idOcorrencia]
  );
  return rows;
}

// Função para obter detalhes de uma ocorrência específica
export async function getDetalheOcorrencia(id) {
  const [rows] = await pool.query(
    "SELECT * FROM tb_ocorrencia WHERE id_ocorrencia = ?",
    [id]
  );
  return rows;
}

// Função para obter um usuário específico
export async function getUsuario(id) {
  const [rows] = await pool.query(
    "SELECT * FROM tb_usuario WHERE id_usuario = ?",
    [id]
  );
  return rows;
}

export async function getCondominioUsuario(idUsuario) {
  const [rows] = await pool.query(
    `SELECT tb_condominio.id_condominio, tb_condominio.nome_condominio, tb_condominio.cep_condominio, tb_condominio.endereco_condominio
       FROM tb_condominio_usuario
       JOIN tb_condominio ON tb_condominio_usuario.id_condominio = tb_condominio.id_condominio
       WHERE tb_condominio_usuario.id_usuario = ?`,
    [idUsuario]
  );
  return rows[0]; // Retorna o primeiro resultado que deve conter as informações do condomínio
}

// Função para obter o tipo de um usuário
export async function getTipoUsuario(idUsuario) {
  const [rows] = await pool.query(
    "SELECT tipo_usuario FROM tb_condominio_usuario WHERE id_usuario = ?",
    [idUsuario]
  );
  return rows[0]; // Retorna o primeiro resultado
}

// Função para verificar o login do usuário
export async function getUsuarioPorEmailSenha(email, senha) {
  const [rows] = await pool.query(
    "SELECT * FROM tb_usuario WHERE email_usuario = ? AND senha_usuario = ?",
    [email, senha]
  );
  return rows;
}

export async function listarUsuariosComTipos() {
  const [rows] = await pool.query(`
    SELECT tb_usuario.id_usuario, tb_usuario.nome_usuario, tb_condominio_usuario.tipo_usuario
    FROM tb_usuario
    JOIN tb_condominio_usuario ON tb_usuario.id_usuario = tb_condominio_usuario.id_usuario
  `);
  return rows;
}

// Função para listar todos os usuários
export async function listarTodosUsuarios() {
  const [rows] = await pool.query("SELECT * FROM tb_usuario");
  return rows;
}

export async function getOcorrenciasCondominio(idCondominio) {
  const [rows] = await pool.query(
    `SELECT status_ocorrencia, COUNT(*) AS count
       FROM tb_ocorrencia
       WHERE condominio_id_fk = ?
       GROUP BY status_ocorrencia`,
    [idCondominio]
  );
  return rows; // Retorna todas as linhas que contêm contagens por status
}
