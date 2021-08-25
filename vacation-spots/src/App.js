import React from "react"
import Card from "./Cards/Card"
import vacationData from "./vacationSpots.js"

function App(){
    const vacayComponents = vacationData.map(spot => <Card key={spot.place} image={spot.image} place={spot.place} price={spot.price} season={spot.timeToGo}/>)

return(
<div>
    {vacayComponents}
</div>
    )
}

export default App