import React from 'react';
import PropTypes from 'prop-types';
import './VehicleItem.css'

function VehicleItem({ vehicle, localeStringSpecs, uk }) {
    if (!vehicle) {
        return null
    }
    const priceInfo = vehicle.salesInfo.pricing

    function photo() {
        // if no picture is there set the picture as stock photo of coming soon 
        if (!vehicle.photos[0]) {
            return <img src={require('../../assets/no-image.png')} alt="unphotographed-car"></img>
        } else {
            return <img src={vehicle.photos[0]} alt={vehicle.name}></img>
        }
    }

    function usageInfo() {

        const summary = vehicle.salesInfo.summary
        return (
            <ul className="usage-info">
                <li className="mileage">{summary[0]}</li>
                <li className="condition">{summary[1]}</li>
                <li className="mpg">{summary[2]}</li>
            </ul>
        )
    }

    function monthly() {
        // some cars dont have option for monthly payments so have to add condition
        if (!priceInfo.monthlyPayment) { return null }
        return <span>Monthly: {priceInfo.monthlyPayment.toLocaleString(uk, localeStringSpecs)}
        </span>
    }

    function deposit() {
        // some cars dont have a deposit amount
        if (!priceInfo.deposit) { return null }
        return <span>Deposit: {priceInfo.deposit.toLocaleString(uk, localeStringSpecs)}
        </span>
    }


    return (
        <>
            <div className="vehicleItem">
                {photo()}
                <h2>{vehicle.title.name}</h2>
                {usageInfo()}
                <span>Only: {priceInfo.cashPrice.toLocaleString(uk, localeStringSpecs)}</span>
                {monthly()}
                {deposit()}
            </div>
        </>
    )
}

VehicleItem.propTypes = {
    // vehicle, localeStringSpecs, uk
    vehicle: PropTypes.object,
    localeStringSpecs: PropTypes.object,
    uk: PropTypes.string
}

export default VehicleItem