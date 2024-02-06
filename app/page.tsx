import { getServerSession } from "next-auth";
import { authOptions } from "./utils/auth";
import LogoutButton from "./components/LogoutButton";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export default async function Home() {
  const session = await getServerSession(authOptions);
  return (
    <div className="p-10">
      <h1>Ola, essa é uma página publica</h1>
      {session ? (
        <>
          <h1>você está logado</h1>
          <LogoutButton />
        </>
      ) : (
        <>
          <h1>Usuário não logado</h1>
          <Button asChild>
            <Link href="/auth">Login</Link>
          </Button>
        </>
      )}
    </div>
  );
}
