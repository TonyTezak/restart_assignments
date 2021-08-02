document.addEventListener ("submit", function(event){
    event.preventDefault()

    const newItem = document.getElementById("list")
    const addGrocery = document.addItem.title.value

    const newDiv = document.createElement("div")
    const newButtonRemove = document.createElement("button")
        newButtonRemove.textContent = "X"  
    const newListItem = document.createElement("list")
        newListItem.textContent = " " + addGrocery + " "
    const newButtonEdit = document.createElement("Button")
        newButtonEdit.textContent = "Edit"
       /* document.addEventListener("onclick", function(event){
        const newInput = event.document.createElement("form")
            document.newDiv.append(newInput)
            event.preventDefault()
            newButtonEdit.textContent = "Save"
            newInput.textContent = " " + addGrocery + " "
                document.addEventListener("onclick", function(event){
                    newListItem.textContent = " " + newInput.value + " "
                    event.target.newInput.remove
                    newButtonEdit.textContent = "Edit" 
// })
        })
    }) */
        newButtonRemove.addEventListener("click", function(event){
            event.target.parentNode.remove()
        })

    newItem.append(newDiv)   
    newDiv.append(newButtonRemove) 
    newDiv.append(newListItem)
    newDiv.append(newButtonEdit)

    document.addItem.title.value = ""
})
