// import NextAuth from "next-auth/next";
// import Credentials from "next-auth/providers/credentials";

// const options = {
//   providers: [
//     Credentials({
//       name: "Credentials",
//       credentials: {
//         email: {
//           label: "Email",
//           type: "text",
//           placeholder: "Enter your email",
//         },
//         password: {
//           label: "Password",
//           type: "password",
//           placeholder: "Enter your password",
//         },
//       },
//       async authorize(credentials) {
//         const payload = {
//           email: credentials.email,
//           password: credentials.password,
//         };

//         const res = await fetch(process.env.NEXT_PUBLIC_LOGIN_URL, {
//           method: "POST",
//           headers: {
//             "Content-Type": "application/json",
//             "Accept-Language": "en-US",
//           },
//           body: JSON.stringify(payload),
//         });

//         const user = await res.json();

//         if (!res.ok) throw new Error("Wrong username or password.");
//         if (res.ok && user) return user;

//         return null;
//       },
//     }),
//   ],
//   session: {
//     jwt: true,
//   },
//   jwt: {
//     secret: process.env.SECRET_TOKEN,
//   },
//   callbacks: {
//     async jwt({ token, user, account }) {
//       if (account && user)
//         return {
//           ...token,
//           accessToken: user.data.accessToken,
//           refreshToken: user.data.refreshToken,
//         };

//       return token;
//     },
//     async session({ session, token }) {
//       session.user.accessToken = token.accessToken;
//       session.user.refreshToken = token.refreshToken;

//       return session;
//     },
//   },
//   pages: {
//     signIn: "login",
//   },
// };

// export default (req, res) => NextAuth(req, res, options);
