import React from 'react'
import styles from './NFTBlock.module.scss'
const NFTBlock = ({ name, category, status, photo }) => {
	return (
		<div className={styles.myNFT}>
			<img src={photo} />
			<h2>{name}</h2>
			<p className='description'>
				<span>Category:</span>
				{category}
			</p>
			<p className='description'>
				<span>Status:</span>
				{status}
			</p>
		</div>
	)
}

export default NFTBlock
