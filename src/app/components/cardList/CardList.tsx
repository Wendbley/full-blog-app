import Card from '../card/Card'
import styles from './cardList.module.css'

type Props = {}

/**
 *
 * @param props
 * @returns
 */
const CardList = (props: Props) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Recent Posts</h1>
			<div className={styles.posts}>
				<Card />
				<Card />
				<Card />
				<Card />
				<Card />
			</div>
		</div>
	)
}

export default CardList
