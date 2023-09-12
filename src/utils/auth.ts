import { PrismaAdapter } from '@auth/prisma-adapter'
import {  PrismaClient } from '@prisma/client'
import GithubProvider from 'next-auth/providers/github'
import GoogleProvider from 'next-auth/providers/google'


const prisma = new PrismaClient()

/**
 * Your NextAuth.js (next-auth.js) configuration
 */
export const authOptions = {
	adapter: PrismaAdapter(prisma),
	providers: [
		GithubProvider({
			clientId: process.env.GITHUB_ID as string,
			clientSecret: process.env.GITHUB_SECRET as string,
		}),

		GoogleProvider({
			clientId: process.env.GOOGLE_ID as string,
			clientSecret: process.env.GOOGLE_SECRET as string,
		}),
	],
}
