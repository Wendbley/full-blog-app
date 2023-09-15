import axios from 'axios'
import Card from '../card/Card'
import styles from './cardList.module.css'
import Pagination from '../pagination/Pagination'

type Props = {
	page: number
	cat?: string
}
type Post = {
	key: string
	item: {
		id: string
		title: string
		desc: string
		slug: string
		createdAt: string
		catSlug: string
	}
}

/**
 *
 * @param page
 * @returns
 */
const getData = async (page: number, cat: string) => {
	const rep = await axios(
		`${process.env.NEXT_PUBLIC_API_URL}/api/posts?page=${page}&cat=${cat || ''}`
	)

	if (rep.statusText != 'OK') {
		throw new Error('Failded')
	}
	return rep.data
}

/**
 *
 * @param props
 * @returns
 */
const CardList = async ({ page, cat }: Props) => {
	const { posts, count } = await getData(page, cat || '')

	const POST_PER_PAGE = 2
	const hasPrevious = POST_PER_PAGE * (page - 1) > 0
	const hasNext = POST_PER_PAGE * (page - 1) + POST_PER_PAGE < count

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Recent Posts</h1>
			<div className={styles.posts}>
				{posts?.map((post) => (
					<Card  key={post.item.id} {...post.item} />
				))}
			</div>
			<Pagination page={page} hasNext={hasNext} hasPrevious={hasPrevious} />
		</div>
	)
}

export default CardList
