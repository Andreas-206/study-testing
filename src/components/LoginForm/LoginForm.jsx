const LoginForm = ({ onSubmit }) => {
	const handleSubmit = evt => {
		evt.preventDefault()

		const form = evt.target
		const { login, password } = form.elements

		// Викликаємо пропс onSubmit
		onSubmit({
			login: login.value,
			password: password.value,
		})

		form.reset()
	}

	return (
		<form onSubmit={handleSubmit}>
			<input type='text' name='login' placeholder="login" />
			<input type='password' name='password' placeholder="password" />
			<button type='submit'>Login</button>
		</form>
	)
}
export default LoginForm