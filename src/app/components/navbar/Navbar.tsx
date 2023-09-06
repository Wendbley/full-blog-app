import Image from 'next/image'
import { facebook, instagram, tiktok, youtube } from '../../../../public'
import styles from './navbar.module.css'
import Link from 'next/link'
import ThemeToggle from '../themeToggle/ThemeToggle'
import AuthLinks from '../authLinks/AuthLinks'

type Props = {}

const Navbar = (props: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.social}>
				<Image src={facebook} alt='facebook' width={24} height={24}/>
				<Image src={instagram} alt='innstagram'width={24} height={24} />
				<Image src={tiktok} alt='tiktok' width={24} height={24}/>
				<Image src={youtube} alt='youtube' width={24} height={24}/>
			</div>
			<div className={styles.logo}>Full Blog App</div>
			<div className={styles.links}>
				<ThemeToggle />
				<Link href='/'>Homepage</Link>
				<Link href='/contact'>Contact</Link>
				<Link href='/about'>About</Link>
				<AuthLinks />
			</div>
		</div>
	)
}

export default Navbar
