import prisma from '@/utils/connect'
import { NextResponse } from 'next/server'

/**
 *
 * @returns
 */
export const GET = async (req: Request) => {
	const { searchParams } = new URL(req.url)
	const page = parseInt(searchParams.get('page') || '1')
    const  cat  = searchParams.get('cat') || ''
   

	const POST_PER_PAGE = 2
	const query = {
		take: POST_PER_PAGE,
		skip: (page - 1) * POST_PER_PAGE,
        where: {
            ...(cat && {catSlug: cat})
        }
	}

	try {
		const [posts, count] = await prisma.$transaction([
			prisma.post.findMany(query),
			prisma.post.count({where: query.where}),
		])

		// const posts = await prisma.post.findMany({
		// 	take: POST_PER_PAGE,
		// 	skip: (page - 1) * POST_PER_PAGE,
		// })
		return new NextResponse(JSON.stringify({posts,count}), { status: 200 })
	} catch (error) {
		console.log(error)
		return new NextResponse(
			JSON.stringify({ message: 'Something went wrong' }),
			{ status: 500 }
		)
	}
}
