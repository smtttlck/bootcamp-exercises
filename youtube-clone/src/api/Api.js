const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'KJwZZIJSFimshuivMSVGaiYzkRomp15f2vKjsnK4bKzuUzVLzA',
		'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com'
	}
}

export const fetchFromApi = async (url) => {
    const baseUrl = 'https://youtube-v31.p.rapidapi.com/'
	try {
		return await fetch(baseUrl+url, options)
						.then(response => response.json())
	}
	catch(error){
		console.log(error)
	}

}
