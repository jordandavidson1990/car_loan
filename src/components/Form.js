import React, { useState, useEffect } from 'react';

function Form({ vehiclePrice, calculateLoanScheme }) {

    const [minimumDeposit, setMinimumDeposit] = useState(0)

    useEffect(() => {
        getMinDeposit()
    }, [vehiclePrice])

    const getMinDeposit = () => {
        // min deposit is 15% of price
        setMinimumDeposit(vehiclePrice * 0.15)
    }

    const handleForm = (event) => {
        event.preventDefault();
        makeVehicle(event.target);
    }

    const makeVehicle = (target) => {
        const newVehicle = ({
            price: vehiclePrice,
            depositAmount: target.depositAmount.value,
            deliveryDate: target.deliveryDate.value,
            financeOption: target.financeOption.value
        })
        calculateLoanScheme(newVehicle);
    }

    return (
        <form onSubmit={handleForm}>
            <label htmlFor="depositAmount">Deposit Amount: </label>
            <input type="number" id="depositAmount" min={minimumDeposit} />
            <label htmlFor="deliveryDate">Delivery Date: </label>
            <input type="date" name="deliveryDate" id="deliveryDate" />
            <label htmlFor="financeOption">Finance Years: </label>
            <select name="financeOption" id="financeOption">
                <option disabled>How many finance years...</option>
                <option value="1">1</option>
                <option value="2">2</option>
                <option value="3">3</option>
            </select>
            <input type="submit" />
        </form>
    )
}

export default Form