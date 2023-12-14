import CondoTable from "@/app/components/CondoTable";
import SystemPage from "@/app/components/SystemPage";

async function getCondominios() {
  const response = await fetch(`http://localhost:3001/api/condominios`, {
    method: "GET",
  });
  return response.json();
}

// Este é o seu componente de página
export default async function Users() {
  const users = await getCondominios();
  console.log(users);
  return (
    <SystemPage title="inicio">
      <CondoTable users={users} />
    </SystemPage>
  );
}
