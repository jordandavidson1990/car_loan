import React, { useState } from 'react';
import Form from '../components/Form'
import PriceForm from '../components/PriceForm'

function MainContainer() {

    const [vehiclePrice, setVehiclePrice] = useState(0)


    const passPrice = (num) => {
        setVehiclePrice(num)
    }


    return (
        <>
            <PriceForm passPrice={passPrice} />
            <Form vehiclePrice={vehiclePrice} />
        </>
    )
}

export default MainContainer