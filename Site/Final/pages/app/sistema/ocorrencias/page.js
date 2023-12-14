import SystemTable from "@/app/components/UserTable";
import SystemPage from "@/app/components/SystemPage";
import { getUsuarios } from "@/caminho/do/seu/database"; // Substitua pelo caminho correto

// Esta é a função getServerSideProps correta
export async function getServerSideProps() {
  const users = await getUsuarios(); // Substitua pela função correta para buscar os usuários

  // O objeto retornado aqui será passado como props para o componente da página
  return {
    props: { users },
  };
}

// Este é o seu componente de página
export default function Users({ users }) {
  console.log(users);
  return (
    <SystemPage title="inicio">
      <SystemTable users={users} />
    </SystemPage>
  );
}
