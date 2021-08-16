//Write a function that gets the JSON and parses the JSON to create an array of objects

axios.get("https://api.vschool.io/pokemon")
// .then(response => console.log(response.data)) 
.then(response => {
     for (let i = 0; i < response.data.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = response.data.objects[i].pokemon.name
        document.body.appendChild(h1)
    }
}) 
.catch(error => console.log(error))