import './App.css'
import Layout from './assets/components/Layout/Layout'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import NftLayout from './assets/components/NFTpage/NftLayout/NftLayout'
function App() {
	return (
		<Router>
			<Routes>
				<Route exact path='/' element={<Layout />}></Route>
				<Route path='/nft' element={<NftLayout />}></Route>
			</Routes>
		</Router>
	)
}

export default App
