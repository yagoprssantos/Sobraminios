const mysql = require("mysql2/promise");

const pool = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "sobraminios",
  database: "condominio_ocorrencias_db",
});

async function listarCondominios() {
  const [rows] = await pool.query(
    "SELECT id_condominio as id, nome_condominio, endereco_condominio, cep_condominio FROM tb_condominio"
  );
  return rows;
}

async function listarOcorrencias(idCondominio) {
  const [rows] = await pool.query(
    `
        SELECT tb_ocorrencia.id_ocorrencia AS id, tb_ocorrencia.tipo_ocorrencia, tb_condominio.endereco_condominio, tb_condominio.cep_condominio
        FROM tb_ocorrencia
        JOIN tb_condominio ON tb_ocorrencia.condominio_id_fk = tb_condominio.id_condominio
        WHERE tb_ocorrencia.condominio_id_fk = ?
      `,
    [idCondominio]
  );
  return rows;
}

async function buscarOcorrenciaPorId(idOcorrencia) {
  // Busca os detalhes da ocorrência
  const [ocorrencia] = await pool.query(
    `
    SELECT 
      tb_ocorrencia.id_ocorrencia AS id, 
      tb_ocorrencia.tipo_ocorrencia,
      tb_ocorrencia.data_ocorrencia,
      tb_ocorrencia.descricao_ocorrencia,
      tb_ocorrencia.status_ocorrencia,
      tb_condominio.nome_condominio,
      tb_condominio.endereco_condominio,
      tb_condominio.cep_condominio
    FROM tb_ocorrencia
    JOIN tb_condominio ON tb_ocorrencia.condominio_id_fk = tb_condominio.id_condominio
    WHERE tb_ocorrencia.id_ocorrencia = ?
    `,
    [idOcorrencia]
  );

  if (ocorrencia.length > 0) {
    // Busca os comentários e os usuários que os fizeram
    const [comentarios] = await pool.query(
      `
      SELECT 
        tb_comentario.id_comentario,
        tb_comentario.comentario,
        tb_comentario.data_comentario,
        tb_usuario.nome_usuario
      FROM tb_comentario
      JOIN tb_usuario ON tb_comentario.usuario_id_fk = tb_usuario.id_usuario
      WHERE tb_comentario.ocorrencia_id_fk = ?
      `,
      [idOcorrencia]
    );

    // Busca os anexos da ocorrência
    const [anexos] = await pool.query(
      `
      SELECT caminho_anexo
      FROM tb_anexo
      WHERE ocorrencia_id_fk = ?
      `,
      [idOcorrencia]
    );

    // Retorna a ocorrência com comentários, anexos e informações do usuário
    return { ...ocorrencia[0], comentarios, anexos };
  }

  return null; // Retorna null se não encontrar a ocorrência
}

async function adicionarComentario(dadosComentario) {
  const { comentario, usuario_id_fk, ocorrencia_id_fk, data_comentario } =
    dadosComentario;

  const [result] = await pool.query(
    "INSERT INTO tb_comentario (comentario, usuario_id_fk, ocorrencia_id_fk, data_comentario) VALUES (?, ?, ?, ?)",
    [comentario, usuario_id_fk, ocorrencia_id_fk, data_comentario]
  );

  return result.insertId;
}

async function adicionarOcorrencia(dadosOcorrencia) {
  const {
    tipo_ocorrencia,
    data_ocorrencia,
    descricao_ocorrencia,
    status_ocorrencia,
    condominio_id_fk,
    localizacao_ocorrencia,
    aprovacao_ocorrencia,
    usuario_id_fk, // Adicione esta linha
  } = dadosOcorrencia;

  // Atualize a query para incluir usuario_id_fk
  const [result] = await pool.query(
    "INSERT INTO tb_ocorrencia (tipo_ocorrencia, data_ocorrencia, descricao_ocorrencia, status_ocorrencia, condominio_id_fk, localizacao_ocorrencia, aprovacao_ocorrencia, usuario_id_fk) VALUES (?, ?, ?, ?, ?, ?, ?, ?)",
    [
      tipo_ocorrencia,
      data_ocorrencia,
      descricao_ocorrencia,
      status_ocorrencia,
      condominio_id_fk,
      localizacao_ocorrencia,
      aprovacao_ocorrencia,
      usuario_id_fk,
    ]
  );

  return result.insertId;
}

async function listarAnexosDaOcorrencia(idOcorrencia) {
  const [rows] = await pool.query(
    `
    SELECT caminho_anexo
    FROM tb_anexo
    WHERE ocorrencia_id_fk = ?
    `,
    [idOcorrencia]
  );
  return rows;
}

async function listarUsuarios() {
  const [rows] = await pool.query(`
      SELECT 
          tb_usuario.id_usuario AS id, 
          tb_usuario.nome_usuario, 
          tb_condominio_usuario.tipo_usuario
      FROM tb_usuario
      JOIN tb_condominio_usuario ON tb_usuario.id_usuario = tb_condominio_usuario.id_usuario
    `);
  return rows;
}

module.exports = {
  listarCondominios,
  listarOcorrencias,
  listarUsuarios,
  buscarOcorrenciaPorId,
  listarAnexosDaOcorrencia,
  adicionarOcorrencia,
  adicionarComentario,
};
