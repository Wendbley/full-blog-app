import React from 'react'
import styles from './singlePage.module.css'
import Image from 'next/image'
import { p1 } from '../../../public'
import Menu from '../components/menu/Menu'
import Comments from '../components/comments/Comments'

type Props = {}

/**
 *
 * @param props
 * @returns
 */
const SinglePage = (props: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.infoContainer}>
				<div className={styles.textContainer}>
					<h1 className={styles.title}>
						Lorem ipsum dolor sit amet consectetur adipisicing elit.
					</h1>
					<div className={styles.user}>
						<div className={styles.userImageContainer}>
							<Image src={p1} alt='img1' fill className={styles.avatar} />
						</div>
						<div className={styles.userTextContainer}>
							<span className={styles.username}>John Doe</span>
							<span className={styles.date}>10.09.2023</span>
						</div>
					</div>
				</div>
				<div className={styles.imageContainer}>
					<Image src={p1} alt='img1' fill className={styles.image} />
				</div>
			</div>

			<div className={styles.content}>
				<div className={styles.post}>
					<div className={styles.description}>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
							doloribus accusamus voluptatum sint, sit aperiam consequuntur
							deserunt, obcaecati suscipit dicta voluptatem, quaerat illo minus?
							Harum sequi quibusdam atque temporibus quis.
						</p>
						<h2>Lorem, ipsum.</h2>
						<p>
							Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempora
							suscipit aperiam ipsa blanditiis voluptate temporibus laudantium
							quae molestiae inventore sit velit pariatur labore delectus harum
							dolorum, vero asperiores? Ad modi, consectetur a deleniti beatae
							deserunt maxime dolor, necessitatibus id sed mollitia ab
							consequuntur fuga saepe nesciunt nisi ipsum, ut dolore!
						</p>
					</div>
                    <div className={styles.comment}>
                        <Comments/>
                    </div>
				</div>
				<Menu />
			</div>
		</div>
	)
}

export default SinglePage
