import LoginForm from './components/LoginForm/LoginForm'
import Form from './components/Form/Form'


import './App.css'

  const App = () => {
		const handleLogin = userData => {
			console.log(userData)
		}

		return (
			<div>
				<h1>Please login to your account!</h1>
				<LoginForm onSubmit={handleLogin} />
			</div>
		)
	}

export default App
