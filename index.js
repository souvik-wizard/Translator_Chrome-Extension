// Fetching

fetch('https://slackauthclickup.vercel.app/souvik/extension%27')
.then(response => response.json())
.then(response => {
	let languages = response.translation
	let langCodes=Object.keys(languages)
	let langNames =Object.values(languages)
	// console.log(langNames)
	// console.log(langCodes);
	let langs = document.getElementById("languages")
	for(let i=0;i<langCodes.length;i++){
	langs.innerHTML+= `<option value="${langCodes[i]}"> ${langNames[i].name}</option>`
}
// let translate = document.getElementById("translate")
// let lang=document.querySelector("#languages").value

// translate.addEventListener("click",()=>{
//     console.log("clicked")
//     console.log(lang)
// })
})
.catch(err => console.error(err));

	// Body 
	let drop=document.getElementById("dropdown")
	drop.addEventListener('click',function (){
		// console.log("clicked")
		for (let i=0;i<10;i++){
			drop.createElement('option')	  
		}
	})
