import GitHubProvider from "next-auth/providers/github";
import GooleProvider from "next-auth/providers/google";

export const options = {
  providers: [
    GitHubProvider({
      profile(profile) {
        console.log("Profile " + profile);

        let userRole = "GitHub User";
        if (profile?.email == "armandoandrea27@gmail.com") {
          userRole = "Admin";
        }
        return {
          ...profile,
          role: userRole,
        };
      },
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
    GooleProvider({
      profile(profile) {
        console.log("Profile " + profile);
        let userRole = "Google User";

        return {
          ...profile,
          id: profile.sub,

          role: userRole,
        };
      },
      clientId: process.env.GOOGLE_ID,
      clientSecret: process.env.GOOGLE_SECRET,
    }),
  ],
  callback: {
    // Server Authentifications
    async jwt({ token, user }) {
      if (user) {
        token.role = user.role;
      }
      return token;
    },
    //Client authentifications
    async session({ session, token }) {
      if (session) {
        session.user.role = token.role;
      }
      return session;
    },
  },
};
