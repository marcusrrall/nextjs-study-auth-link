"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { toast } from "@/components/ui/use-toast";
import { signIn } from "next-auth/react";
import { useState } from "react";

export default function SignInForm() {
  const [email, setEmail] = useState<null | string>(null);

  async function SignInWithEmail() {
    const signInResult = await signIn("email", {
      email: email,
      callbackUrl: `${window.location.origin}`,
      redirect: false,
    });

    if (!signInResult?.ok) {
      return toast({
        title: "Bem, isso não funcionou ..",
        description: "Algo deu errado, por favor tente novamente",
        variant: "destructive",
      });
    }
    return toast({
      title: "Verifique seu email",
      description: "Foi enviado um link para você",
    });
  }

  return (
    <form action={SignInWithEmail}>
      <div className="flex flex-col gap-y-2">
        <Label>Email</Label>
        <Input
          onChange={(e) => setEmail(e.target.value)}
          name="email"
          type="email"
          placeholder="name@exemple.com"
        />
      </div>
      <Button className="mt-4 w-full">Entrar com email</Button>
    </form>
  );
}
