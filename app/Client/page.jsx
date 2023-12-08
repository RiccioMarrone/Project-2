"use client";
import React from "react";
import { useSession } from "next-auth/react";
import { redirect } from "next/navigation";

const Member = () => {
  //Protezione della pagina dal punto di vista Client
  const { data: session } = useSession({
    required: true,
    onUnauthenticated() {
      redirect("/api/auth/signin/?callbackUrl=/Client");
    },
  });
  return (
    <div>
      <h1>Client Member</h1>
      <p>{session?.user.email}</p>
      <p>{session?.user.name}</p>
    </div>
  );
};

export default Member;
