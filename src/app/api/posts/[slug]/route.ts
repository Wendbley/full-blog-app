import prisma from '@/utils/connect'
import { NextResponse } from 'next/server'

/**
 *
 * @returns
 */
export const GET = async (
	req: Request,
	{ params }: { params: { slug: string } }
) => {
	const { slug } = params

	try {
		const post = await prisma.post.findUnique({
			where: {
				slug,
			},
			include: {
				user: true,
			},
		})

		return new NextResponse(JSON.stringify(post), { status: 200 })
	} catch (error) {
		console.log(error)
		return new NextResponse(
			JSON.stringify({ message: 'Something went wrong' }),
			{ status: 500 }
		)
	}
}
