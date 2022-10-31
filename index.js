// Fetching

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

// language

// const options = {
// 	method: 'GET',
// 	headers: {
// 		'X-RapidAPI-Key': 'b772aa655cmshd6b3aab9ad7d7e0p10a524jsn57a88a590afb',
// 		'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com',
// 		'Accept-Encoding': 'null'
// 	}
// };

// fetch('https://microsoft-translator-text.p.rapidapi.com/languages?api-version=3.0', options)
// 	.then(response => response.json())
// 	.then(response => console.log(response))
// 	.catch(err => console.error(err));



	// Body 
	let drop=document.getElementById("dropdown")
	drop.addEventListener('click',function (){
		// console.log("clicked")
		for (let i=0;i<10;i++){
			drop.createElement('option')	  
		}
	})
