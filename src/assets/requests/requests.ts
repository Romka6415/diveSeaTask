import axios from 'axios'

const postNFT = async (data, dataSample, setData) => {
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
			alert('Ваша nft на рассмотрении')
		}
		setData(dataSample)
	} catch (error) {
		console.error('Error fetching data:', error)
	}
}

const postNFTImage = async data => {
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
		await setData(dataSample)
	} catch (error) {
		console.error('Error fetching data:', error)
	}
}

const putNFT = async data => {
	console.log(data)
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

const getNFTbyStatus = async data => {
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

export default { postNFT, postNFTImage, putNFT, getNFTbyStatus }
