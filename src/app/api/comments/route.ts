import { getAuthSession } from '@/utils/auth'
import prisma from '@/utils/connect'
import { Session } from 'next-auth'
import { NextResponse } from 'next/server'

/**
 *
 * @returns
 */
export const GET = async (req: Request) => {
	const { searchParams } = new URL(req.url)
	const postSlug = searchParams.get('postSlug')

	try {
		const comments = await prisma.comment.findMany({
			where: { ...(postSlug && { postSlug }) },
			include: { user: true },
		})
		return new NextResponse(JSON.stringify(comments), { status: 200 })
	} catch (error) {
		console.log(error)
		return new NextResponse(
			JSON.stringify({ message: 'Something went wrong' }),
			{ status: 500 }
		)
	}
}

/**
 * 
 * @param req 
 * @returns 
 */
export const POST = async (req: Request) => {
	const session = await getAuthSession()

	if (!session) {
		return new NextResponse(JSON.stringify({ message: 'Unauthorized' }), {
			status: 401,
		})
	}
	try {
		const body = await req.json()
		// run inside `async` function
		const comment = await prisma.comment.create({
			data: { ...body, userEmail: session.user.email },
		})
	} catch (error) {
		console.log(error)
		return new NextResponse(
			JSON.stringify({ message: 'Something went wrong' }),
			{ status: 500 }
		)
	}
}
