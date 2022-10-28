const options = {
	method: 'POST',
	headers: {
		'content-type': 'application/json',
		'X-RapidAPI-Key': config.API_KEY,
		'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
	},
	body: '[{"Text":"I would really like to drive your car around the block a few times."}]'
};

fetch('https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=bn&api-version=3.0&profanityAction=NoAction&textType=plain', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));