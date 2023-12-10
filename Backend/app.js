import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import {
  getCondominios,
  getCondominio,
  getOcorrenciasPorCondominio,
  getDetalheOcorrencia,
  getUsuario,
  getCondominioUsuario,
  getTipoUsuario,
  listarTodosUsuarios,
  getUsuarioPorEmailSenha,
  listarUsuariosComTipos,
  getAnexosPorOcorrencia,
} from "./database.js";

const app = express();

app.use(bodyParser.json());
app.use(cors({ origin: "*" }));

// Rota para listar todos os condomínios
app.get("/condominios", async (req, res) => {
  try {
    const condominios = await getCondominios();
    res.json(condominios);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar condomínios.");
  }
});

// Rota para listar os anexos de uma ocorrência específica
app.get("/ocorrencias/:id/anexos", async (req, res) => {
  const idOcorrencia = req.params.id;
  try {
    const anexos = await getAnexosPorOcorrencia(idOcorrencia);
    res.json(anexos);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar anexos da ocorrência.");
  }
});

// Rota para obter detalhes de um condomínio específico
app.get("/condominios/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const condominio = await getCondominio(id);
    res.json(condominio);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar detalhes do condomínio.");
  }
});

// Rota para listar as ocorrências de um condomínio específico
app.get("/condominios/:id/ocorrencias", async (req, res) => {
  const id = req.params.id;
  try {
    const ocorrencias = await getOcorrenciasPorCondominio(id);
    res.json(ocorrencias);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar ocorrências.");
  }
});

// Rota para obter detalhes de uma ocorrência específica
app.get("/ocorrencias/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const detalhe = await getDetalheOcorrencia(id);
    res.json(detalhe);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar detalhes da ocorrência.");
  }
});

// Rota para obter um usuário específico
app.get("/usuarios/:id", async (req, res) => {
  const id = req.params.id;
  try {
    const usuario = await getUsuario(id);
    res.json(usuario);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar usuário.");
  }
});

// Rota para obter o condomínio de um usuário
app.get("/usuarios/:id/condominio", async (req, res) => {
  const id = req.params.id;
  try {
    const condominio = await getCondominioUsuario(id);
    if (condominio) {
      res.json(condominio);
    } else {
      res.status(404).send("Condomínio não encontrado para o usuário.");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar condomínio do usuário.");
  }
});

app.get("/condominios/:id/ocorrencias", async (req, res) => {
  const id = req.params.id;
  try {
    const ocorrencias = await getOcorrenciasCondominio(id);
    res.json(ocorrencias);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar ocorrências do condomínio.");
  }
});

// Rota para listar todos os usuários com seus tipos
app.get("/usuarios-tipos", async (req, res) => {
  try {
    const usuariosTipos = await listarUsuariosComTipos();
    res.json(usuariosTipos);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar usuários com tipos.");
  }
});

// Rota para obter o tipo de um usuário
app.get("/usuarios/:id/tipo", async (req, res) => {
  const id = req.params.id;
  try {
    const tipo = await getTipoUsuario(id);
    if (tipo) {
      res.json(tipo);
    } else {
      res.status(404).send("Tipo de usuário não encontrado.");
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar tipo do usuário.");
  }
});

app.get("/usuarios", async (req, res) => {
  try {
    const usuarios = await listarTodosUsuarios();
    res.json(usuarios);
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao buscar todos os usuários.");
  }
});

// Rota de login
app.post("/login", async (req, res) => {
  const { email, senha } = req.body;
  try {
    const usuarios = await getUsuarioPorEmailSenha(email, senha);
    if (usuarios.length > 0) {
      res.json({ success: true, usuario: usuarios[0] });
    } else {
      res.json({ success: false });
    }
  } catch (err) {
    console.error(err);
    res.status(500).send("Erro ao tentar fazer login.");
  }
});

app.listen(8080, () => {
  console.log("Servidor rodando na porta 8080");
});
