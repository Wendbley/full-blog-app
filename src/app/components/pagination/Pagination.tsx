import styles from './pagination.module.css'

type Props = {}

const Pagination = (props: Props) => {
  return (
    <div className={styles.container}>
      <button className={styles.button}>Previous</button>
      <button className={styles.button}>Next</button>
    </div>
  )
}

export default Pagination