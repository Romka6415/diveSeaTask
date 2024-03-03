import MyButton from '../UI/MyButton/MyButton'
import './Header.module.scss'
import { Link } from 'react-router-dom'
import styles from './Header.module.scss'
const Header = () => {
	return (
		<header className={styles.header}>
			<img src='header-img/wave-logo.svg' className={styles.img} />
			<nav>
				<ul>
					<li>
						<Link to='/'>Home</Link>
					</li>
					<li>
						<a to='#'>CREATORS</a>
					</li>
					<li>
						<a to='#'>SELL</a>
					</li>
					<li>
						<a to='#'>STATS</a>
					</li>
				</ul>
			</nav>
			<MyButton title='Connect wallet' />
		</header>
	)
}

export default Header
