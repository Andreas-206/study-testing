import LoginForm from './components/LoginForm/LoginForm'
import Forma from './components/Form/Form'
import './App.css'

  const App = () => {
		const handleLogin = userData => {
			console.log(userData)
		}

		return (
			<div>
				<h1>Please login to your account!</h1>
				<LoginForm onSubmit={handleLogin} />
				<Forma />
			</div>
		)
	}

export default App
