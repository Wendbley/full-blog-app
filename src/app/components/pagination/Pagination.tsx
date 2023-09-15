'use client'

import styles from './pagination.module.css'
import { useRouter } from 'next/navigation'

type Props = {
	page: number
  hasPrevious: boolean
  hasNext: boolean
}

/**
 * 
 * @param param0 
 * @returns 
 */
const Pagination = ({ page, hasPrevious, hasNext }: Props) => {
	const router = useRouter()

	return (
		<div className={styles.container}>
			<button
				className={styles.button}
        disabled={!hasPrevious}
				onClick={() => router.push(`?page=${page - 1}`)}>
				Previous
			</button>
			<button
				className={styles.button}
        disabled={!hasNext}
				onClick={() => router.push(`?page=${page + 1}`)}>
				Next
			</button>
		</div>
	)
}

export default Pagination
