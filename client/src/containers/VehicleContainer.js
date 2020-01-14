import React, { useState, useEffect } from 'react'
import PropTypes from 'prop-types';
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
    }, [vehicle, url]
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

VehicleContainer.propTypes = {
    vehicle: PropTypes.object,
    localeStringSpecs: PropTypes.object,
    uk: PropTypes.string
}

export default VehicleContainer;
