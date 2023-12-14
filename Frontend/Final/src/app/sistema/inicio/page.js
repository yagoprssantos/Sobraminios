import React from "react";
import SystemPage from "@/app/components/SystemPage";
import { FaRegSmile as Icon } from "react-icons/fa";

export default function Page() {
  return (
    <SystemPage title="inicio">
      <div className="flex flex-col items-center">
        <Icon size={200} color="#B8B8B8" />
        <h2 className="text-3xl font-semibold leading-snug text-center text-neutral-400 mt-16">
          Olá! Esta é a plataforma da Sobramínios
        </h2>
        <h2 className="text-3xl font-semibold leading-snug text-center text-neutral-400 mt-4">
          Aqui, você terá acesso às informações, ocorrências e usuários do seu
          condomínio cadastrado!
        </h2>
        <h2 className="text-3xl font-semibold leading-snug text-center text-neutral-400 mt-4">
          Selecione uma das opções no painel a esquerda para visualizar mais
          sobre cada uma delas
        </h2>
      </div>
    </SystemPage>
  );
}
