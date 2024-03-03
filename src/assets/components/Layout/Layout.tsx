import Header from '../Header/Header'
import HeroBanner from '../HeroBanner/Herobanner'
import styles from './Layout.module.scss'
const Layout = () => {
	return (
		<div className={styles.layout}>
			<Header />
			<HeroBanner />
		</div>
	)
}

export default Layout
