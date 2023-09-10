import Link from 'next/link'
import { p1 } from '../../../../public'
import styles from './card.module.css'
import Image from 'next/image'

type Props = {}

const Card = (props: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.imageContainer}>
				<Image src={p1} alt='img1' fill className={styles.image} />
			</div>
			<div className={styles.textContainer}>
				<div className={styles.detail}>
					<span className={styles.date}>11.02.2023 - </span>
					<span className={styles.category}>CULTURE</span>
				</div>
				<Link href='/'>
					<h1>Lorem, ipsum dolor sit amet consectetur adipisicing elit.</h1>
				</Link>
				<p>
					Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dicta, vel.
					Ipsa expedita maxime iusto neque numquam velit, officia reiciendis
					autem.
				</p>
				<Link href='/' className={styles.link}>Read More</Link>
			</div>
		</div>
	)
}

export default Card
