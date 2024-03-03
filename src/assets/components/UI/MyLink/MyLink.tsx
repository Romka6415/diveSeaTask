import React from 'react'
import { Link } from 'react-router-dom'
import styles from './MyLink.module.scss'
const MyLink = ({ title, to }) => {
	return (
		<Link className={styles.button} to={to}>
			{title}
		</Link>
	)
}

export default MyLink
