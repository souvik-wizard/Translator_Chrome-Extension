
fetch('https://slackauthclickup.vercel.app/souvik/extension')
.then(response => response.json())
.then(response => {
	let languages = response.translation
	let langCodes=Object.keys(languages)
	let langNames =Object.values(languages)
	let langs = document.querySelector("#languages")
	for(let i=0;i<langCodes.length;i++){
	langs.innerHTML+= `<option value="${langCodes[i]}"> ${langNames[i].name}</option>`
}
})
	let translate = document.getElementById("translate")
	let lang=document.getElementById("languages")

	translate.addEventListener("click",()=>{
		let translateto=lang.value
		let yourtext=document.getElementById("text").value
		const options = {
			method: 'POST',
			headers: {
				'content-type': 'application/json',
				'X-RapidAPI-Key': config.mykey,
				'X-RapidAPI-Host': 'microsoft-translator-text.p.rapidapi.com'
			},
			body: `[{"Text":"${yourtext}"}]`
		};	
		fetch(`https://microsoft-translator-text.p.rapidapi.com/translate?to%5B0%5D=${translateto}&api-version=3.0&profanityAction=NoAction&textType=plain`, options)
			.then(response => response.json())
			.then(response => {
				let resulttext=response[0].translations[0].text
				let displaytext=document.getElementById("display")
				displaytext.innerText=resulttext
				var copybtn=document.getElementById('clipboard')
				copybtn.addEventListener("click",() =>{
					console.log(resulttext)
					navigator.clipboard.writeText(resulttext)
				})

			})
			.catch(err => console.error(err));
})

.catch(err => console.error(err));
