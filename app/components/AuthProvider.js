"use client";

import { SessionProvider, useSession } from "next-auth/react";

const AuthProvider = ({ children }) => {
  return <SessionProvider>{children}</SessionProvider>;
};
export default AuthProvider;
