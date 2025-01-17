import NextAuth from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";
// import Providers from "next-auth/providers";

export default NextAuth({
    providers: [
        KakaoProvider({
            clientId: process.env.KAKAO_CLIENT_ID,
            clientSecret: process.env.KAKAO_CLIENT_SECRET,
        }),
        // Provider.Google({
        //     clientId: process.env.GOOGLE_CLIENT_ID,
        //     clientSecret: process.env.GOOGLE_CLIENT_SECRET,
        // }),
    ],

    callbacks: {
        async session({ session, token, user }) {
            session.user.id = token.sub;
            session.user.name = token.name;
            return session;
        },
    },
});