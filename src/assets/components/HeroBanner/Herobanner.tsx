import MyButton from '../UI/MyButton/MyButton'
import MyLink from '../UI/MyLink/MyLink'
import styles from './Herobanner.module.scss'
const Herobanner = () => {
	return (
		<section className={styles.heroSection}>
			<div>
				<h1>
					Discover And
					<br />
					Create NFTs
				</h1>
				<p>
					Discover, Create and Sell NFTs On Our NFT Marketplace <br /> With Over
					Thousands Of NFTs And Get a <span>$20 bonus.</span>
				</p>
				<div className={styles.buttons}>
					<MyButton title='Explore More' />
					<MyLink title='create NFT' to='/nft' />
				</div>
				<div className='features'>
					<ul>
						<li>
							<h2>430K+</h2>
							<p>Art Works</p>
						</li>
						<li>
							<h2>159K+</h2>
							<p>Creators</p>
						</li>
						<li>
							<h2>87K+</h2>
							<p>Collections</p>
						</li>
					</ul>
				</div>
			</div>
			<div>
				<img src='hero-banner/hero-img.png' />
			</div>
		</section>
	)
}

export default Herobanner
