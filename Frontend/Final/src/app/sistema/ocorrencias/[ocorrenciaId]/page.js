"use client";

import SystemTable from "@/app/components/UserTable";
import SystemPage from "@/app/components/SystemPage";
import { Input, Select, SelectItem, Button } from "@nextui-org/react";
import { useState, useEffect } from "react";

async function getOcorrencia(ocorrenciaId) {
  const response = await fetch(
    `http://localhost:3001/api/ocorrencias/${ocorrenciaId}`,
    {
      method: "GET",
    }
  );
  return response.json();
}

export default function UsersPage({ params }) {
  // Estado para gerenciar os dados da ocorrência
  const [ocorrenciaData, setOcorrenciaData] = useState({
    tipo_ocorrencia: "",
    descricao_ocorrencia: "",
    status_ocorrencia: "Ocorrência não Resolvida",
    localizacao_ocorrencia: "",
    aprovacao_ocorrencia: 0,
    condominio_id_fk: params?.ocorrenciaId,
    usuario_id_fk: 1,
    data_ocorrencia: null,
  });

  const tiposOcorrencia = [
    { value: "Vazamento de Água", label: "Vazamento de Água" },
    { value: "Falha Elétrica", label: "Falha Elétrica" },
    { value: "Vandalismo", label: "Vandalismo" },
    { value: "Furtos ou Roubos", label: "Furtos ou Roubos" },
    { value: "Ruídos Excessivos", label: "Ruídos Excessivos" },
    { value: "Comportamento Perturbador", label: "Comportamento Perturbador" },
    { value: "Reparos Estruturais", label: "Reparos Estruturais" },
    { value: "Velocidade Excessiva", label: "Velocidade Excessiva" },
    { value: "Estacionamento Inadequado", label: "Estacionamento Inadequado" },
    { value: "Cães Soltos", label: "Cães Soltos" },
    {
      value: "Limpeza Relacionada a Animais",
      label: "Limpeza Relacionada a Animais",
    },
    {
      value: "Descumprimento de Regras do Condomínio",
      label: "Descumprimento de Regras do Condomínio",
    },
    { value: "Problemas com Elevador", label: "Problemas com Elevador" },
    { value: "Avarias em Áreas Comuns", label: "Avarias em Áreas Comuns" },
    { value: "Questões de Segurança", label: "Questões de Segurança" },
    { value: "Danos a Propriedade", label: "Danos a Propriedade" },
    { value: "Lixo ou Despejo Irregular", label: "Lixo ou Despejo Irregular" },
    {
      value: "Problemas de Manutenção Geral",
      label: "Problemas de Manutenção Geral",
    },
    { value: "Conflitos entre Moradores", label: "Conflitos entre Moradores" },
    { value: "Outros", label: "Outros" },
  ];

  // Estado para armazenar a lista de usuários/ocorrências
  const [users, setUsers] = useState([]);

  // Função para atualizar o estado com base nas mudanças de input
  const handleInputChange = (e) => {
    setOcorrenciaData({
      ...ocorrenciaData,
      [e.target.name]: e.target.value,
    });
  };

  // Função para lidar com o envio do formulário
  const handleSubmit = async (e) => {
    e.preventDefault();
    // Definindo a data_ocorrencia para a data e hora atual
    const dataOcorrenciaFormatada = new Date(ocorrenciaData.data_ocorrencia)
      .toISOString()
      .slice(0, 19)
      .replace("T", " ");
    const newData = {
      ...ocorrenciaData,
      data_ocorrencia: dataOcorrenciaFormatada,
      tipo_ocorrencia: ocorrenciaData.tipo_ocorrencia,
    };

    console.log("Enviando dados:", newData);

    try {
      const response = await fetch("http://localhost:3001/api/ocorrencia", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newData),
      });

      if (!response.ok) {
        throw new Error(`HTTP error! status: ${response.status}`);
      }

      const result = await response.json();
      alert("Sua ocorrência foi adicionada!");
      console.log(result);
    } catch (error) {
      console.error("Erro ao adicionar ocorrência:", error);
    }
  };

  // Função para carregar as ocorrências
  const fetchUsers = async () => {
    if (params?.ocorrenciaId) {
      const data = await getOcorrencia(params.ocorrenciaId);
      setUsers(data);
    }
  };

  // Efeito para carregar os usuários/ocorrências quando o componente é montado ou quando params.ocorrenciaId muda
  useEffect(() => {
    fetchUsers();
  }, [params?.ocorrenciaId]);

  return (
    <SystemPage title="Inicio">
      {/* Formulário para adicionar uma nova ocorrência */}
      <form
        className="flex flex-col gap-2"
        onSubmit={handleSubmit}
        style={{ marginBottom: "20px" }}
      >
        <div className="flex space-x-2">
          <Select
            label="Tipo de Ocorrência"
            placeholder="Selecione um tipo de ocorrência"
            value={ocorrenciaData.tipo_ocorrencia}
            onChange={(e) =>
              setOcorrenciaData({
                ...ocorrenciaData,
                tipo_ocorrencia: e.target.value,
              })
            }
          >
            {tiposOcorrencia.map((tipo) => (
              <SelectItem
                className="text-default-800"
                key={tipo.value}
                value={tipo.value}
              >
                {tipo.label}
              </SelectItem>
            ))}
          </Select>
          <Input
            clearable
            label="Localização da Ocorrência"
            name="localizacao_ocorrencia"
            value={ocorrenciaData.localizacao_ocorrencia}
            onChange={handleInputChange}
          />
        </div>
        <Input
          clearable
          label="Descrição da Ocorrência"
          name="descricao_ocorrencia"
          value={ocorrenciaData.descricao_ocorrencia}
          onChange={handleInputChange}
        />
        <Button type="submit">Adicionar Ocorrência</Button>
      </form>

      {/* Tabela para exibir os usuários/ocorrências */}
      <SystemTable users={users} />
    </SystemPage>
  );
}
