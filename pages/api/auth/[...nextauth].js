import NextAuth from "next-auth";
import CredentialsProvider from "next-auth/providers/credentials";
import userData from "../../../fakeData/users.json";

export const authOptions = {
  // Configure one or more authentication providers
  providers: [
    CredentialsProvider({
      name: "Credentials",

      credentials: {
        userPhone: {
          label: "User Phone",
          type: "text",
          placeholder: "0192124243",
        },
        password: { label: "Password", type: "password" },
      },

      async authorize(credentials, req) {
        const { userPhone, password } = credentials;
        // Add logic here to look up the user from the credentials supplied
        const user = userData.find((user) => user.phone === userPhone);
        console.log(user);

        if (user && password === user.password) {
          // Any object returned will be saved in `user` property of the JWT
          return user;
        } else {
          // If you return null then an error will be displayed advising the user to check their details.
          return null;

          // You can also Reject this callback with an Error thus the user will be sent to the error page with the error message as a query parameter
        }
      },
    }),
  ],
  pages: {
    signIn: "/login", // Set your custom login page here
  },
};

export default NextAuth(authOptions);
