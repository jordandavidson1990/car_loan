import React from 'react';
import './VehicleItem.css'

function VehicleItem({ vehicle, localeStringSpecs, uk }) {
    if (!vehicle) {
        return null
    }
    const priceInfo = vehicle.salesInfo.pricing

    function photo() {
        if (!vehicle.photos[0]) {
            return <img src={require('../assets/no-image.png')}></img>
        } else {
            return <img src={vehicle.photos[0]}></img>
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
{/* <span>Per Month: {vehicle.salesInfo.pricing.monthlyPayment.toLocaleString(uk, localeStringSpecs)}</span>
                <span>Deposit: {vehicle.salesInfo.pricing.deposit.toLocaleString(uk, localeStringSpecs)}</span> */}

export default VehicleItem