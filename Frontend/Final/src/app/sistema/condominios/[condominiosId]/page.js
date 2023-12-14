import SystemTable from "@/app/components/UserTable";
import SystemPage from "@/app/components/SystemPage";

// Esta é a função getServerSideProps correta
export async function getUsers() {
  const res = await fetch("http://localhost:3001/api/ocorrencias/1");
  const data = await res.json();

  // O objeto retornado aqui será passado como props para o componente da página
  return data;
}

async function getOcorrencia(condominiosId) {
  const response = await fetch(
    `http://localhost:3001/api/condominios/${condominiosId}`,
    {
      method: "GET",
    }
  );
  return response.json();
}

// Este é o seu componente de página
export default async function Users({ params }) {
  const users = await getOcorrencia(params.condominiosId);
  console.log(users);
  return (
    <SystemPage title="inicio">
      <SystemTable users={users} />
    </SystemPage>
  );
}
