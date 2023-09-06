
import styles from './page.module.css'
import Navbar from './components/navbar/Navbar'
import Footer from './components/footer/Footer'
import Featured from './components/featured/Featured'
import CategoryList from './components/categoryList/CategoryList'
import CardList from './components/cardList/CardList'
import Pagination from './components/pagination/Pagination'
import Menu from './components/menu/Menu'

export default function Home() {
  return (
    <main className={styles.container}>
      <Featured/>
      <CategoryList/>

      <div className="container">
        <CardList/>
        <Pagination/>
        <Menu/>
      </div>
      
    </main>
  )
}
