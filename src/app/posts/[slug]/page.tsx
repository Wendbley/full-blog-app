import React from 'react'
import styles from './singlePage.module.css'
import Image from 'next/image'
import { p1 } from '../../../../public'
import Menu from '../../components/menu/Menu'
import Comments from '../../components/comments/Comments'
import axios from 'axios'

type Props = {
	params: {
		slug: string
	}
}

const getData = async(slug: string) => {
	const rep = await axios(
		`${process.env.NEXT_PUBLIC_API_URL}/api/posts?slug=${slug}}`
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
const SinglePage = async({ params }: Props) => {
	const { slug } = params
	const { data } = await getData(slug)

	return (
		<div className={styles.container}>
			<div className={styles.infoContainer}>
				<div className={styles.textContainer}>
					<h1 className={styles.title}>
						{data.title}
					</h1>
					<div className={styles.user}>
						<div className={styles.userImageContainer}>
							{ data?.user.img && <Image src={data.user.img} alt='img1' fill className={styles.avatar} />}
							
						</div>
						<div className={styles.userTextContainer}>
							<span className={styles.username}>{data?.user.username}</span>
							<span className={styles.date}>{data?.createdAt.substring(0,10)}</span>
						</div>
					</div>
				</div>
				<div className={styles.imageContainer}>
					{ data?.img && <Image src={data.img} alt='img1' fill className={styles.image} />}
					
				</div>
			</div>

			<div className={styles.content}>
				<div className={styles.post}>
					<div className={styles.description} dangerouslySetInnerHTML={{ __html: data?.desc }}/>
						
					<div className={styles.comment}>
						<Comments postSlug={slug}/>
					</div>
				</div>
				<Menu />
			</div>
		</div>
	)
}

export default SinglePage
