import React, { useState, useEffect } from 'react';
import Form from '../components/Form'
import PriceForm from '../components/PriceForm'
import LoanSchemeTable from '../components/LoanSchemeTable'

function MainContainer() {

    const [vehiclePrice, setVehiclePrice] = useState(0)
    const [vehicleDetails, setVehicleDetails] = useState({})

    const passPrice = (num) => {
        setVehiclePrice(num)
    }

    // useEffect(() => {
    //     getVehicle()
    // }
    // )

    const calculateLoanScheme = (vehicle) => {
        setVehicleDetails(vehicle);
    }


    return (
        <>
            <PriceForm passPrice={passPrice} />
            <Form
                vehiclePrice={vehiclePrice}
                calculateLoanScheme={calculateLoanScheme} />
            <LoanSchemeTable />
        </>
    )
}

export default MainContainer