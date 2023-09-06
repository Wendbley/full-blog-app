import Link from 'next/link'
import styles from './authLinks.module.css'

type Props = {}

const AuthLinks = (props: Props) => {
	const status = 'noAuthenticated'
	return (
		<>
			{status === 'noAuthenticated' ? (
				<Link href='/login'>Login</Link>
			) : (
				<>
					<Link href='/write'>Write</Link>
					<span className={styles.link}> Logout</span>
				</>
			)}
		</>
	)
}

export default AuthLinks
