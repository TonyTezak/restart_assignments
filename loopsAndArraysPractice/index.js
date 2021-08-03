/*
#1
Loop through the following array and count how many "computers" there are. Log the final count:
*/

var officeItems = ["stapler", "monitor", "computer", "desk", "lamp", "computer", "lamp", "stapler", "computer",  "computer"]

for (var i = 0; i< officeItems.length; i++){
    if (officeItems[i] === "computer"){
        console.log (officeItems[i])
    }
}

/*
#2
Loop through the following array and log to the console "old enough" if they are 18 or older, and "not old enough" 
if thy aren't 18.
*/

var peopleWhoWantToSeeMadMaxFuryRoad = [
    {
      name: "Mike",
      age: 12,
      gender: "male"
    },{
      name: "Madeline",
      age: 80,
      gender: "female"
    },{
      name: "Cheryl",
      age: 22,
      gender: "female"
    },{
      name: "Sam",
      age: 30,
      gender: "male"
    },{
      name: "Suzy",
      age: 4,
      gender: "female"
    }
  ] 

  for (var i = 0; i < peopleWhoWantToSeeMadMaxFuryRoad.length; i++){
      if (peopleWhoWantToSeeMadMaxFuryRoad[i].age >= 18){
      console.log ("Please invite " + peopleWhoWantToSeeMadMaxFuryRoad[i].name + " inside to come see the movie.")
  }else{
      console.log ("Please escort " + peopleWhoWantToSeeMadMaxFuryRoad[i].name + " to the next showing of Care Bears: Hearts That Care")
  }
}

const numOne = [2, 5, 435, 4, 3] 
var sum = 0
/*const numTwo = [1, 1, 1, 1, 3]   
const numThree = [9, 3, 4, 2]    */

for (i = 0; i < numOne.length; i++){
    sum += numOne[i]
    //console.log(sum)
     if (sum  % 2 === 0){
        console.log("The first light is off")
    }else{
        console.log("The first light is on")
    } 
}

const numTwo = [1, 1, 1, 1, 3]
var sum = 0
for (i = 0; i < numTwo.length; i++){
    sum += numTwo[i]
    if (sum % 2 === 0){
        console.log("The second light is off")
    }else{
        console.log("The second light is on")
    }
}