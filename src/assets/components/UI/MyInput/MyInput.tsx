import './MyInput.module.scss'

const MyInput = ({ title, onInputChange }) => {
	const inputChange = e => {
		onInputChange(title, e.target.value)
	}

	return <input type='text' placeholder={title} onChange={inputChange} />
}

export default MyInput
