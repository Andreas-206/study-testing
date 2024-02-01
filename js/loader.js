function showLoader() {
	document.getElementById('loader').style.display = 'block'
}

function hideLoader() {
	document.getElementById('loader').style.display = 'none'
}

function makeRequest() {
  showLoader();

	fetch('https://jsonplaceholder.typicode.com/todos/1')
		.then(response => response.json())
		.then(data => {
			console.log(data)
			setTimeout(() => {
				hideLoader()
			}, 1000)
		})
		.catch(error => {
			console.error('Error:', error)
      hideLoader();
		})
}
