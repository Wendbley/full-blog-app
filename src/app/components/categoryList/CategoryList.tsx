import Link from 'next/link'
import styles from './categoryList.module.css'
import { coding, culture, fashion, food, style, travel } from '../../../../public'
import Image from 'next/image'

type Props = {}

/**
 * 
 * @param props 
 * @returns 
 */
const CategoryList = (props: Props) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Popular Categories </h1>
			<div className={styles.categories}>
				
					<Link href='/blog?cat=style' className= {`${styles.category} ${styles.style}`}>
						<Image
							src={style}
							alt='style'
							width={32}
							height={32}
							className={styles.image}
						/>
            Style
					</Link>
					<Link href='/blog' className= {`${styles.category} ${styles.style}`}>
						<Image
							src={culture}
							alt='culture'
							width={32}
							height={32}
							className={styles.image}
						/>
            Culture
					</Link>
					<Link href='/blog' className= {`${styles.category} ${styles.style}`}>
						<Image
							src={fashion}
							alt='fashion'
							width={32}
							height={32}
							className={styles.image}
						/>
            Fashion
					</Link>
					<Link href='/blog' className= {`${styles.category} ${styles.style}`}>
						<Image
							src={food}
							alt='food'
							width={32}
							height={32}
							className={styles.image}
						/>
            Food
					</Link>
					<Link href='/blog' className= {`${styles.category} ${styles.style}`}>
						<Image
							src={travel}
							alt='travel'
							width={32}
							height={32}
							className={styles.image}
						/>
            Travel
					</Link>
					<Link href='/blog' className= {`${styles.category} ${styles.style}`}>
						<Image
							src={coding}
							alt='coding'
							width={32}
							height={32}
							className={styles.image}
						/>
            Coding
					</Link>
				
			</div>
		</div>
	)
}

export default CategoryList
