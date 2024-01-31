import iziToast from 'izitoast'
import 'izitoast/dist/css/iziToast.min.css'

const messages = {
	showInfo: textMessage => {
		if (isValidMessage(textMessage)) showMessage(textMessage, 'info')
	},
	showSuccess: textMessage => {
		if (isValidMessage(textMessage)) showMessage(textMessage, 'success')
	},
	showError: textMessage => {
		if (isValidMessage(textMessage)) showMessage(textMessage, 'error')
	},
}

export default messages

const isValidMessage = textMessage => {
	// const minLength = 1;
	const maxLength = 100

	// const messageLength = textMessage.trim().length;
	return textMessage.trim().length <= maxLength
}

// const showMessage = (message, type = '') => {
//   iziToast[type]({
//     title: message,
//     position: 'bottomCenter',
//     closeOnEscape: true,
//     closeOnClick: true,
//     timeout: 5000,
//   });
// };

const showMessage = (message, type = '') => {
	const maxLength = 50

	const lines = []
	while (message.length > maxLength) {
		lines.push(message.slice(0, maxLength))
		message = message.slice(maxLength)
	}
	lines.push(message)

	lines.forEach((line, index) => {
		iziToast[type]({
			title: index === 0 ? line : '',
			message: index === 0 ? '' : line,
			position: 'bottomCenter',
			closeOnEscape: true,
			closeOnClick: true,
			timeout: 5000,
		})
	})
}
