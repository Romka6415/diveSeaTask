import styles from './MyButton.module.scss'
const MyButton = ({ title }) => {
	return <button className={styles.myBtn}>{title}</button>
}

export default MyButton
