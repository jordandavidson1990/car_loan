import React, { useState, useEffect } from 'react'
import VehicleList from '../components/lists/VehicleList'
import './VehicleContainer'

function VehicleContainer({ vehicle, localeStringSpecs, uk }) {

    const url = `http://localhost:3001/getInfo?payment_type=monthly&min_price=${vehicle.minMonthly}&max_price=${vehicle.maxMonthly}&sort_order=monthly_payment_up`
    const [potentialVehicles, setPotentialVehicles] = useState([])

    useEffect(() => {
        // fetches the vehicles from the backend and slices it so it is only the top 6
        const getPotentialVehicles = () => {
            fetch(url)
                .then(res => res.json())
                .then(data => setPotentialVehicles(data.searchResults.slice(0, 6)))
        }
        getPotentialVehicles()
    }, []
    )



    return (
        <>
            <VehicleList
                className="vehicleList"
                potentialVehicles={potentialVehicles}
                localeStringSpecs={localeStringSpecs}
                uk={uk} />
        </>
    )
}

export default VehicleContainer;