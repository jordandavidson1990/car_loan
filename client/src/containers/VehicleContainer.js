import React, { useState, useEffect } from 'react'
import VehicleList from '../components/VehicleList'
import './VehicleContainer'

function VehicleContainer({ vehicle, localeStringSpecs, uk }) {
    const url = 'http://localhost:3001/getInfo'
    const [potentialVehicles, setPotentialVehicles] = useState([])

    useEffect(() => {
        const getPotentialVehicles = () => {
            console.log('fetch')
            fetch(url + `?payment_type=monthly&min_price=100&max_price=${vehicle.price / (vehicle.financeOption * 12)}&sort_order=monthly_payment_up`)
                .then(res => res.json())
                .then(data => setPotentialVehicles(data.searchResults.slice(0, 6)))
        }
        getPotentialVehicles()
    }
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