import React from 'react'
import styles from './blog.module.css'
import CardList from '../components/cardList/CardList'
import Menu from '../components/menu/Menu'

type Props = {}

/**
 * 
 * @param props 
 * @returns 
 */
const BlogPage = (props: Props) => {
	return (
		<div className={styles.container}>
			<h1 className={styles.title}>Style Blog</h1>
			<div className={styles.content}>
                <CardList/>
                <Menu/>
            </div>
		</div>
	)
}

export default BlogPage
