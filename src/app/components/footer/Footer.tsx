import Image from 'next/image'
import styles from './footer.module.css'
import { facebook, instagram, logo, tiktok, youtube } from '../../../../public'
import Link from 'next/link'

type Props = {}

/**
 * 
 * @param props 
 * @returns 
 */
const Footer = (props: Props) => {
	return (
		<div className={styles.container}>
			<div className={styles.info}>
				<div className={styles.logo}>
					<Image src={logo} alt='logo' width={50} height={50} />
					<h1 className={styles.logoText}>JFK Blog</h1>
				</div>

				<p className={styles.desc}>
					Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus
					soluta non debitis consequuntur facere cumque nesciunt at earum.
					Debitis dicta minima tempora laboriosam! Sit labore eveniet nisi
					reprehenderit. A, et.
				</p>

				<div className={styles.icons}>
					<Image src={facebook} alt='facebook' width={18} height={18} />
					<Image src={instagram} alt='instagram' width={18} height={18} />
					<Image src={tiktok} alt='tiktok' width={18} height={18} />
					<Image src={youtube} alt='youtube' width={18} height={18} />
				</div>
			</div>

			<div className={styles.links}>
				<div className={styles.list}>
					<span className={styles.listTitle}>Links</span>
					<Link href='/'>Home</Link>
					<Link href='/'>Blog</Link>
					<Link href='/about'>About</Link>
					<Link href='/contact'>Contact</Link>
				</div>
			</div>
			<div className={styles.links}>
				<div className={styles.list}>
					<span className={styles.listTitle}>Tags</span>
					<Link href='/'>Style</Link>
					<Link href='/'>Fashion</Link>
					<Link href='/about'>Coding</Link>
					<Link href='/contact'>Travel</Link>
				</div>
			</div>
			<div className={styles.links}>
				<div className={styles.list}>
					<span className={styles.listTitle}>Social</span>
					<Link href='/'>Facebook</Link>
					<Link href='/'>Instangram</Link>
					<Link href='/about'>Tiktok</Link>
					<Link href='/contact'>YouTube</Link>
				</div>
			</div>
			divst
		</div>
	)
}

export default Footer
