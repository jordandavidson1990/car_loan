import React from 'react'
import VehicleItem from './VehicleItem'
import './VehicleList.css'

function VehicleList({ potentialVehicles, localeStringSpecs, uk }) {
    if (!potentialVehicles) {
        return <p>Find your next dream car...</p>
    }

    function carList() {
        const item = potentialVehicles.map((vehicle, index) => {
            return (
                <VehicleItem
                    vehicle={vehicle}
                    key={index}
                    localeStringSpecs={localeStringSpecs}
                    uk={uk} />)
        })
        return item
    }
    return (
        <>
            <h3 id="potentialVehiclesHeading">Potential Vehicles</h3>
            <div className="vehicleList">
                {carList()}
            </div>
        </>
    )
}

export default VehicleList