import { useEffect, useState } from 'react'
import MyButton from '../../UI/MyButton/MyButton'
import MyInput from '../../UI/MyInput/MyInput'
import Header from '../../Header/Header'
import styles from './NftLayout.module.scss'
import './NftLayout.module.scss'
import axios from 'axios'
import NFTBlock from '../../UI/NFTBlock/NFTBlock'

const NftLayout = () => {
	const dataSample = {
		id: Date.now,
		category: {
			id: 0,
			name: '',
		},
		name: '',
		photoUrls: [''],
		tags: [
			{
				id: 0,
				name: '',
			},
		],
		status: 'avaliable',
	}

	const postNFT = async () => {
		try {
			const response = await axios.post(
				'https://petstore.swagger.io/v2/pet',
				{
					headers: {
						'Access-Control-Allow-Origin': '*',
						'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
						'Access-Control-Allow-Headers': 'Content-Type',
					},
				},
				data
			)
			if (response.status == 200) {
				console.log('Ваша nft на рассмотрении')
				// alert('Ваша nft на рассмотрении')
			}
			setNFTArray([...NFTArray, data])
			console.log(NFTArray)
			setData(dataSample)
		} catch (error) {
			console.error('Error fetching data:', error)
		}
	}

	const postNFTImage = async () => {
		try {
			const response = await axios.post(
				'https://petstore.swagger.io/v2/pet/123123/uploadImage',
				{
					headers: {
						'Access-Control-Allow-Origin': '*',
						'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
						'Access-Control-Allow-Headers': 'Content-Type',
					},
				},
				data
			)
			if (response.status == 200) {
				console.log('Картинка для вашего NFT была загружена')
				alert('Ваша nft на рассмотрении')
			}
			setData(dataSample)
		} catch (error) {
			console.error('Error fetching data:', error)
		}
	}

	const putNFT = async () => {
		try {
			const response = await axios.put(
				'https://petstore.swagger.io/v2/pet',
				{
					headers: {
						'Access-Control-Allow-Origin': '*',
						'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
						'Access-Control-Allow-Headers': 'Content-Type',
					},
				},
				data
			)
			if (response.status == 200) {
				console.log('Ваша nft на рассмотрении')
				alert('Ваша nft была изменена')
			}
			setData(dataSample)
		} catch (error) {
			console.error('Error fetching data:', error)
		}
	}

	const getNFTbyStatus = async () => {
		try {
			const response = await axios.get(
				'https://petstore.swagger.io/v2/pet/findByStatus?status=available',
				{
					headers: {
						'Access-Control-Allow-Origin': '*',
						'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE',
						'Access-Control-Allow-Headers': 'Content-Type',
					},
				}
			)
			if (response.status == 200) {
				console.log('НФТ с статусом в доставке были найдены')
				alert('НФТ с статусом в доставке были найдены')
			}
			setData(dataSample)
		} catch (error) {
			console.error('Error fetching data:', error)
		}
	}

	const [data, setData] = useState(dataSample)
	const [NFTArray, setNFTArray] = useState([])

	const handleInputChange = (title, value) => {
		if (title == 'photoUrls') {
			setData({ ...data, [title]: [value] })
		}
		setData({ ...data, [title]: value })
		console.log(data)
	}

	return (
		<>
			<Header />
			<section className={styles.heroSection}>
				<div className='nft'>
					<div>
						<h1>Create Your NFT</h1>
						<h2>Name</h2>
						<MyInput title='name' onInputChange={handleInputChange} />
						<h2>Category</h2>
						<MyInput title='category' onInputChange={handleInputChange} />
						<h2>Photo</h2>
						<MyInput title='photoUrls' onInputChange={handleInputChange} />
						<button onClick={postNFT}>Create</button>
					</div>
					<div>
						<label htmlFor='file'>PNG, GIF, WEBP, MP4 or MP3. Max 1Gb.</label>
						<input type='file' id='file' />
						<button onClick={postNFTImage}>Upload</button>
						<button onClick={putNFT}>Edit</button>
						<button onClick={getNFTbyStatus}>Find</button>
					</div>
				</div>
				<div className='myNFTs'>
					<ul className='nftList'>
						{NFTArray.length ? (
							NFTArray.map((NFT, index) => (
								<li key={index}>
									<NFTBlock
										photo={NFT.photoUrls}
										name={NFT.name}
										category={NFT.category}
										status={NFT.status}
									/>
								</li>
							))
						) : (
							<h2>You haven't any NFT's</h2>
						)}
					</ul>
				</div>
			</section>
		</>
	)
}

export default NftLayout
