import React, { useState, useEffect } from 'react';
import Form from '../components/Form'
import PriceForm from '../components/PriceForm'
import LoanSchemeTable from '../components/LoanSchemeTable'
import './MainContainer.css'

function MainContainer() {

    const [vehiclePrice, setVehiclePrice] = useState(0)
    const [vehicleDetails, setVehicleDetails] = useState({})
    const [showTable, setShowTable] = useState(false)

    const passPrice = (num) => {
        setVehiclePrice(num)
    }

    const calculateLoanScheme = (vehicle) => {
        setVehicleDetails(vehicle);
        setShowTable(true)
    }


    return (
        <>
            <section className="form">
                <PriceForm passPrice={passPrice} />
                <Form
                    vehiclePrice={vehiclePrice}
                    calculateLoanScheme={calculateLoanScheme} />
            </section>
            <div>
                {showTable ?
                    <LoanSchemeTable vehicle={vehicleDetails} /> : null}
            </div>

        </>
    )
}

export default MainContainer