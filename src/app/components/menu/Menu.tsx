import styles from './menu.module.css'
import MenuPosts from '../menuPosts/MenuPosts'
import MenuCategories from '../menuCategories/MenuCategories'
import Pagination from '../pagination/Pagination'

type Props = {}

/**
 * 
 * @param props 
 * @returns 
 */
const Menu = (props: Props) => {
	return (
		<div className={styles.container}>
			<h2 className={styles.subtitle}>{'What is hot'}</h2>
			<h1 className={styles.title}>Most Popular</h1>
			<div className={styles.items}>
				<MenuPosts variant={'.travel'} text={'Travel'} />
				<MenuPosts variant={'food'} text={'Food'} />
				<MenuPosts variant={'culture'} text={'Culture'} />
				<MenuPosts variant={'style'} text={'Style'} />
				<MenuPosts variant={'fashion'} text={'Fashion'} />
				<MenuPosts variant={'coding'} text={'Coding'} />
			</div>

			<h2 className={styles.subtitle}>Discover by topic</h2>
			<h1 className={styles.title}>Categories</h1>
			<MenuCategories />

			<h2 className={styles.subtitle}>Chosen by the editor</h2>
			<h1 className={styles.title}>Editors Picky</h1>
			<div className={styles.items}>
				<MenuPosts variant={'.travel'} text={'Travel'} img={true} />
				<MenuPosts variant={'food'} text={'Food'} img={true} />
				<MenuPosts variant={'culture'} text={'Culture'} img={true} />
				<MenuPosts variant={'style'} text={'Style'} img={true} />
				<MenuPosts variant={'fashion'} text={'Fashion'} img={true} />
				<MenuPosts variant={'coding'} text={'Coding'} img={true} />
			</div>

			<Pagination />
		</div>
	)
}

export default Menu
