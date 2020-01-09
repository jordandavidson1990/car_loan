import React, { useState, useEffect } from 'react';

function Form({ vehiclePrice }) {

    const [minimumDeposit, setMinimumDeposit] = useState(0)

    useEffect(() => {
        getMinDeposit()
    }, [vehiclePrice])

    const getMinDeposit = () => {
        // min deposit is 15% of price
        console.log('minimumDeposit', minimumDeposit);
        setMinimumDeposit(vehiclePrice * 0.15)
    }

    const handleForm = (event) => {
        event.preventDefault()
    }



    // const minimumDeposit = () => {
    //     debugger
    //     // minimum deposit is 15% of vehicle price
    //     const min = vehiclePrice * 0.15;
    //     return min;
    // }



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