import styles from './home.module.css'
import Featured from './components/featured/Featured'
import CategoryList from './components/categoryList/CategoryList'
import CardList from './components/cardList/CardList'
import Menu from './components/menu/Menu'


interface Props {
	searchParams: {
		page: string
		cat?:string
	}
}
/**
 * 
 * @returns 
 */
export default function Home({searchParams}: Props) {
	const page = parseInt(searchParams.page) || 1

	return (
		<main className={styles.container}>
			<Featured />
			<CategoryList  />

			<div className={styles.content}>
				<CardList page={page}/>
				<Menu />
			</div>
		</main>
	)
}
