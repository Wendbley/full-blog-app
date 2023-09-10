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
				<Image src={instagram} alt='instagram'width={24} height={24} />
				<Image src={tiktok} alt='tiktok' width={24} height={24}/>
				<Image src={youtube} alt='youtube' width={24} height={24}/>
			</div>
			<div className={styles.logo}>Full Blog App</div>
			<div className={styles.links}>
				<ThemeToggle />
				<Link href='/' className={styles.link}>Homepage</Link>
				<Link href='/contact' className={styles.link}>Contact</Link>
				<Link href='/about' className={styles.link}>About</Link>
				<AuthLinks />
			</div>
		</div>
	)
}

export default Navbar
