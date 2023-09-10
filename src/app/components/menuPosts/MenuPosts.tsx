import Link from 'next/link'
import styles from './menuPosts.module.css'
import Image from 'next/image'
import { p1 } from '../../../../public'

type Props = {
	variant: string
	text: string
  img?: boolean
}

const getStyles = (val: string) => {
	switch (val) {
		case 'travel':
			return styles.travel
		case 'food':
			return styles.food
		case 'culture':
			return styles.culture
		case 'fashion':
			return styles.fashion
		case 'style':
			return styles.style
    case 'coding':
      return styles.coding
		default:
			return styles.category
	}
}

/**
 *
 * @param param0
 * @returns
 */
const MenuPosts = ({ variant, text, img }: Props) => {


	return (
		<Link href='/' className={styles.item}>
      { img && <div className={styles.imageContainer}>
				<Image src={p1} alt='img1' fill className={styles.image} />
			</div>}
			
			<div className={styles.textContainer}>
				<span className={`${styles.category} ${getStyles(variant)}`}>{text}</span>
				<h3 className={styles.postTitle}>
					Lorem ipsum dolor sit amet consectetur.
				</h3>

				<div className={styles.detail}>
					<span className={styles.username}>John Doe </span>
					<span className={styles.date}>10.09.2023</span>
				</div>
			</div>
		</Link>
	)
}

export default MenuPosts
