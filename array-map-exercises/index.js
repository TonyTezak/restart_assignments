//1) Make an array of numbers that are doubles of the first array

/* const arr = [2, 5, 100]
const doubleNumbers = arr.map(function(num){
    return num * 2
})
  console.log(doubleNumbers) */

  //2) Take an array of numbers and make them strings

/* const arr = [2, 5, 100]
const stringItUp = arr.map(function(num){
return num.toString()
})
  console.log(stringItUp) // ["2", "5", "100"] */

  //3) Capitalize each of an array of names

/*   const notQuiteCaps = ["john", "JACOB", "jinGleHeimer", "schmidt"]
  const capitalizeNames = notQuiteCaps.map(function(word){
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase()
  })
  console.log(capitalizeNames) */
  
//4) Make an array of strings of the names

/* const namesAges = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

const namesOnly = namesAges.map(function(who){
    return who.name
})
console.log(namesOnly) */

//5) Make an array of strings of the names saying 
//whether or not they can go to The Matrix

/* const whichFilm = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]
const makeStrings = whichFilm.map(function(canGo){
    if (canGo.age >= 18){
        return `${canGo.name} can see The Matrix`
    }else{
        return `${canGo.name} can see Puppies On Parade`
    }
})
  console.log(makeStrings) */

//6) Make an array of the names in h1s, and the ages in h2s  

const namesAges = [
    {
        name: "Angelina Jolie",
        age: 80
    },
    {
        name: "Eric Jones",
        age: 2
    },
    {
        name: "Paris Hilton",
        age: 5
    },
    {
        name: "Kayne West",
        age: 16
    },
    {
        name: "Bob Ziroll",
        age: 100
    }
]

const readyToPutInTheDom = namesAges.map(function(user){
    return "<h1>" + user.name + "</h1> " + "<h2>" + user.age + "</h2>"
})
console.log(readyToPutInTheDom)