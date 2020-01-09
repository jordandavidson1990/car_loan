import React, { useState, useEffect } from 'react';
import Form from '../components/Form'
import PriceForm from '../components/PriceForm'
import LoanSchemeTable from '../components/LoanSchemeTable'
import './MainContainer.css'
import PaybackTable from '../components/PaybackTable';

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

    const localeStringSpecs = { maximumFractionDigits: 2, style: 'currency', currency: 'GBP' }
    const uk = 'en-uk';

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
                    <div>
                        <LoanSchemeTable
                            vehicle={vehicleDetails}
                            localeStringSpecs={localeStringSpecs}
                            uk={uk} />
                        <PaybackTable
                            vehicle={vehicleDetails}
                            localeStringSpecs={localeStringSpecs}
                            uk={uk} />

                    </div> : null}
            </div>


        </>
    )
}

export default MainContainer