import Link from 'next/link'
import styles from './comments.module.css'
import Image from 'next/image'
import { p1 } from '../../../../public'
import { useSession } from 'next-auth/react'
import useSWR from 'swr'
import axios from 'axios'

type Props = {
	postSlug: string
}
type Comment = {
	id: string
	createdAt: string
	user: {
		name: string
		image: string
	}
	desc: string
}

// collects data from API
const fetcher = async (url: string) => {
	const res = await axios(url)

	if (res.statusText != 'OK') {
		const error = new Error(res.data.message)
		throw error
	}
	return res.data
}

/**
 *
 * @param props
 * @returns
 */
const Comments = async ({ postSlug }: Props) => {
	const { status } = useSession()
	const { data, error, isLoading } = useSWR(
		`${process.env.NEXT_PUBLIC_API_URL}/api/comments?postSlug=${postSlug}`,
		fetcher
	)

	if (error) <div className={styles.error}>An error has occured...</div>

	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Comments</h1>
			{status === 'authenticated' ? (
				<div className={styles.write}>
					<textarea placeholder='Write a comment...' className={styles.input} />
					<button className={styles.button}>Send</button>
				</div>
			) : (
				<Link href='/login'>Login to write a comment</Link>
			)}

			<div className={styles.comments}>
				{isLoading ? (
					<div className={styles.loading}>Loading...</div>
				) : (
					data?.map((item: Comment) => (
						<div className={styles.comment} key={item.id}>
							<div className={styles.user}>
								{item?.user?.image && (
									<Image
										src={item.user.image}
										alt='img1'
										width={50}
										height={50}
										className={styles.image}
									/>
								)}

								<div className={styles.userInfo}>
									<span className={styles.username}>{item.user.name}</span>
									<span className={styles.date}>{item.createdAt}</span>
								</div>
							</div>
							<p className={styles.desc}>{item.desc}</p>
						</div>
					))
				)}
			</div>
		</div>
	)
}

export default Comments
