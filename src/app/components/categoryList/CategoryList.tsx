import Link from 'next/link'
import styles from './categoryList.module.css'
import axios from 'axios'
import {
	coding,
	culture,
	fashion,
	food,
	style,
	travel,
} from '../../../../public'
import Image from 'next/image'

type Props = {
	
}
type Category = {
	id: string
	title: string
	slug: string
	img: string
}

/**
 *
 * @returns
 */
const getData = async () => {
	const rep = await axios(`${process.env.NEXT_PUBLIC_API_URL}/api/categories`)

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
const CategoryList = async (props: Props) => {
	const categories: Category[] = await getData()


	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Popular Categories </h1>
			<div className={styles.categories}>
				{categories?.map((item) => (
					<Link
						key={item.id}
						href='/blog?cat=style'
						className={`${styles.category} ${styles[item.slug]}`}>
						{item.img && (
							<Image
								src={item.img}
								alt='style'
								width={32}
								height={32}
								className={styles.image}
							/>
						)}
						{item.title}
					</Link>
				))}

				
			</div>
		</div>
	)
}

export default CategoryList
