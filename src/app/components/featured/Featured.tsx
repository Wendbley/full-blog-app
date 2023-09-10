import { p1 } from '../../../../public'
import styles from './featured.module.css'
import Image from 'next/image'

type Props = {}

const Featured = (props: Props) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>
				<b>Hey, JFK Dev her!</b> Discover my stories and creative ideas.
			</h1>
			<div className={styles.post}>
				<div className={styles.imgContainer}>
					<Image src={p1} alt='img1' fill />
				</div>
			</div>
			<div className={styles.textContainer}>
				<h1 className={styles.postTitle}>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iure,
					provident.
				</h1>
				<p className={styles.postDesc}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed,
					architecto atque repellat nihil magni reiciendis. Nemo nesciunt eaque,
					maiores maxime dicta reprehenderit suscipit dolore corrupti quidem eum
					at placeat officiis!
				</p>
				<button className={styles.button}>Read More</button>
			</div>
		</div>
	)
}

export default Featured
