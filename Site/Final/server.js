const express = require("express");
const next = require("next");
const cors = require("cors"); // Importa o pacote CORS
const {
  listarCondominios,
  listarOcorrencias,
  listarUsuarios,
  buscarOcorrenciaPorId,
  listarAnexosDaOcorrencia,
  adicionarOcorrencia,
  adicionarComentario,
} = require("./database");

const port = process.env.PORT || 3001;
const dev = process.env.NODE_ENV !== "production";
const app = next({ dev });
const handle = app.getRequestHandler();

app.prepare().then(() => {
  const server = express();

  // Ativa o CORS para todas as requisições
  server.use(cors());
  server.use(express.json());

  // Rota para listar condomínios
  server.get("/api/condominios", async (req, res) => {
    try {
      const condominios = await listarCondominios();
      res.json(condominios);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

  // Rota para listar ocorrências por ID de condomínio
  server.get("/api/ocorrencias/:idCondominio", async (req, res) => {
    try {
      const idCondominio = req.params.idCondominio;
      const ocorrencias = await listarOcorrencias(idCondominio);
      res.json(ocorrencias);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

  server.get("/api/ocorrencia/:idOcorrencia", async (req, res) => {
    try {
      const idOcorrencia = req.params.idOcorrencia;
      const ocorrencia = await buscarOcorrenciaPorId(idOcorrencia);
      if (ocorrencia) {
        res.json(ocorrencia);
      } else {
        res.status(404).send("Ocorrência não encontrada");
      }
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

  server.get("/api/ocorrencia/:idOcorrencia/anexos", async (req, res) => {
    try {
      const idOcorrencia = req.params.idOcorrencia;
      const anexos = await listarAnexosDaOcorrencia(idOcorrencia);
      res.json(anexos);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

  server.post("/api/ocorrencia", async (req, res) => {
    try {
      console.log(req.body);
      const dadosOcorrencia = req.body;
      const idOcorrencia = await adicionarOcorrencia(dadosOcorrencia);
      res
        .status(201)
        .json({ mensagem: "Ocorrência adicionada com sucesso", idOcorrencia });
    } catch (error) {
      console.error("Erro ao adicionar ocorrência:", error);
      res.status(500).send(`Erro ao adicionar ocorrência: ${error.message}`);
    }
  });

  // Rota para listar usuários
  server.get("/api/usuarios", async (req, res) => {
    try {
      const usuarios = await listarUsuarios();
      res.json(usuarios);
    } catch (error) {
      res.status(500).send(error.message);
    }
  });

  server.post("/api/comentario", async (req, res) => {
    try {
      const novoComentarioId = await adicionarComentario(req.body);
      res
        .status(201)
        .json({
          mensagem: "Comentário adicionado com sucesso",
          id: novoComentarioId,
        });
    } catch (error) {
      console.error("Erro ao adicionar comentário:", error);
      res.status(500).send(error.message);
    }
  });

  // Default handler for Next.js
  server.get("*", (req, res) => {
    return handle(req, res);
  });

  server.listen(port, (err) => {
    if (err) throw err;
    console.log(`> Ready on http://localhost:${port}`);
  });
});
