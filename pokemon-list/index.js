//Write a function that gets the JSON and parses the JSON to create an array of objects

axios.get("https://api.vschool.io/pokemon")
// .then(response => console.log(response.data)) 

 .then(response => {
    const gottaGetThemAll = response.data.objects[0].pokemon
    console.log(gottaGetThemAll)
      for (let i = 0; i < gottaGetThemAll.length; i++){
        const h1 = document.createElement('h1')
        h1.textContent = gottaGetThemAll[i].name
        document.body.appendChild(h1)
    } 
}) 
.catch(error => console.log(error)) 

