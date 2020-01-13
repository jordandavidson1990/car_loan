import React, { useState } from 'react';
import Form from '../components/forms/Form'
import PriceForm from '../components/forms/PriceForm'
import LoanSchemeTable from '../components/tables/LoanSchemeTable'
import './MainContainer.css'
import PaybackTable from '../components/tables/PaybackTable';
import VehicleContainer from './VehicleContainer'

function MainContainer() {

    const [vehiclePrice, setVehiclePrice] = useState(0)
    const [vehicleDetails, setVehicleDetails] = useState({})
    const [showTable, setShowTable] = useState(false)

    const passPrice = (num) => {
        setVehiclePrice(parseInt(num))
    }

    // shows the table and passes the form info to the tables and list
    const calculateLoanScheme = (vehicle) => {
        setVehicleDetails(vehicle);
        setShowTable(true)
    }

    // change the number to currency for readability
    const localeStringSpecs = { maximumFractionDigits: 2, style: 'currency', currency: 'GBP' }
    const uk = 'en-uk';

    return (
        <>
            <section className="form">
                <PriceForm
                    passPrice={passPrice} />
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
                        <VehicleContainer
                            vehicle={vehicleDetails}
                            localeStringSpecs={localeStringSpecs}
                            uk={uk} />
                    </div> : null}
            </div>

        </>
    )
}

export default MainContainer