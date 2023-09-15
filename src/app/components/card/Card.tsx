import Link from 'next/link'
import { p1 } from '../../../../public'
import styles from './card.module.css'
import Image from 'next/image'

type Props = {
	key?: string
	item: {
		img: string
		title: string
		desc: string
		slug: string
		createdAt: string
		catSlug: string
	}
}

const Card = ({ key, item }: Props) => {
	return (
		<div className={styles.container} key={key}>
			<div className={styles.imageContainer}>
				{item.img && (
					<Image src={item.img} alt='img1' fill className={styles.image} />
				)}
			</div>
			<div className={styles.textContainer}>
				<div className={styles.detail}>
					<span className={styles.date}>
						{item.createdAt.substring(0, 10)}{' '}
					</span>
					<span className={styles.category}>{item.catSlug}</span>
				</div>
				<Link href={`/posts/${item.slug}`} className={styles.link}>
					<h1 className={styles.title}>{item.title}</h1>
				</Link>
				<p className={styles.desc}>{item.desc.substring(0, 60)}</p>
				<Link href={`/posts/${item.slug}`} className={styles.link}>
					Read More
				</Link>
			</div>
		</div>
	)
}

export default Card
