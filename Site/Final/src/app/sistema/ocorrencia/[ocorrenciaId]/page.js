"use client";

import SystemPage from "@/app/components/SystemPage";
import Image from "next/image";

async function getOcorrencia(ocorrenciaId) {
  const response = await fetch(
    `http://localhost:3001/api/ocorrencia/${ocorrenciaId}`,
    {
      method: "GET",
    }
  );
  return response.json();
}


export default async function Users({ params }) {
  const users = await getOcorrencia(params.ocorrenciaId);
  return (
    <SystemPage title="Ocorrência">
      <div className="bg-white shadow-md rounded p-6">
        <h2 className="text-2xl font-bold mb-4 text-default-800">
          {users.tipo_ocorrencia}
        </h2>
        <div className="grid grid-cols-1 gap-4 text-default-800">
          <p>{users.status_ocorrencia}</p>
          <p>
            <strong>Tipo da ocorrência:</strong> {users.tipo_ocorrencia}
          </p>
          <p>
            <strong>Descrição:</strong> {users.descricao_ocorrencia}
          </p>
          <p>
            <strong>Endereço completo:</strong> {users.endereco_condominio}
          </p>
          <p>
            <strong>Condominio:</strong> {users.endereco_condominio}
          </p>
          <p>
            <strong>CEP:</strong> {users.cep_condominio}
          </p>

          {users.anexos && users.anexos.length > 0 && (
            <div>
              <strong>Anexos:</strong>
              <div className="grid grid-cols-3 gap-4 mt-5">
                {users.anexos.map((anexo, index) => (
                  <div key={index} className="col-span-1">
                    <Image
                      src={anexo.caminho_anexo}
                      alt={`Anexo ${index + 1}`}
                      width={100}
                      height={100}
                      layout="responsive"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          
          
          {users.comentarios && users.comentarios.length > 0 && (
            <div>
              <strong className="mt-8">Comentários:</strong>
              {users.comentarios.map((comentario, index) => (
                <div key={index} className="border-b border-gray-200 py-4">
                  <div className="flex justify-between">
                    <span className="font-semibold">
                      {comentario.nome_usuario}
                    </span>
                    <span className="text-sm text-gray-600">
                      {comentario.data_comentario}
                    </span>
                  </div>
                  <p className="text-gray-800 mt-2">{comentario.comentario}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </SystemPage>
  );
}
