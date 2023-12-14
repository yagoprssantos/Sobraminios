import UserCondoTable from "@/app/components/UserCondoTable";
import SystemPage from "@/app/components/SystemPage";

async function getUsuarios() {
  const response = await fetch(`http://localhost:3001/api/usuarios`, {
    method: "GET",
  });
  return response.json();
}

// Este é o seu componente de página
export default async function Users() {
  const users = await getUsuarios();
  console.log(users);
  return (
    <SystemPage title="inicio">
      <UserCondoTable users={users} />
    </SystemPage>
  );
}
