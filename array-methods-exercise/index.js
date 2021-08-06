var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];

//Remove the last item from the vegetable array.
// fruit.pop()
// console.log (fruit)

//Remove the first item from the fruit array.
// fruit.shift()
// console.log(fruit)

//Find the index of "orange."
// const orangeIndex = fruit.indexOf("orange")
// console.log(orangeIndex)

//Add that number to the end of the fruit array
// const orangeIndex = fruit.indexOf("orange")
// fruit.push(orangeIndex)
// console.log(fruit)

//Use the length property to find the length of the vegetable array.
// console.log(vegetables.length)

//Add that number to the end of the vegetable array.
// const veggieLength = vegetables.length
// vegetables.push(veggieLength)
// console.log(vegetables)

//Put the two arrays together into one array. Fruit first. Call the new Array "food".
var foods = fruit.concat(vegetables)
console.log(foods)

//Remove 2 elements from your new array starting at index 4 with one method.
foods.splice(4, 2)
console.log(foods)

//Reverse your array.
const backFoods = foods.reverse()
console.log(backFoods)

//Turn the array into a string and return it.
