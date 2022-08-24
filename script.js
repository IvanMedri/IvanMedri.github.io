// Include everything in post1.html into the .page element where this code was included. Execute all scripts in post1.html (Necessary to transform math before including it in the main page).
const contenidos = document.querySelector('.page')
fetch('/post1.html') 
.then(res=>res.text())
.then(data=>{
	contenidos.innerHTML = data
	const parser = new DOMParser()
	const doc = parser.parseFromString(data, 'text/html')
	eval(doc.querySelector('script').textContent)
})


 

