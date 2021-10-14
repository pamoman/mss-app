import NextAuth from "next-auth";
import Providers from "next-auth/providers";

const options = ({
  providers: [
    Providers.Google({
      clientId: process.env.OAUTH_CLIENT_ID,
      clientSecret: process.env.OAUTH_CLIENT_SECRET,
    }),
  ],
  session: {
    jwt: true,
  },
  callbacks: {
    signIn: async (user, account, profile) => {
      const isAllowedToSignIn = false;
      const email = user.email.split('@');

      if (email[1] === 'utb.lidkoping.se') {
        return true;
      } else {
        return '/unauthorized';
      }
    },
    session: async (session, user) => {
      session.jwt = user.jwt;
      session.id = user.id;

      return Promise.resolve(session);
    },
    jwt: async (token, user, account) => {
      const isSignIn = user ? true : false;
      const provider = account?.provider;

      if (isSignIn) {
        const response = await fetch(
          `${process.env.NEXT_PUBLIC_API_URL}/auth/${provider}/callback?access_token=${account?.accessToken}`
        );
        const data = await response.json();

        token.jwt = data.jwt;
        token.id = data.user.id;
      }
      return Promise.resolve(token);
    },
  }
});

const Auth = (req, res) =>
  NextAuth(req, res, options);

export default Auth;